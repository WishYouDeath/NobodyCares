const STORAGE_KEY = 'test_mode';
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

let questions = [...sampleQuestions];
let userAnswers = {};
let questionStates = {};
let isExamTest = false;
let examQuestions = [];

const questionsContainer = document.getElementById('questions-container');
const shuffleBtn = document.getElementById('shuffle-btn');
const shuffleBottomBtn = document.getElementById('shuffle-bottom-btn');
const resetBtn = document.getElementById('reset-btn');
const resetBottomBtn = document.getElementById('reset-bottom-btn');
const progressBar = document.getElementById('progress');

const correctCountEl = document.getElementById('correct-count');
const totalCountEl = document.getElementById('total-count');
const progressPercentEl = document.getElementById('progress-percent');
const accuracyPercentEl = document.getElementById('accuracy-percent');

const correctCountBottomEl = document.getElementById('correct-count-bottom');
const totalCountBottomEl = document.getElementById('total-count-bottom');
const progressPercentBottomEl = document.getElementById('progress-percent-bottom');
const accuracyPercentBottomEl = document.getElementById('accuracy-percent-bottom');

let allQuestions = [...sampleQuestions]; // Сохраняем все вопросы
let isFinalTest = false;
let finalTestQuestions = [];

document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeQuestionStates();
    displayQuestions();
    updateStats();
    checkModeOnLoad();  // Добавьте этот вызов
});

function saveModeToStorage() {
    const modeData = {
        mode: getCurrentMode(),
        timestamp: Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(modeData));
}

function loadModeFromStorage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;
    
    try {
        const modeData = JSON.parse(saved);
        // Проверяем, не устарели ли данные (например, больше часа)
        const oneHour = 60 * 60 * 1000;
        if (Date.now() - modeData.timestamp > oneHour) {
            localStorage.removeItem(STORAGE_KEY);
            return null;
        }
        return modeData.mode;
    } catch (e) {
        console.error('Ошибка при загрузке режима:', e);
        return null;
    }
}

function getCurrentMode() {
    if (isFinalTest) return 'final-test';
    if (isExamTest) return 'exam-test';
    return 'training';
}

function initializeEventListeners() {
    shuffleBtn.addEventListener('click', shuffleQuestions);
    shuffleBottomBtn.addEventListener('click', shuffleQuestions);
    resetBtn.addEventListener('click', resetAnswers);
    resetBottomBtn.addEventListener('click', resetAnswers);
    
    // Существующие кнопки итогового теста
    document.getElementById('generate-final-test-btn').addEventListener('click', generateFinalTest);
    document.getElementById('return-to-training-btn').addEventListener('click', returnToTraining);
    
    // Новые кнопки для вопросов прошлых лет
    document.getElementById('exam-test-btn').addEventListener('click', startExamTest);
    document.getElementById('return-from-exam-btn').addEventListener('click', returnFromExamTest);
}

function initializeQuestionStates() {
    questions.forEach(question => {
        if (question.type === 'matching') {
            // Создаем перемешанный порядок ответов для этого вопроса
            const allAnswers = question.pairs.map(pair => pair.answer);
            if (question.extraAnswers) {
                allAnswers.push(...question.extraAnswers);
            }
            const shuffledAnswers = shuffleArray(allAnswers);
            
            questionStates[question.id] = {
                answered: false,
                correct: false,
                firstTry: true,
                userSelections: {},
                shuffledAnswers: shuffledAnswers // Сохраняем перемешанный порядок
            };
        } else {
            questionStates[question.id] = {
                answered: false,
                correct: false,
                firstTry: true,
                userSelections: question.type === 'matching' ? {} : []
            };
        }
    });
}

