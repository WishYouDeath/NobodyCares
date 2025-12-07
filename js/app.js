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

document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeQuestionStates();
    displayQuestions();
    updateStats();
});

function initializeEventListeners() {
    shuffleBtn.addEventListener('click', shuffleQuestions);
    shuffleBottomBtn.addEventListener('click', shuffleQuestions);
    resetBtn.addEventListener('click', resetAnswers);
    resetBottomBtn.addEventListener('click', resetAnswers);
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

function displayQuestions() {
    questionsContainer.innerHTML = '';
    
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
    
    questionElement.dataset.id = question.id;
    questionElement.innerHTML = generateQuestionHTML(question, questionState, index);
    
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