// Функция для генерации итогового теста
function generateFinalTest() {
    isExamTest = false; // Добавьте эту строку
    // Определяем темы и их диапазоны
    const topics = [
        { name: 'Тема 1', start: 1, end: 26 },
        { name: 'Тема 2', start: 27, end: 50 },
        { name: 'Тема 3', start: 51, end: 74 },
        { name: 'Тема 4', start: 75, end: 99 },
        { name: 'Тема 5', start: 100, end: 124 },
        { name: 'Тема 6', start: 125, end: 146 },
        { name: 'Тема 7', start: 147, end: 170 },
        { name: 'Тема 8', start: 171, end: 190 }
    ];
    
    finalTestQuestions = [];
    
    // Для каждой темы выбираем примерно по 6-7 вопросов (50/8 ≈ 6.25)
    topics.forEach(topic => {
        const topicQuestions = allQuestions.filter(q => q.id >= topic.start && q.id <= topic.end);
        const questionsInTopic = topicQuestions.length;
        
        // Вычисляем сколько вопросов взять из этой темы (примерно 6-7)
        // Берем примерно каждый 4-й вопрос из темы
        const questionsToTake = Math.min(Math.ceil(questionsInTopic / 4), 7);
        
        // Если в теме мало вопросов, берем все
        if (questionsInTopic <= questionsToTake) {
            finalTestQuestions = finalTestQuestions.concat(topicQuestions);
        } else {
            // Выбираем случайные вопросы из темы
            const shuffled = shuffleArray([...topicQuestions]);
            finalTestQuestions = finalTestQuestions.concat(shuffled.slice(0, questionsToTake));
        }
    });
    
    // Если выбрали меньше 50 вопросов, добавляем еще случайных
    if (finalTestQuestions.length < 50) {
        const remaining = 50 - finalTestQuestions.length;
        const allQuestionsCopy = [...allQuestions];
        
        // Убираем уже выбранные вопросы
        const finalTestIds = finalTestQuestions.map(q => q.id);
        const availableQuestions = allQuestionsCopy.filter(q => !finalTestIds.includes(q.id));
        
        // Выбираем случайные из оставшихся
        const additionalQuestions = shuffleArray(availableQuestions).slice(0, remaining);
        finalTestQuestions = finalTestQuestions.concat(additionalQuestions);
    }
    
    // Если больше 50, обрезаем
    if (finalTestQuestions.length > 50) {
        finalTestQuestions = finalTestQuestions.slice(0, 50);
    }

    resetAnswers();
    
    // Перемешиваем все вопросы итогового теста
    finalTestQuestions = shuffleArray(finalTestQuestions);
    
    // Устанавливаем флаг итогового теста
    isFinalTest = true;
    
    // Обновляем вопросы
    questions = finalTestQuestions;
    
    // Сбрасываем ответы и статистику
    userAnswers = {};
    initializeQuestionStates();
    
    // Обновляем отображение
    updateUIForFinalTest();
    displayQuestions();
    updateStats();
    saveModeToStorage();
}

function getImagePath(imageName) {
    if (!imageName) return '';
    
    // Если путь уже полный, возвращаем как есть
    if (imageName.startsWith('http://') || 
        imageName.startsWith('https://') ||
        imageName.startsWith('/') ||
        imageName.startsWith('./') ||
        imageName.startsWith('../')) {
        return imageName;
    }
    
    // Проверяем разные варианты путей
    if (imageName.startsWith('images/questions/') || 
        imageName.startsWith('images/past_years/')) {
        return imageName;
    }
    
    // Если путь содержит только имя файла, добавляем базовый путь
    if (imageName.includes('.jpg') || imageName.includes('.png') || imageName.includes('.gif')) {
        return 'images/past_years/' + imageName;
    }
    
    return imageName;
}

// Функция для возврата к тренировке
function returnToTraining() {
    isFinalTest = false;
    isExamTest = false;
    questions = [...allQuestions];
    
    // Сбрасываем ответы и статистику
    resetAnswers();
    
    updateUIForTraining();
    displayQuestions();
    updateStats();

    saveModeToStorage();
}

function startExamTest() {
    // Проверяем, загружен ли файл с вопросами
    if (typeof examQuestionsData === 'undefined') {
        alert('Файл с вопросами прошлых лет не загружен!');
        return;
    }
    
    isExamTest = true;
    isFinalTest = false;
    
    // Загружаем вопросы из exam_test.js
    examQuestions = [...examQuestionsData];
    questions = examQuestions;
    
    // ПОЛНОСТЬЮ сбрасываем прогресс - это ключевой момент
    userAnswers = {};
    questionStates = {};
    
    // Инициализируем состояния для новых вопросов
    initializeQuestionStates();
    
    // Обновляем UI
    updateUIForExamTest();
    displayQuestions();
    updateStats(); // Эта функция должна обновить статистику с нуля

    saveModeToStorage();
}



function updateUIForExamTest() {
    const title = document.querySelector('h1');
    if (title) {
        title.innerHTML = 'Вопросы прошлых лет';
    }
    
    // Показываем/скрываем кнопки
    document.getElementById('generate-final-test-btn').classList.add('hidden');
    document.getElementById('return-to-training-btn').classList.add('hidden');
    document.getElementById('exam-test-btn').classList.add('hidden');
    document.getElementById('return-from-exam-btn').classList.remove('hidden');
    
    // Добавляем класс для экзамена
    const testSection = document.getElementById('test-section');
    if (testSection) {
        testSection.classList.remove('final-test');
        testSection.classList.add('exam-test');
    }
}


// Функция для возврата из теста прошлых лет
function returnFromExamTest() {
    isExamTest = false;
    isFinalTest = false;
    questions = [...allQuestions];
    
    // ПОЛНОСТЬЮ сбрасываем прогресс
    userAnswers = {};
    questionStates = {};
    
    // Инициализируем состояния для тренировочных вопросов
    initializeQuestionStates();
    
    // Обновляем UI
    updateUIForTraining();
    displayQuestions();
    updateStats();

    saveModeToStorage();
}

function returnToTraining() {
    isFinalTest = false;
    isExamTest = false; // Добавьте эту строку
    questions = [...allQuestions];
    
    resetAnswers();
    
    updateUIForTraining();
    displayQuestions();
    updateStats();
}

// Обновление UI для итогового теста
function updateUIForFinalTest() {
    const title = document.querySelector('h1');
    if (title) {
        title.innerHTML = 'Итоговый тест (50 вопросов)';
    }
    
    // Показываем/скрываем кнопки
    document.getElementById('generate-final-test-btn').classList.add('hidden');
    document.getElementById('return-to-training-btn').classList.remove('hidden');
    document.getElementById('exam-test-btn').classList.add('hidden');
    document.getElementById('return-from-exam-btn').classList.add('hidden');
    
    // Добавляем класс для итогового теста
    const testSection = document.getElementById('test-section');
    if (testSection) {
        testSection.classList.add('final-test');
        testSection.classList.remove('exam-test');
    }
}

// Обновление UI для тренировки
function updateUIForTraining() {
    const title = document.querySelector('h1');
    if (title) {
        title.innerHTML = 'Вопросы по сетям';
    }
    
    // Показываем основные кнопки
    document.getElementById('generate-final-test-btn').classList.remove('hidden');
    document.getElementById('exam-test-btn').classList.remove('hidden');
    
    // Скрываем кнопки возврата
    document.getElementById('return-to-training-btn').classList.add('hidden');
    document.getElementById('return-from-exam-btn').classList.add('hidden');
    
    // Убираем специальные классы
    const testSection = document.getElementById('test-section');
    if (testSection) {
        testSection.classList.remove('final-test', 'exam-test');
    }
}

function displayQuestions() {
    questionsContainer.innerHTML = '';
    
    // Добавим заголовок с информацией о режиме
    if (isFinalTest) {
        const titleElement = document.createElement('div');
        titleElement.className = 'test-title';
        titleElement.textContent = `Итоговый тест: ${questions.length} вопросов`;
        questionsContainer.appendChild(titleElement);
    } else if (isExamTest) {
        const titleElement = document.createElement('div');
        titleElement.className = 'test-title';
        titleElement.textContent = `Вопросы прошлых лет: ${questions.length} вопросов`;
        questionsContainer.appendChild(titleElement);
    }
    
    questions.forEach((question, index) => {
        const questionState = questionStates[question.id];
        const questionElement = createQuestionElement(question, questionState, index);
        questionsContainer.appendChild(questionElement);
    });
    
    updateProgressBar();
    updateStats();
    addOptionListeners();
    highlightInputFields();
}

function createQuestionElement(question, questionState, index) {
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    
    if (questionState.answered) {
        questionElement.classList.add(questionState.correct ? 'correct' : 'incorrect');
    }
    
    // Показываем оригинальный номер вопроса
    let questionNumberText;
    if (isFinalTest) {
        questionNumberText = `Вопрос ${index + 1} из ${questions.length} (оригинальный №${question.id})`;
    } else if (isExamTest) {
        questionNumberText = `Вопрос ${index + 1} из ${questions.length} (экзаменационный №${question.id})`;
    } else {
        questionNumberText = `Вопрос ${index + 1} из ${questions.length}`;
    }
    
    questionElement.dataset.id = question.id;
    
    const statusInfo = getStatusInfo(questionState);
    
    let questionHTML = `
        <div class="question-number">
            ${questionNumberText}
            <span class="question-status ${statusInfo.class}">${statusInfo.text}</span>
        </div>
        <div class="question-text">${question.text}</div>
    `;
    
    if (question.image) {
        const imagePath = getImagePath(question.image);
        questionHTML += `<img src="${imagePath}" alt="Изображение для вопроса" class="question-image" onerror="this.style.display='none'">`;
    }
    
    questionHTML += `<div class="options">`;
    questionHTML += generateOptionsHTML(question, questionState);
    questionHTML += `</div>`;
    
    if (question.type === 'input' && questionState.answered && !questionState.correct) {
        questionHTML += `<div class="correct-answer-text"><strong>Правильный ответ:</strong> ${question.correctAnswer}</div>`;
    }
    
    questionElement.innerHTML = questionHTML;
    
    return questionElement;
}

function generateQuestionHTML(question, questionState, index) {
    const statusInfo = getStatusInfo(questionState);
    
    let questionHTML = `
        <div class="question-number">
            Вопрос ${index + 1} из ${questions.length}
            <span class="question-status ${statusInfo.class}">${statusInfo.text}</span>
        </div>
        <div class="question-text">${question.text}</div>
    `;
    
    if (question.image) {
        const imagePath = getImagePath(question.image);
        questionHTML += `<img src="${imagePath}" alt="Изображение для вопроса" class="question-image" onerror="this.style.display='none'">`;
    }
    
    questionHTML += `<div class="options">`;
    questionHTML += generateOptionsHTML(question, questionState);
    questionHTML += `</div>`;
    
    // Только для input с неправильным ответом показываем правильный ответ
    if (question.type === 'input' && questionState.answered && !questionState.correct) {
        questionHTML += `<div class="correct-answer-text"><strong>Правильный ответ:</strong> ${question.correctAnswer}</div>`;
    }
    
    return questionHTML;
}

function getStatusInfo(questionState) {
    if (!questionState.answered) {
        return { class: 'status-unanswered', text: 'Нет ответа' };
    }
    return questionState.correct ? 
        { class: 'status-correct', text: 'Верно' } : 
        { class: 'status-incorrect', text: 'Неверно' };
}

function generateOptionsHTML(question, questionState) {
    if (question.type === 'input') {
        const userAnswer = userAnswers[question.id] ? userAnswers[question.id][0] : '';
        const isDisabled = questionState.answered;
        
        let inputClass = '';
        if (questionState.answered) {
            inputClass = questionState.correct ? 'correct' : 'incorrect';
        }
        
        return `
            <div class="input-answer">
                <input type="text" class="answer-input ${inputClass}" 
                       placeholder="Введите ваш ответ..."
                       ${isDisabled ? 'disabled' : ''}
                       data-question="${question.id}"
                       value="${userAnswer}">
                ${!questionState.answered ? 
                    `<button class="btn btn-primary confirm-input-btn" data-question="${question.id}" style="margin-top: 10px;">
                        Проверить ответ
                    </button>` : ''
                }
            </div>
        `;
    }

    if (question.type === 'matching') {
        return generateMatchingHTML(question, questionState);
    }
    
    let optionsHTML = '';
    const inputType = question.type === 'multiple' ? 'checkbox' : 'radio';
    const inputName = `question-${question.id}`;
    
    let checkedOptions = [];
    if (questionState.answered) {
        checkedOptions = userAnswers[question.id] || [];
    } else {
        checkedOptions = userAnswers[question.id] || [];
    }
    
    question.options.forEach((option, optionIndex) => {
        const isChecked = checkedOptions.includes(optionIndex);
        const isDisabled = questionState.answered;
        
        let optionClass = '';
        if (questionState.answered) {
            if (option.correct) {
                optionClass = 'correct-answer';
            } else if (isChecked && !option.correct) {
                optionClass = 'incorrect-answer';
            }
        }
        
        optionsHTML += `
            <div class="option ${optionClass} ${isDisabled ? 'disabled' : ''}" data-option="${optionIndex}">
                <label>
                    <input type="${inputType}" name="${inputName}" value="${optionIndex}" 
                           ${isChecked ? 'checked' : ''} ${isDisabled ? 'disabled' : ''}>
                    ${option.text}
                </label>
            </div>
        `;
    });
    
    if (question.type === 'multiple' && !questionState.answered) {
        optionsHTML += `<button class="btn btn-primary confirm-btn" data-question="${question.id}" style="margin-top: 10px;">Подтвердить ответ</button>`;
    }
    
    return optionsHTML;
}

// Новая функция для генерации HTML matching вопросов
function generateMatchingHTML(question, questionState) {
    const userSelections = userAnswers[question.id] || {};
    const isDisabled = questionState.answered;
    
    // Используем сохраненный перемешанный порядок ответов
    const shuffledAnswers = questionState.shuffledAnswers || 
        [...question.pairs.map(pair => pair.answer), ...(question.extraAnswers || [])];
    
    let matchingHTML = '<div class="matching-container">';
    
    question.pairs.forEach((pair, index) => {
        const userAnswer = userSelections[index] || '';
        let selectClass = '';
        let feedback = '';
        
        if (questionState.answered) {
            if (userAnswer === pair.answer) {
                selectClass = 'matching-correct';
            } else {
                selectClass = 'matching-incorrect';
                feedback = `<span class="matching-feedback incorrect"><strong>Правильно: ${pair.answer}</strong></span>`;
            }
        }
        
        // Формируем опции для select из сохраненного перемешанного порядка
        // ВСЕ варианты всегда показываются, даже если уже выбраны
        let optionsHTML = '<option value="">-- Выберите ответ --</option>';
        
        shuffledAnswers.forEach(answer => {
            const isSelected = userAnswer === answer;
            optionsHTML += `<option value="${answer}" ${isSelected ? 'selected' : ''}>${answer}</option>`;
        });
        
        matchingHTML += `
            <div class="matching-pair">
                <div class="matching-question">${pair.question}</div>
                <select class="matching-select ${selectClass}" 
                        data-question="${question.id}" 
                        data-pair="${index}"
                        ${isDisabled ? 'disabled' : ''}>
                    ${optionsHTML}
                </select>
                ${feedback}
            </div>
        `;
    });
    
    matchingHTML += `</div>`;
    
    if (!questionState.answered) {
        matchingHTML += `
            <button class="btn btn-primary confirm-matching-btn" data-question="${question.id}" style="margin-top: 15px;">
                Проверить сопоставление
            </button>
        `;
    }
    
    return matchingHTML;
}

function addOptionListeners() {
    const options = document.querySelectorAll('.option input:not(:disabled)');
    options.forEach(option => {
        option.addEventListener('change', handleOptionChange);
    });
    
    const confirmButtons = document.querySelectorAll('.confirm-btn');
    confirmButtons.forEach(button => {
        button.addEventListener('click', handleConfirmButtonClick);
    });
    
    const inputFields = document.querySelectorAll('.answer-input:not(:disabled)');
    inputFields.forEach(input => {
        input.addEventListener('input', handleInputChange);
        input.addEventListener('keypress', handleInputKeyPress);
    });
    
    const confirmInputButtons = document.querySelectorAll('.confirm-input-btn');
    confirmInputButtons.forEach(button => {
        button.addEventListener('click', handleConfirmInputClick);
    });
    // Обработчики для matching select
    const matchingSelects = document.querySelectorAll('.matching-select:not(:disabled)');
    matchingSelects.forEach(select => {
        select.addEventListener('change', handleMatchingChange);
    });
    
    // Обработчики для кнопок подтверждения matching
    const confirmMatchingButtons = document.querySelectorAll('.confirm-matching-btn');
    confirmMatchingButtons.forEach(button => {
        button.addEventListener('click', handleConfirmMatchingClick);
    });
}

// Обработчик изменения выбора в matching
function handleMatchingChange(event) {
    const select = event.target;
    const questionId = parseInt(select.dataset.question);
    const pairIndex = parseInt(select.dataset.pair);
    const selectedValue = select.value;
    
    if (!userAnswers[questionId]) {
        userAnswers[questionId] = {};
    }
    
    // Сохраняем выбранное значение
    userAnswers[questionId][pairIndex] = selectedValue;
    
    // Немедленно перерисовываем вопрос, чтобы обновить доступные опции
    displayQuestions();
    
    updateProgressBar();
    updateStats();
}

// Обработчик подтверждения matching
function handleConfirmMatchingClick(event) {
    const questionId = parseInt(event.target.dataset.question);
    checkMatchingAnswer(questionId);
}

// Функция проверки matching ответов
function checkMatchingAnswer(questionId) {
    const question = questions.find(q => q.id === questionId);
    const userSelections = userAnswers[questionId] || {};
    const questionState = questionStates[questionId];
    
    if (questionState.answered) return;
    
    // Проверяем, все ли пары заполнены
    const allFilled = question.pairs.every((_, index) => userSelections[index]);
    if (!allFilled) {
        alert('Пожалуйста, сопоставьте все элементы перед проверкой.');
        return;
    }
    
    // Проверяем правильность ответов
    let allCorrect = true;
    question.pairs.forEach((pair, index) => {
        if (userSelections[index] !== pair.answer) {
            allCorrect = false;
        }
    });
    
    questionState.answered = true;
    questionState.correct = allCorrect;
    questionState.firstTry = allCorrect;
    
    displayQuestions();
    updateStats();
}

function handleInputChange(event) {
    const questionId = parseInt(event.target.dataset.question);
    const value = event.target.value.trim();
    
    if (!userAnswers[questionId]) {
        userAnswers[questionId] = [];
    }
    
    userAnswers[questionId] = [value];
}

function handleInputKeyPress(event) {
    if (event.key === 'Enter') {
        const questionId = parseInt(event.target.dataset.question);
        checkInputAnswer(questionId);
    }
}

function handleConfirmInputClick(event) {
    const questionId = parseInt(event.target.dataset.question);
    checkInputAnswer(questionId);
}

function checkInputAnswer(questionId) {
    const question = questions.find(q => q.id === questionId);
    const userAnswer = userAnswers[questionId] ? userAnswers[questionId][0] : '';
    const questionState = questionStates[questionId];
    
    if (questionState.answered || !userAnswer.trim()) return;
    
    let isCorrect;
    if (question.caseSensitive) {
        isCorrect = userAnswer.trim() === question.correctAnswer;
    } else {
        isCorrect = userAnswer.trim().toLowerCase() === question.correctAnswer.toLowerCase();
    }
    
    questionState.answered = true;
    questionState.correct = isCorrect;
    questionState.firstTry = isCorrect;
    
    displayQuestions();
    updateStats();
}

function handleOptionChange() {
    const questionId = parseInt(this.name.split('-')[1]);
    const optionIndex = parseInt(this.value);
    const question = questions.find(q => q.id === questionId);
    const questionState = questionStates[questionId];
    
    if (questionState.answered) return;
    
    if (!userAnswers[questionId]) {
        userAnswers[questionId] = [];
    }
    
    if (question.type === 'multiple') {
        if (this.checked) {
            userAnswers[questionId].push(optionIndex);
        } else {
            userAnswers[questionId] = userAnswers[questionId].filter(i => i !== optionIndex);
        }
    } else {
        userAnswers[questionId] = [optionIndex];
        checkAnswer(questionId);
    }
    
    questionState.userSelections = [...userAnswers[questionId]];
    
    updateProgressBar();
    updateStats();
}

function handleConfirmButtonClick() {
    const questionId = parseInt(this.dataset.question);
    checkAnswer(questionId);
}

function checkAnswer(questionId) {
    const question = questions.find(q => q.id === questionId);
    const userAnswer = userAnswers[questionId] || [];
    const questionState = questionStates[questionId];
    
    if (questionState.answered) return;
    
    const correctOptions = question.options
        .map((option, index) => option.correct ? index : -1)
        .filter(index => index !== -1);
    
    const isCorrect = 
        userAnswer.length === correctOptions.length &&
        userAnswer.every(option => correctOptions.includes(option));
    
    questionState.answered = true;
    questionState.correct = isCorrect;
    questionState.firstTry = isCorrect;
    questionState.userSelections = [...userAnswer];
    
    displayQuestions();
    updateStats();
}

function highlightInputFields() {
    const inputFields = document.querySelectorAll('.answer-input');
    inputFields.forEach(input => {
        const questionId = parseInt(input.dataset.question);
        const questionState = questionStates[questionId];
        const question = questions.find(q => q.id === questionId);
        
        if (questionState.answered && question.type === 'input') {
            if (questionState.correct) {
                input.classList.add('correct');
                input.classList.remove('incorrect');
            } else {
                input.classList.add('incorrect');
                input.classList.remove('correct');
            }
        }
    });
}

function updateStats() {
    const totalQuestions = questions.length;
    const answeredQuestions = Object.values(questionStates).filter(state => state.answered).length;
    const correctQuestions = Object.values(questionStates).filter(state => state.correct && state.firstTry).length;
    const progressPercentage = Math.round((answeredQuestions / totalQuestions) * 100);
    const accuracyPercentage = answeredQuestions > 0 ? Math.round((correctQuestions / answeredQuestions) * 100) : 0;
    
    correctCountEl.textContent = correctQuestions;
    totalCountEl.textContent = totalQuestions;
    progressPercentEl.textContent = `${progressPercentage}%`;
    accuracyPercentEl.textContent = `${accuracyPercentage}%`;
    
    correctCountBottomEl.textContent = correctQuestions;
    totalCountBottomEl.textContent = totalQuestions;
    progressPercentBottomEl.textContent = `${progressPercentage}%`;
    accuracyPercentBottomEl.textContent = `${accuracyPercentage}%`;
}

const progressBarTop = document.getElementById('progress-top');
const progressBarBottom = document.getElementById('progress-bottom');

// Обновляем функцию updateProgressBar
function updateProgressBar() {
    const answeredCount = Object.values(questionStates).filter(state => state.answered).length;
    const progressPercentage = (answeredCount / questions.length) * 100;
    
    // Обновляем оба прогресс-бара
    progressBarTop.style.width = `${progressPercentage}%`;
    progressBarBottom.style.width = `${progressPercentage}%`;
}

function shuffleQuestions() {
    const currentStates = {...questionStates};
    const currentAnswers = {...userAnswers};
    
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    
    displayQuestions();
    updateStats();
}

function resetAnswers() {
    userAnswers = {};
    initializeQuestionStates();
    displayQuestions();
    updateStats();
}

function checkModeOnLoad() {
    // Загружаем сохраненный режим
    const savedMode = loadModeFromStorage();
    
    // Показываем блок с вопросами
    const testSection = document.getElementById('test-section');
    if (testSection) {
        testSection.classList.remove('hidden');
    }
    
    // Восстанавливаем режим, если он был сохранен
    if (savedMode) {
        try {
            switch(savedMode) {
                case 'final-test':
                    // Если был итоговый тест, генерируем его заново
                    generateFinalTest();
                    break;
                case 'exam-test':
                    // Если был экзамен, проверяем доступность файла
                    if (typeof examQuestionsData !== 'undefined' && examQuestionsData.length > 0) {
                        startExamTest();
                    } else {
                        console.warn('Файл с вопросами прошлых лет не загружен, переключаемся в режим тренировки');
                        updateUIForTraining();
                    }
                    break;
                case 'training':
                    // Уже в режиме тренировки по умолчанию
                    updateUIForTraining();
                    break;
            }
        } catch (error) {
            console.error('Ошибка при восстановлении режима:', error);
            updateUIForTraining();
        }
    } else {
        // Если нет сохраненного режима, показываем тренировку
        updateUIForTraining();
    }
}