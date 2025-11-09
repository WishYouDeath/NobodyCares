const sampleQuestions = [
    {
        id: 1,
        type: 'single',
        text: 'Каково определение двухуровневого дизайна коммутируемой сети?',
        options: [
            { text: 'Уровни доступа, распределения и ядра объединены в один уровень с отдельным основным уровнем', correct: false },
            { text: 'Уровни доступа и распределения объединены в один уровень, а базовый уровень выделен в отдельный уровень', correct: false },
            { text: 'Уровни доступа и ядра свернуты в один уровень, а уровень распределения выделен в отдельный уровень', correct: false },
            { text: 'Уровни распределения и ядра свернуты в один уровень, а уровень доступа выделен в отдельный уровень', correct: true }
        ]
    },
    {
        id: 2,
        type: 'single',
        text: 'Что характерно для внутриполосного (in-band) управления устройствами?',
        options: [
            { text: 'Используется для мониторинга и внесения изменений в конфигурацию сетевого устройства через сетевое соединение', correct: true },
            { text: 'Использует прямое подключение к консоли или порту AUX', correct: false },
            { text: 'Используется клиент эмуляции терминала', correct: false },
            { text: 'Используется для первоначальной настройки или когда сетевое соединение недоступно', correct: false }
        ]
    },
    {
        id: 3,
        type: 'single',
        text: 'Коммутатор участвует в домене VTP и настроен как сервер VTP. Коммутатор должен распространять сеть VLAN 10 (используемую администраторами) по всему домену VTP, но не имеет напрямую подключенных мостов, использующих эту конкретную сеть VLAN. Какая конфигурация удовлетворит этому требованию?',
        options: [
            { text: 'vlan 10<br>name ADM<br>exit', correct: true },
            { text: 'VTP mode server<br>vtp password administration', correct: false },
            { text: 'interface fa0/24<br>switchport mode access<br>switchport access vlan 10', correct: false },
            { text: 'Interface g0/1<br>switchport mode trunk<br>switchport trunk native vlan 10', correct: false }
        ]
    },
    {
        id: 4,
        type: 'single',
        text: 'Какова характеристика маршрутизируемого порта коммутатора уровня 3?',
        options: [
            { text: 'Не добавляется в VLAN', correct: true },
            { text: 'Обычно используется в качестве канала WAN', correct: false },
            { text: 'Невозможно назначить IP-адрес', correct: false },
            { text: 'Поддерживает транки', correct: false }
        ]
    },
    {
        id: 5,
        type: 'single',
        text: 'Какой тип VLAN изначально является VLAN управления?',
        options: [
            { text: 'VLAN по умолчанию', correct: true },
            { text: 'VLAN управления', correct: false },
            { text: 'Native VLAN', correct: false },
            { text: 'VLAN данных', correct: false }
        ]
    },
    {
        id: 6,
        type: 'single',
        text: 'Какова функция ASIC в многоуровневом коммутаторе?',
        options: [
            { text: 'Предотвращает образование петель уровня 2, отключая избыточные каналы связи между коммутаторами', correct: false },
            { text: 'Упрощает пересылку IP-пакетов в многоуровневом коммутаторе, минуя центральный процессор', correct: true },
            { text: 'Обеспечивают питание таких устройств, как IP-телефоны и точки беспроводного доступа, через порты Ethernet', correct: false },
            { text: 'Объединяет несколько физических портов коммутатора в один логический порт', correct: false }
        ]
    },
    {
        id: 7,
        type: 'single',
        text: 'Какой компонент коммутатора сокращает время обработки пакетов в коммутаторе?',
        options: [
            { text: 'ASIC', correct: true },
            { text: 'Пересылка данных через RAM', correct: false },
            { text: 'Два процессора', correct: false },
            { text: 'Большой размер буфера', correct: false }
        ]
    },
    {
        id: 8,
        type: 'single',
        text: 'Компьютер может получить доступ к устройствам в той же сети, но не может получить доступ к устройствам в других сетях. Какова вероятная причина этой проблемы?',
        options: [
            { text: 'К сетевой карте неправильно подключен кабель', correct: false },
            { text: 'У компьютера установлена неправильная маска подсети', correct: false },
            { text: 'Компьютер имеет неверный IP-адрес', correct: false },
            { text: 'Компьютер имеет недопустимый адрес шлюза по умолчанию', correct: true }
        ]
    },
    {
        id: 9,
        type: 'single',
        text: 'Посмотрите на рисунок. Сетевой администратор просматривает назначение портов и VLAN на коммутаторе S2 и замечает, что интерфейсы Gi0/1 и Gi0/2 не включены в выходные данные. Почему в выводе отсутствуют указанные интерфейсы?',
        image: 'images/questions/1-9.jpg',
        options: [
            { text: 'Это маршрутизируемые интерфейсы', correct: false },
            { text: 'Они настроены как транковые интерфейсы', correct: true },
            { text: 'Эти интерфейсы выключены административно', correct: false },
            { text: 'К этим интерфейсам не подключены устройства', correct: false }
        ]
    },
    {
        id: 10,
        type: 'multiple',
        text: 'Какие три функции коммутатора уровня доступа учитываются при проектировании сети? (Выберите три варианта)',
        options: [
            { text: 'Скорость пересылки', correct: false },
            { text: 'Плотность портов', correct: true },
            { text: 'Сокращение широковещательного трафика', correct: false },
            { text: 'Возможность аварийного переключения', correct: true },
            { text: 'Питание через Ethernet (PoE)', correct: true },
            { text: 'Скорость сходимости', correct: false }
        ]
    },
    {
        id: 11,
        type: 'multiple',
        text: 'Каковы два способа доступа к коммутатору Cisco для внеполосного (out-of-band) управления? (Выберите два варианта)',
        options: [
            { text: 'Соединение через HTTP', correct: false },
            { text: 'Соединение через консольный порт', correct: true },
            { text: 'Соединение через порт AUX', correct: true },
            { text: 'Соединение через SSH', correct: false },
            { text: 'Соединение через Telnet', correct: false }
        ]
    },
    {
        id: 12,
        type: 'multiple',
        text: 'Учитывая следующую конфигурацию, какие два утверждения верны? (Выберите два варианта)<br><br>switch(config)# vtp version 2<br>switch(config)# vtp mode server<br>switch(config)# vtp domain Cisco<br>switch(config)# vtp password mypassword',
        options: [
            { text: 'Этот коммутатор может создавать, изменять и удалять все VLAN в пределах VTP-домена Cisco', correct: true },
            { text: 'Этот коммутатор поддерживает полный список всех VLAN и может создавать VLAN, но не может удалять или изменять существующие VLAN', correct: false },
            { text: 'Этот коммутатор может отправлять и получать VTP-сообщения только из домена Cisco', correct: true },
            { text: 'Пароль предотвратит участие неавторизованных маршрутизаторов в домене Cisco', correct: false },
            { text: 'Этот коммутатор может сообщать о своей конфигурации VLAN другим коммутаторам только в домене Cisco, но может получать объявления из других доменов', correct: false }
        ]
    },
    {
        id: 13,
        type: 'single',
        text: 'Пользователь настроил сетевую карту на ПК, как показано на рисунке, но обнаружил, что компьютер не может получить доступ к Интернету. В чем проблема?',
        image: 'images/questions/1-13.jpg',
        options: [
            { text: 'Альтернативного DNS-сервера быть не должно', correct: false },
            { text: 'Конфигурация не была применена', correct: false },
            { text: 'Неверный адрес шлюза по умолчанию', correct: true },
            { text: 'Предпочтительный DNS-адрес неверен', correct: false }
        ]
    },
    {
        id: 14,
        type: 'single',
        text: 'Что является характеристикой VTP?',
        options: [
            { text: 'Коммутаторы в режиме VTP-клиента могут увеличить номер версии конфигурации VTP', correct: false },
            { text: 'Коммутаторы в режиме клиента VTP хранят информацию о VLAN в NVRAM', correct: false },
            { text: 'Коммутаторы в прозрачном режиме VTP пересылают объявления VTP', correct: true },
            { text: 'Коммутаторы в прозрачном режиме VTP возвращаются обратно в режим сервера VTP после перезагрузки', correct: false }
        ]
    },
    {
        id: 15,
        type: 'multiple',
        text: 'Какие два параметра VTP должны быть одинаковыми на всех коммутаторах в сети, чтобы они могли участвовать в одном и том же домене VTP? (Выберите два варианта)',
        options: [
            { text: 'Режим сервера VTP', correct: false },
            { text: 'Режим клиента VTP', correct: false },
            { text: 'Прозрачный режим VTP', correct: false },
            { text: 'Номер версии конфигурации VTP', correct: false },
            { text: 'Пароль домена VTP', correct: true },
            { text: 'Доменное имя VTP', correct: true }
        ]
    },
    {
        id: 16,
        type: 'single',
        text: 'Какие действия необходимо предпринять при планировании избыточности в иерархической структуре сети?',
        options: [
            { text: 'Постоянно покупайте резервное оборудование для сети', correct: false },
            { text: 'Добавить альтернативные физические пути для передачи данных по сети', correct: true },
            { text: 'Немедленно заменять модуль, службу или устройство, которые не работают в сети', correct: false },
            { text: 'Отключить STP между коммутаторами для добавления резервных каналов связи', correct: false }
        ]
    },
    {
        id: 17,
        type: 'multiple',
        text: 'Каковы три уровня иерархической модели проектирования сети? (Выберите три варианта)',
        options: [
            { text: 'Уровень канала передачи данных', correct: false },
            { text: 'Уровень ядра', correct: true },
            { text: 'Уровень распределения', correct: true },
            { text: 'Уровень доступа', correct: true },
            { text: 'Уровень Интернета', correct: false }
        ]
    },
    {
        id: 18,
        type: 'single',
        text: 'Что происходит с портами коммутатора после удаления VLAN, которой они назначены?',
        options: [
            { text: 'Порты отключаются', correct: true },
            { text: 'Порты переносятся в VLAN 1, VLAN по умолчанию', correct: false },
            { text: 'Порты перестают обмениваться данными с подключенными устройствами', correct: false },
            { text: 'Порты переводятся в транковый режим', correct: false }
        ]
    },
    {
        id: 19,
        type: 'input',
        text: 'В коммутаторе Cisco информация о VLAN расширенного диапазона хранится в файле ______',
        correctAnswer: 'running-config',
        caseSensitive: false,
    },
    {
        id: 20,
        type: 'multiple',
        text: 'Какие два действия приведут к изменению номера версии конфигурации VTP на сервере VTP? (Выберите два варианта)',
        options: [
            { text: 'Изменение имени домена VTP', correct: true },
            { text: 'Добавление VLAN', correct: true },
            { text: 'Изменение режима коммутатора на клиент VTP', correct: false },
            { text: 'Перезагрузка коммутатора', correct: false },
            { text: 'Изменение настройки интерфейса VLAN', correct: false }
        ]
    },
    {
        id: 21,
        type: 'multiple',
        text: 'Каковы два преимущества расширения подключения пользователей на уровне доступа через беспроводную среду? (Выберите два варианта)',
        options: [
            { text: 'Большая доступность полосы пропускания', correct: false },
            { text: 'Снижение затрат', correct: true },
            { text: 'Расширенные возможности управления сетью', correct: false },
            { text: 'Снижение количества критических точек отказа', correct: false },
            { text: 'Большая гибкость', correct: true }
        ]
    },
    {
        id: 22,
        type: 'single',
        text: 'Какова основная функция уровня доступа многоуровневой архитектуры коммутируемой сети?',
        options: [
            { text: 'Предоставить доступ пользователю в сети', correct: true },
            { text: 'Обеспечить изоляцию неисправностей', correct: false },
            { text: 'Добавить границы маршрутизации', correct: false },
            { text: 'Ограничить широковещательные домены', correct: false }
        ]
    },
    {
        id: 23,
        type: 'single',
        text: 'При настройке маршрутизации между VLAN на многоуровневом коммутаторе сетевой администратор вводит команду <strong>no switchport</strong> на интерфейсе, подключенном к другому коммутатору. Какова цель этой команды?',
        options: [
            { text: 'Создать статический транковый канал', correct: false },
            { text: 'Тегировать трафик из VLAN', correct: false },
            { text: 'Создать коммутируемый виртуальный интерфейс', correct: false },
            { text: 'Создать маршрутизируемый порт для одной сети', correct: true }
        ]
    },
    {
        id: 24,
        type: 'single',
        text: 'В чем может быть недостаток использования многоуровневых коммутаторов для маршрутизации между VLAN?',
        options: [
            { text: 'STP должен быть отключен для реализации маршрутизации на многоуровневом коммутаторе', correct: false },
            { text: 'Многоуровневые коммутаторы имеют большую задержку маршрутизации', correct: false },
            { text: 'Использование многоуровневого коммутатора дороже, чем реализация RoS (router-on-a-stick)', correct: true },
            { text: 'Многоуровневые коммутаторы ограничены использованием магистральных каналов для маршрутизации', correct: false }
        ]
    },
    {
        id: 25,
        type: 'single',
        text: 'Как маршрутизируется трафик между несколькими VLAN на многоуровневом коммутаторе?',
        options: [
            { text: 'Трафик пересылается на все физические интерфейсы', correct: false },
            { text: 'Трафик маршрутизируется через подынтерфейсы', correct: false },
            { text: 'Трафик маршрутизируется через внутренние VLAN-интерфейсы', correct: true },
            { text: 'Трафик маршрутизируется через физические интерфейсы', correct: false }
        ]
    },
    {
        id: 26,
        type: 'multiple',
        text: 'Какие три действия могут вызвать проблемы с реализацией VTP? (Выберите три варианта)',
        options: [
            { text: 'Не использовать пароли VTP', correct: false },
            { text: 'Использование коммутаторов сторонних производителей', correct: true },
            { text: 'Наличие коммутатора в прозрачном режиме VTP между коммутатором сервера VTP и коммутатором клиента VTP', correct: false },
            { text: 'Использование в имени домена VTP нижнего регистра на одном коммутаторе и верхнего регистра на другом коммутаторе', correct: true },
            { text: 'Использование немагистрального канала для соединения коммутаторов', correct: true },
            { text: 'Настройка всех коммутаторов в режиме сервера VTP', correct: false }
        ]
    },
    {
        id: 27,
        type: 'single',
        text: 'Какой тип VLAN специально настраивается для сетевого трафика, такого как SSH, Telnet, HTTPS, HTTP и SNMP?',
        options: [
            { text: 'Голосовые VLAN', correct: false },
            { text: 'Магистральные VLAN', correct: false },
            { text: 'VLAN управления', correct: true },
            { text: 'VLAN безопасности', correct: false }
        ]
    },
    {
        id: 28,
        type: 'single',
        text: 'Посмотрите на рисунок. Какие устройства находятся в домене сбоя, если коммутатор S3 потеряет питание?',
        image: 'images/questions/1-28.jpg',
        options: [
            { text: 'AP_2 и AP_1', correct: false },
            { text: 'S1 и S4', correct: false },
            { text: 'S4 и PC_2', correct: false },
            { text: 'PC_3 и PC_2', correct: false },
            { text: 'PC_3 и AP_2', correct: true }
        ]
    },
    {
        id: 29,
        type: 'single',
        text: 'Какова цель протокола связующего дерева (STP)?',
        options: [
            { text: 'Позволяет устройствам Cisco обмениваться обновлениями таблиц маршрутизации', correct: false },
            { text: 'Создает домены коллизий меньшего размера', correct: false },
            { text: 'Предотвращает возникновение петель маршрутизации', correct: false },
            { text: 'Предотвращает образование колец на уровне 2', correct: true },
            { text: 'Создает широковещательные домены меньшего размера', correct: false }
        ]
    },
    {
        id: 30,
        type: 'matching',
        text: 'Сопоставьте свойство связующего дерева с типом протокола. (Не все варианты используются)',
        pairs: [
            { question: 'Собственная реализация IEEE 802.1w для каждой VLAN', answer: 'Rapid PVST+' },
            { question: 'Быстрое конвергентное усовершенствование IEEE 802.1D', answer: 'RSTP' },
            { question: 'Cisco реализация стандарта IEEE 802.1D', answer: 'PVST+' },
            { question: 'Стандарт IEEE, сокращающий количество экземпляров STP', answer: 'MSTP' }
        ],
        extraAnswers: ['STP', 'PVST', 'Rapid STP']
    },
    {
        id: 31,
        type: 'input',
        text: 'Заполните пробел. Для включения быстрого STP используется команда spanning-tree __ режима глобальной конфигурации.',
        correctAnswer: 'mode rapid-pvst',
        caseSensitive: false
    },
    {
        id: 32,
        type: 'single',
        text: 'Сетевой администратор готовит внедрение Rapid PVST+ в рабочей сети. Каким образом на интерфейсах коммутатора определяются типы каналов Rapid PVST+?',
        options: [
            { text: 'Типы каналов должны быть настроены с помощью определенных команд настройки порта', correct: false },
            { text: 'Типы каналов можно определить, только если настроен Portfast', correct: false },
            { text: 'Типы каналов определяются автоматически', correct: true },
            { text: 'Типы каналов можно настроить только для портов доступа, сконфигурированных в одной VLAN', correct: false }
        ]
    },
    {
        id: 33,
        type: 'single',
        text: 'Какова характеристика кольца на 2 уровне?',
        options: [
            { text: 'Атрибут Time-to-Live кадра устанавливается равным бесконечности', correct: false },
            { text: 'Кадры широковещательной рассылки пересылаются обратно на передающий коммутатор', correct: true },
            { text: 'Коммутатор постоянно пересылает один и тот же кадр индивидуальной рассылки', correct: false },
            { text: 'Маршрутизаторы непрерывно пересылают пакеты другим маршрутизаторам', correct: false }
        ]
    },
    {
        id: 34,
        type: 'single',
        text: 'Если в PVST не настроен приоритет моста, какие критерии учитываются при выборе корневого коммутатора?',
        options: [
            { text: 'Самый высокий IP-адрес', correct: false },
            { text: 'Самый низкий IP-адрес', correct: false },
            { text: 'Самый низкий MAC-адрес', correct: true },
            { text: 'Самый высокий MAC-адрес', correct: false }
        ]
    },
    {
        id: 35,
        type: 'single',
        text: 'Каковы преимущества PVST+?',
        options: [
            { text: 'PVST+ требует меньшего количества циклов процессора для всех коммутаторов в сети', correct: false },
            { text: 'PVST+ оптимизирует производительность сети за счет распределения нагрузки', correct: true },
            { text: 'PVST+ оптимизирует производительность сети за счет автоматического выбора корневого моста', correct: false },
            { text: 'PVST+ снижает потребление полосы пропускания по сравнению с традиционными реализациями STP, использующими CST', correct: false }
        ]
    },
    {
        id: 36,
        type: 'single',
        text: 'В какое состояние сразу же переключаются порты при настройке в PortFast?',
        options: [
            { text: 'learning', correct: false },
            { text: 'forwarding', correct: true },
            { text: 'listening', correct: false },
            { text: 'blocking', correct: false }
        ]
    },
    {
        id: 37,
        type: 'multiple',
        text: 'Какие две функции проектирования сети требуют протокола связующего дерева (STP) для обеспечения правильной работы сети? (Выберите два варианта)',
        options: [
            { text: 'Внедрение VLAN для сокращения широковещательной рассылки', correct: false },
            { text: 'Динамическая маршрутизация на основе состояния канала, обеспечивающая резервные маршруты', correct: false },
            { text: 'Резервные каналы между коммутаторами уровня 2', correct: true },
            { text: 'Статические маршруты по умолчанию', correct: false },
            { text: 'Устранение единых точек отказа с помощью нескольких коммутаторов уровня 2', correct: true }
        ]
    },
    {
        id: 38,
        type: 'single',
        text: 'Какие порты RSTP подключены к конечным устройствам?',
        options: [
            { text: 'Корневые порты', correct: false },
            { text: 'Граничные порты', correct: true },
            { text: 'Назначенные порты', correct: false },
            { text: 'Тип/к порты', correct: false }
        ]
    },
    {
        id: 39,
        type: 'single',
        text: 'Каковы последствия широковещательного шторма уровня 2?',
        options: [
            { text: 'CSMA/CD приведет к тому, что каждый хост продолжит передачу кадров', correct: false },
            { text: 'Маршрутизаторы берут на себя пересылку кадров по мере перегрузки коммутаторов', correct: false },
            { text: 'Широковещательные запросы ARP возвращаются на отправителя', correct: false },
            { text: 'Новый трафик отбрасывается коммутатором, поскольку он не может быть обработан', correct: true }
        ]
    },
    {
        id: 40,
        type: 'single',
        text: 'Какая функция коммутатора Cisco гарантирует, что сконфигурированные магистральные порты коммутатора не будут создавать кольцо второго уровня, если порт ошибочно подключен к другому коммутатору?',
        options: [
            { text: 'PVST+', correct: false },
            { text: 'BPDU guard', correct: true },
            { text: 'PortFast', correct: false },
            { text: 'Extended system ID', correct: false }
        ]
    },
    {
        id: 41,
        type: 'single',
        text: 'Посмотрите на рисунок. Какой магистральный канал не будет пересылать трафик после схождения STP?',
        image: 'images/questions/2-41.jpg',
        options: [
            { text: 'Trunk 1', correct: false },
            { text: 'Trunk 2', correct: true },
            { text: 'Trunk 3', correct: false },
            { text: 'Trunk 4', correct: false }
        ]
    },
    {
        id: 42,
        type: 'single',
        text: 'Какая дополнительная информация содержится в 12-битном расширенном идентификаторе BPDU?',
        options: [
            { text: 'MAC адрес', correct: false },
            { text: 'Идентификатор VLAN', correct: true },
            { text: 'IP адрес', correct: false },
            { text: 'Идентификатор порта', correct: false }
        ]
    },
    {
        id: 43,
        type: 'multiple',
        text: 'Какие три компонента используются совместно для формирования идентификатора моста?',
        options: [
            { text: 'Идентификатор порта', correct: false },
            { text: 'Приоритет моста', correct: true },
            { text: 'Стоимость', correct: false },
            { text: 'IP-адрес', correct: false },
            { text: 'MAC-адрес', correct: true },
            { text: 'Расширенный системный идентификатор', correct: true }
        ]
    },
    {
        id: 44,
        type: 'single',
        text: 'Какой протокол обеспечивает до 16 экземпляров RSTP, объединяет множество сетей VLAN с одинаковой физической и логической топологией в общий экземпляр RSTP и поддерживает PortFast, защиту от несанкционированных BPDU и корней, фильтрацию BPDU и защиту от петель?',
        options: [
            { text: 'Rapid PVST+', correct: false },
            { text: 'STP', correct: false },
            { text: 'PVST+', correct: false },
            { text: 'MST', correct: true }
        ]
    },
    {
        id: 45,
        type: 'single',
        text: 'Посмотрите на рисунок. Какова роль коммутатора S3?',
        image: 'images/questions/2-45.jpg',
        options: [
            { text: 'Enabled bridge', correct: false },
            { text: 'Root bridge', correct: true },
            { text: 'Designated switch', correct: false },
            { text: 'Bridge', correct: false }
        ]
    },
    {
        id: 46,
        type: 'multiple',
        text: 'Чтобы получить обзор состояния связующего дерева коммутируемой сети, сетевой инженер вводит на коммутаторе команду show spanning-tree. Какие два элемента информации будут отображаться этой командой? (Выберите два варианта)',
        options: [
            { text: 'Количество широковещательных сообщений, полученных на каждом корневом порту', correct: false },
            { text: 'Роль портов во всех VLAN', correct: true },
            { text: 'IP-адрес интерфейса VLAN управления', correct: false },
            { text: 'BID корневого коммутатора', correct: true },
            { text: 'Статус портов соседних коммутаторов', correct: false }
        ]
    },
    {
        id: 47,
        type: 'multiple',
        text: 'Какие два типа протоколов связующего дерева могут создавать неоптимальные потоки трафика, поскольку они предполагают наличие только одного экземпляра связующего дерева для всей сети? (Выберите два варианта)',
        options: [
            { text: 'MSTP', correct: false },
            { text: 'RSTP', correct: true },
            { text: 'PVST+', correct: false },
            { text: 'STP', correct: true },
            { text: 'Rapid PVST+', correct: false }
        ]
    },
    {
        id: 48,
        type: 'single',
        text: 'Какой тип порта используется между коммутаторами в стекируемом коммутаторе?',
        options: [
            { text: 'edge', correct: false },
            { text: 'root', correct: false },
            { text: 'designated', correct: false },
            { text: 'StackWise', correct: true }
        ]
    },
    {
        id: 49,
        type: 'multiple',
        text: 'В каких двух состояниях портов коммутатор запоминает MAC-адреса и обрабатывает BPDU в сети PVST? (Выберите два варианта)',
        options: [
            { text: 'blocking', correct: false },
            { text: 'listening', correct: false },
            { text: 'disabled', correct: false },
            { text: 'learning', correct: true },
            { text: 'forwarding', correct: true }
        ]
    },
    {
        id: 50,
        type: 'single',
        text: 'Какой стандарт связующего дерева поддерживает только один корневой мост, чтобы трафик из всех виртуальных локальных сетей проходил по одному и тому же пути?',
        options: [
            { text: 'PVST+', correct: false },
            { text: 'MST', correct: false },
            { text: '802.1D', correct: true },
            { text: 'Rapid PVST', correct: false }
        ]
    },
    {
        id: 51,
        type: 'multiple',
        text: 'Какие два режима группы каналов переводят интерфейс в состояние согласования с помощью PAgP? (Выберите два варианта)',
        options: [
            { text: 'Passive', correct: false },
            { text: 'Auto', correct: true },
            { text: 'Active', correct: false },
            { text: 'Desirable', correct: true },
            { text: 'On', correct: false }
        ]
    },
    {
        id: 52,
        type: 'single',
        text: 'Какой непроприетарный протокол обеспечивает резервирование маршрутизатора для группы маршрутизаторов, поддерживающих локальные сети IPv4?',
        options: [
            { text: 'GLBP', correct: false },
            { text: 'VRRPv2', correct: true },
            { text: 'SLB', correct: false },
            { text: 'HSRP', correct: false }
        ]
    },
    {
        id: 53,
        type: 'single',
        text: 'Какова цель HSRP?',
        options: [
            { text: 'Он не позволяет неавторизованному коммутатору стать корнем STP', correct: false },
            { text: 'Он позволяет порту доступа немедленно перейти в состояние пересылки', correct: false },
            { text: 'Он предотвращает подключение вредоносных хостов к магистральным портам', correct: false },
            { text: 'Он обеспечивает непрерывное сетевое соединение при сбое маршрутизатора', correct: true }
        ]
    },
    {
        id: 54,
        type: 'single',
        text: 'Какое утверждение описывает реализацию EtherChannel?',
        options: [
            { text: 'PAgP нельзя использовать в сочетании с EtherChannel', correct: false },
            { text: 'EtherChannel может поддерживать максимум десять отдельных каналов', correct: false },
            { text: 'Trunk-порт может быть частью связки EtherChannel', correct: true },
            { text: 'EtherChannel работает только на уровне 2', correct: false }
        ]
    },
    {
        id: 55,
        type: 'multiple',
        text: 'Какие два протокола используются для реализации EtherChannel? (Выберите два варианта)',
        options: [
            { text: 'Link Aggregation Control Protocol', correct: true },
            { text: 'Spanning Tree Protocol', correct: false },
            { text: 'Rapid Spanning Tree Protocol', correct: false },
            { text: 'Cisco Discovery Protocol', correct: false },
            { text: 'Port Aggregation Protocol', correct: true }
        ]
    },
    {
        id: 56,
        type: 'single',
        text: 'Какую наилучшую практику следует использовать перед началом реализации EtherChannel?',
        options: [
            { text: 'Назначать используемые интерфейсы в управляющую VLAN', correct: false },
            { text: 'Назначать используемые интерфейсы неиспользуемой VLAN', correct: false },
            { text: 'Включать каждый из используемых интерфейсов', correct: false },
            { text: 'Назначать используемые интерфейсы сети в VLAN 1', correct: false },
            { text: 'Выключать каждый из используемых интерфейсов', correct: true }
        ]
    },
    {
        id: 57,
        type: 'matching',
        text: 'Сопоставьте описание с правильной командой. (Не все варианты используются)',
        pairs: [
            { question: 'Эта команда используется для проверки того, какие port-channel настроены на коммутаторе', answer: 'show etherchannel summary' },
            { question: 'Эта команда показывает информацию о состоянии порта, задействованного в Etherchannel', answer: 'show interfaces fa0/2 etherchannel' },
            { question: 'Эта команда показывает список портов, участвующих в port-channel, и время, прошедшее с момента объединения портов', answer: 'show etherchannel port-channel' },
            { question: 'Эта команда показывает информацию о надежности port-channel', answer: 'show interfaces port-channel' }
        ],
        extraAnswers: [
            'show etherchannel load-balancing',
            'show lacp neighbors',
            'show pagp neighbors',
            'show interfaces trunk',
        ]
    },
    {
        id: 58,
        type: 'single',
        text: 'Какое сочетание режимов PAgP установит EtherChannel?',
        options: [
            { text: 'Коммутатор 1 настроен в desirable, коммутатор 2 настроен в desirable', correct: true },
            { text: 'Коммутатор 1 настроен в auto, коммутатор 2 настроен в on', correct: false },
            { text: 'Коммутатор 1 настроен в auto, коммутатор 2 настроен в auto', correct: false },
            { text: 'Коммутатор 1 настроен в on, коммутатор 2 настроен в desirable', correct: false }
        ]
    },
    {
        id: 59,
        type: 'multiple',
        text: 'Какие три параметра должны совпадать, чтобы установить EtherChannel между двумя напрямую подключенными коммутаторами? (Выберите три варианта)',
        options: [
            { text: 'Скорость интерфейсов, которые используются для EtherChannel', correct: true },
            { text: 'Принадлежность к VLAN интерфейсов, которые используются для EtherChannel', correct: true },
            { text: 'Настройки безопасности портов на интерфейсах, используемых для EtherChannel', correct: false },
            { text: 'Номера портов, которые используются для EtherChannel', correct: false },
            { text: 'Доменные имена на коммутаторах', correct: false },
            { text: 'Дуплексные настройки интерфейсов, которые используются для EtherChannel', correct: true }
        ]
    },
    {
        id: 60,
        type: 'single',
        text: 'Посмотрите на рисунок. Какая технология коммутации позволила бы агрегировать каждый канал коммутатора уровня доступа для обеспечения большой пропускной способности между каждым коммутатором уровня 2 и коммутатором уровня 3?',
        image: 'images/questions/2-60.jpg',
        options: [
            { text: 'PortFast', correct: false },
            { text: 'HSRP', correct: false },
            { text: 'EtherChannel', correct: true },
            { text: 'Trunking', correct: false }
        ]
    },
    {
        id: 61,
        type: 'single',
        text: 'Что необходимо для настройки магистрального EtherChannel между двумя коммутаторами?',
        options: [
            { text: 'Участвующим интерфейсам на обоих коммутаторах должен быть назначен один и тот же номер VLAN', correct: false },
            { text: 'Участвующие интерфейсы должны находиться в одном модуле коммутатора', correct: false },
            { text: 'Участвующие интерфейсы должны быть физически смежными на коммутаторе', correct: false },
            { text: 'Разрешенный диапазон VLAN должен быть одинаковым на обоих коммутаторах', correct: true }
        ]
    },
    {
        id: 62,
        type: 'single',
        text: 'На основе вывода команды show etherchannel summary, какое утверждение верно?',
        image: 'images/questions/2-62.jpg',
        options: [
            { text: 'EtherChannel не работает, о чем свидетельствует пустое поле протокола', correct: false },
            { text: 'Канал EtherChannel используется и функционирует, на что указывают флаги SU и P в выходных данных команды', correct: true },
            { text: 'EtherChannel является динамическим и использует порты Fa0/10 и Fa0/11 в качестве пассивных портов', correct: false },
            { text: 'EtherChannel частично функционален, на что указывают флаги P для портов FastEthernet', correct: false }
        ]
    },
    {
        id: 63,
        type: 'single',
        text: 'Администратор настраивает канал EtherChannel между коммутаторами SW1 и SW2 с помощью команды SW1(config-range)# channel-group 1 mode passive. Какую команду необходимо выполнить на SW2, чтобы включить этот EtherChannel?',
        options: [
            { text: 'SW2(config-range)# channel-group 1 mode active', correct: true },
            { text: 'SW2(config-range)# channel-group 1 mode passive', correct: false },
            { text: 'SW2(config-range)# channel-group 1 mode auto', correct: false },
            { text: 'SW2(config-range)# channel-group 1 mode desirable', correct: false }
        ]
    },
    {
        id: 64,
        type: 'single',
        text: 'Посмотрите на рисунок. Сетевой администратор настроил маршрутизаторы R1 и R2 как часть группы HSRP 1. После перезагрузки маршрутизаторов пользователь на Host1 пожаловался на отсутствие подключения к интернету. Сетевой администратор выполнил команду show standby brief на обоих маршрутизаторах для проверки работы HSRP. Кроме того, администратор просмотрел таблицу ARP на Host1. Какая запись должна отображаться в таблице ARP на Host1, чтобы получить подключение к интернету?',
        image: 'images/questions/2-64.jpg',
        options: [
            { text: 'Виртуальный IP-адрес и виртуальный MAC-адрес для группы HSRP 1', correct: true },
            { text: 'Виртуальный IP-адрес группы HSRP 1 и MAC-адрес R1', correct: false },
            { text: 'IP-адрес и MAC-адрес R1', correct: false },
            { text: 'Виртуальный IP-адрес группы HSRP 1 и MAC-адрес R2', correct: false }
        ]
    },
    {
        id: 65,
        type: 'single',
        text: 'Посмотрите на рисунок. Между коммутаторами S1 и S2 настроен EtherChannel, но интерфейсы не образуют EtherChannel. В чём может быть проблема?',
        image: 'images/questions/2-65.jpg',
        options: [
            { text: 'На портах коммутатора не были настроены скорость и дуплексный режим', correct: false },
            { text: 'Номер интерфейса port-channel должен отличаться на каждом коммутаторе', correct: false },
            { text: 'EtherChannel не был настроен с одинаковым разрешенным диапазоном VLAN на каждом интерфейсе', correct: true },
            { text: 'Порты коммутатора должны быть настроены как порты доступа, при этом каждый порт должен быть помещён в VLAN', correct: false }
        ]
    },
    {
        id: 66,
        type: 'input',
        text: 'Заполните пробел. В режиме FHRP два или более маршрутизатора представляются как один ___ маршрутизатор.',
        correctAnswer: 'виртуальный',
        caseSensitive: false
    },
    {
        id: 67,
        type: 'single',
        text: 'Какое утверждение характеризует EtherChannel?',
        options: [
            { text: 'Он может объединять смешанные типы каналов 100 Мбит/с и 1 Гбит/с Ethernet', correct: false },
            { text: 'Он состоит из нескольких параллельных каналов между коммутатором и маршрутизатором', correct: false },
            { text: 'Он создается путем объединения нескольких физических каналов, которые рассматриваются как один канал между двумя коммутаторами', correct: true },
            { text: 'Он может объединять максимум 4 физических соединения', correct: false }
        ]
    },
    {
        id: 68,
        type: 'single',
        text: 'На основе вывода команды show etherchannel summary, какое утверждение верно?',
        image: 'images/questions/2-68.jpg',
        options: [
            { text: 'Два порта Gigabit Ethernet используются для формирования EtherChannel', correct: false },
            { text: 'Для согласования канала EtherChannel использовался собственный протокол Cisco', correct: true },
            { text: 'EtherChannel работает как на уровне 2, так и на уровне 3', correct: false },
            { text: 'EtherChannel не работает', correct: false }
        ]
    },
    {
        id: 69,
        type: 'multiple',
        text: 'Посмотрите на рисунок. Сетевой администратор не замечает прироста производительности после настройки EtherChannel. Основываясь на показанном выводе, какие два возможных предположения может сделать сетевой администратор? (Выберите два варианта)',
        image: 'images/questions/2-69.jpg',
        options: [
            { text: 'Связка EtherChannel не работает', correct: true },
            { text: 'Связка EtherChannel работает', correct: false },
            { text: 'Были использованы LACP и PAgP для формирования EtherChannel', correct: false },
            { text: 'Один из портов на S2 был неправильно настроен', correct: true },
            { text: 'Коммутатор S2 использовал несовместимый режим EtherChannel', correct: false },
            { text: 'Коммутатор S2 необходимо настроить так, чтобы максимальное количество портов было увеличено', correct: false }
        ]
    },
    {
        id: 70,
        type: 'single',
        text: 'Сетевой администратор хотел бы, чтобы маршрутизатор R1 всегда выбирался активным маршрутизатором для группы HSRP. Какой набор команд обеспечит требуемые результаты?',
        options: [
            { text: 'R1(config-if)# ip address 192.168.1.100 255.255.255.0<br>R1(config-if)# standby 1 ip 192.168.1.1<br>R1(config-if)# standby 1 priority 150<br>R1(config-if)# no shutdown', correct: false },
            { text: 'R1(config-if)# ip address 192.168.1.100 255.255.255.0<br>R1(config-if)# standby 1 ip 192.168.1.1<br>R1(config-if)# standby 1 priority 1<br>R1(config-if)# no shutdown', correct: false },
            { text: 'R1(config-if)# ip address 192.168.1.100 255.255.255.0<br>R1(config-if)# standby 1 ip 192.168.1.1<br>R1(config-if)# standby 1 priority 255<br>R1(config-if)# standby 1 preempt<br>R1(config-if)# no shutdown', correct: true },
            { text: 'R1(config-if)# ip address 192.168.1.100 255.255.255.0<br>R1(config-if)# standby 1 ip 192.168.1.1<br>R1(config-if)# no shutdown', correct: false }
        ]
    },
    {
        id: 71,
        type: 'single',
        text: 'Между двумя коммутаторами S1 и S2 был сформирован канал EtherChannel с использованием LACP. При проверки конфигурации, какую комбинацию режимов можно обнаружить?',
        options: [
            { text: 'S1-on и S2-active', correct: false },
            { text: 'S1-on и S2-passive', correct: false },
            { text: 'S1-passive и S2-active', correct: true },
            { text: 'S1-passive и S2-passive', correct: false }
        ]
    },
    {
        id: 72,
        type: 'single',
        text: 'Посмотрите на рисунок. Какое утверждение о выводе команды show standby верно?',
        image: 'images/questions/2-72.jpg',
        options: [
            { text: 'В настоящее время маршрутизатор пересылает пакеты', correct: true },
            { text: 'Этот маршрутизатор находится в отключенном состоянии HSRP, так как его отслеживаемые интерфейсы не работают', correct: false },
            { text: 'Текущий приоритет этого маршрутизатора равен 120', correct: false },
            { text: 'Этот маршрутизатор отслеживает два правильно работающих интерфейса', correct: false }
        ]
    },
    {
        id: 73,
        type: 'single',
        text: 'Посмотрите на рисунок. Сетевой администратор ввел команду show etherchannel summary на коммутаторе S1. Какой вывод можно сделать?',
        image: 'images/questions/2-73.jpg',
        options: [
            { text: 'EtherChannel не работает', correct: true },
            { text: 'Протокол агрегации портов PAgP настроен неправильно', correct: false },
            { text: 'Порты FastEthernet Fa0/1, Fa0/2 и Fa0/3 не используются в канале EtherChannel', correct: false },
            { text: 'EtherChannel заблокирован', correct: false }
        ]
    },
    {
        id: 74,
        type: 'single',
        text: 'Какое утверждение является верным относительно создания каналов EtherChannel с помощью PAgP?',
        options: [
            { text: 'Увеличивается количество портов, участвующих в связующем дереве', correct: false },
            { text: 'Для агрегации необходимо использовать четное количество портов (2, 4, 6 и т. д.)', correct: false },
            { text: 'Требуется полнодуплексный режим на портах', correct: false },
            { text: 'Для PAgP требуется больше физических каналов, чем для LACP', correct: false },
            { text: 'Это собственный протокол Cisco', correct: true }
        ]
    },
    {
    id: 75,
    type: 'single',
    text: 'Посмотрите на рисунок. Сетевой инженер устраняет неполадку подключения хоста в локальной сети, использующей FHRP. Какой адрес шлюза IPv4 должен быть настроен на хосте?',
    image: 'images/questions/2-75.jpg',
    options: [
        { text: '192.168.2.2', correct: false },
        { text: '192.168.2.0', correct: false },
        { text: '192.168.2.1', correct: false },
        { text: '192.168.2.100', correct: true }
    ]
},
    {
        id: 76,
        type: 'single',
        text: 'В чем преимущество использования LACP?',
        options: [
            { text: 'Обеспечивает смоделированную среду для тестирования агрегации каналов', correct: false },
            { text: 'Уменьшает вероятность образования петли связующего дерева', correct: false },
            { text: 'Позволяет автоматически формировать каналы EtherChannel', correct: true },
            { text: 'Повышает избыточность устройств уровня 3', correct: false },
            { text: 'Уменьшает количество настроек, необходимых на коммутаторе для EtherChannel', correct: false }
        ]
    },
    {
    id: 77,
    type: 'single',
    text: 'Когда маршрутизатор с поддержкой EIGRP использует пароль для приема маршрутов от других маршрутизаторов с поддержкой EIGRP, какой механизм используется?',
    options: [
        { text: 'Алгоритм диффузного обновления', correct: false },
        { text: 'EIGRP-аутентификация', correct: true },
        { text: 'Частичные обновления', correct: false },
        { text: 'Ограниченные обновления', correct: false },
        { text: 'Надежный транспортный протокол', correct: false }
    ]
},
{
    id: 78,
    type: 'multiple',
    text: 'Какие два протокола маршрутизации классифицируются как протоколы маршрутизации на основе вектора расстояния? (Выберите два варианта)',
    options: [
        { text: 'BGP', correct: false },
        { text: 'IS-IS', correct: false },
        { text: 'RIP', correct: true },
        { text: 'EIGRP', correct: true },
        { text: 'OSPF', correct: false }
    ]
},
{
    id: 79,
    type: 'multiple',
    text: 'Какие 2 фактора использует маршрутизатор EIGRP, чтобы определить, соответствует ли маршрут к удаленной сети выполнимому условию и, следовательно, свободен ли он от петель? (Выберите два варианта)',
    options: [
        { text: 'Маршрут-преемник на соседнем маршрутизаторе', correct: false },
        { text: 'Допустимое расстояние на локальном маршрутизаторе', correct: true },
        { text: 'Возможный маршрут-преемник на удаленном маршрутизаторе', correct: false },
        { text: 'Сообщаемое расстояние на соседнем маршрутизаторе', correct: true },
        { text: 'Административное расстояние на удаленном маршрутизаторе', correct: false }
    ]
},
{
    id: 80,
    type: 'single',
    text: 'Что хранится в таблице топологии EIGRP?',
    options: [
        { text: 'Идентификатор области всех соседей', correct: false },
        { text: 'Все маршруты, полученные от соседей', correct: true },
        { text: 'Состояние всех каналов в сети', correct: false },
        { text: 'Количество переходов ко всем сетям', correct: false }
    ]
},
{
    id: 81,
    type: 'multiple',
    text: 'Новый сетевой администратор хочет проверить метрики, используемые EIGRP на устройстве Cisco. Какие две метрики EIGRP измеряются с использованием статических значений на устройстве Cisco? (Выберите два варианта)',
    options: [
        { text: 'MTU', correct: false },
        { text: 'Bandwidth', correct: true },
        { text: 'Load', correct: false },
        { text: 'Reliability', correct: false },
        { text: 'Delay', correct: true }
    ]
},
{
    id: 82,
    type: 'single',
    text: 'Какая таблица используется EIGRP для хранения всех маршрутов, полученных от соседей EIGRP?',
    options: [
        { text: 'Таблица соседей', correct: false },
        { text: 'Таблица маршрутизации', correct: false },
        { text: 'Таблица смежности', correct: false },
        { text: 'Таблица топологии', correct: true }
    ]
},
{
    id: 83,
    type: 'single',
    text: 'Какой протокол маршрутизации использует информацию о состоянии канала для построения карты топологии для расчета наилучшего пути до каждой сети назначения?',
    options: [
        { text: 'RIPng', correct: false },
        { text: 'RIP', correct: false },
        { text: 'OSPF', correct: true },
        { text: 'EIGRP', correct: false }
    ]
},
{
    id: 84,
    type: 'single',
    text: 'Администратор вводит команду router eigrp 100 на маршрутизаторе. Для чего используется число 100?',
    options: [
        { text: 'Как количество соседей, поддерживаемых этим маршрутизатором', correct: false },
        { text: 'Как продолжительность времени, в течение которого этот маршрутизатор будет ожидать приема приветственных пакетов от соседнего узла', correct: false },
        { text: 'Как номер автономной системы', correct: true },
        { text: 'Как максимальная пропускная способность самого быстрого интерфейса на маршрутизаторе', correct: false }
    ]
},
{
    id: 85,
    type: 'single',
    text: 'Какой MAC-адрес назначения используется при инкапсуляции многоадресного пакета EIGRP в кадр Ethernet?',
    options: [
        { text: '01-00-5E-00-00-10', correct: false },
        { text: '01-00-5E-00-00-0A', correct: true },
        { text: '01-00-5E-00-00-0B', correct: false },
        { text: '01-00-5E-00-00-09', correct: false }
    ]
},
{
    id: 86,
    type: 'input',
    text: 'Заполните пробел. Используйте аббревиатуру. EIGRP использует протокол ___ для доставки пакетов EIGRP соседям.',
    correctAnswer: 'RTP',
    caseSensitive: false
},
{
    id: 87,
    type: 'single',
    text: 'Какую команду или команды необходимо ввести на последовательном интерфейсе маршрутизатора Cisco, чтобы восстановить значение пропускной способности по умолчанию для этого конкретного интерфейса маршрутизатора?',
    options: [
        { text: 'no bandwidth', correct: true },
        { text: 'copy running-config startup-config <br> reload', correct: false },
        { text: 'bandwidth 1500', correct: false },
        { text: 'shutdown<br>no shutdown', correct: false }
    ]
},
{
    id: 88,
    type: 'single',
    text: 'Если все Ethernet-интерфейсы маршрутизатора в сети настроены на использование таймеров EIGRP по умолчанию, как долго маршрутизатор будет ждать получения пакета EIGRP от своего соседа прежде чем объявить его недоступным?',
    options: [
        { text: '10 секунд', correct: false },
        { text: '30 секунд', correct: false },
        { text: '15 секунд', correct: true },
        { text: '20 секунд', correct: false }
    ]
},
{
    id: 89,
    type: 'single',
    text: 'В чем разница между протоколами внутренней и внешней маршрутизации?',
    options: [
        { text: 'Протоколы внешней маршрутизации используются для администрирования одной автономной системы. Протоколы внутренней маршрутизации используются для администрирования нескольких доменов', correct: false },
        { text: 'Протоколы внутренней маршрутизации используются для маршрутизации в Интернете. Протоколы внешней маршрутизации используются внутри организаций', correct: false },
        { text: 'Протоколы внутренней маршрутизации используются для связи внутри одной автономной системы. Протоколы внешней маршрутизации используются для связи между несколькими автономными системами', correct: true },
        { text: 'Протоколы внешней маршрутизации используются только крупными интернет-провайдерами. Протоколы внутренней маршрутизации используются небольшими интернет-провайдерами', correct: false }
    ]
},
{
    id: 90,
    type: 'single',
    text: 'Какое утверждение описывает доставку пакетов обновления EIGRP?',
    options: [
        { text: 'EIGRP отправляет все пакеты обновлений через многоадресную рассылку', correct: false },
        { text: 'Для отправки всех пакетов обновления EIGRP использует надежный протокол доставки', correct: true },
        { text: 'EIGRP отправляет все пакеты обновления через одноадресную рассылку', correct: false },
        { text: 'EIGRP использует UDP для отправки всех пакетов обновления', correct: false }
    ]
},
{
    id: 91,
    type: 'multiple',
    text: 'Веса каких трех показателей устанавливаются равными нулю по умолчанию при расчете метрики в EIGRP? (Выберите три варианта)',
    options: [
        { text: 'K5', correct: true },
        { text: 'K4', correct: true },
        { text: 'K6', correct: false },
        { text: 'K3', correct: false },
        { text: 'K1', correct: false },
        { text: 'K2', correct: true }
    ]
},
{
    id: 92,
    type: 'single',
    text: 'Какова цель использования протоколозависимых модулей в EIGRP?',
    options: [
        { text: 'Для использования разных транспортных протоколов для разных пакетов', correct: false },
        { text: 'Для обеспечения маршрутизации различных протоколов сетевого уровня', correct: true },
        { text: 'Для идентификации различных протоколов прикладного уровня', correct: false },
        { text: 'Для описания различных процессов маршрутизации', correct: false }
    ]
},
{
    id: 93,
    type: 'multiple',
    text: 'Какие два типа пакетов EIGRP отправляются с ненадежной доставкой? (Выберите два варианта)',
    options: [
        { text: 'Query', correct: false },
        { text: 'Reply', correct: false },
        { text: 'Hello', correct: true },
        { text: 'Update', correct: false },
        { text: 'Acknowledgment', correct: true }
    ]
},
{
    id: 94,
    type: 'single',
    text: 'Сетевой администратор хочет проверить значения задержки по умолчанию для интерфейсов на маршрутизаторе с поддержкой EIGRP. Какая команда выведет эти значения?',
    options: [
        { text: 'show ip protocols', correct: false },
        { text: 'show ip route', correct: false },
        { text: 'show running-config', correct: false },
        { text: 'show interfaces', correct: true }
    ]
},
{
    id: 95,
    type: 'single',
    text: 'В контексте протоколов маршрутизации, что является определением времени сходимости?',
    options: [
        { text: 'Количество времени, необходимое сетевому администратору для настройки протокола маршрутизации в сети малого и среднего размера', correct: false },
        { text: 'Мера сложности настройки протокола', correct: false },
        { text: 'Возможность передачи данных, видео и голоса по одним и тем же каналам', correct: false },
        { text: 'Время, в течение которого таблицы маршрутизации достигают согласованного состояния после изменения топологии', correct: true }
    ]
},
{
    id: 96,
    type: 'matching',
    text: 'Сопоставьте правильную версию EIGRP с функциями EIGRP. (Используются не все варианты)',
    pairs: [
        { question: 'EIGRP только для IPv6', answer: 'Адрес источника сообщений EIGRP является локальным адресом канала' },
        { question: 'EIGRP для IPv4 и EIGRP для IPv6', answer: 'Использует 32-битный идентификатор маршрутизатора' },
        { question: 'EIGRP только для IPv4', answer: 'Адрес источника сообщений EIGRP является маршрутизируемым адресом' }
    ],
    extraAnswers: [
        'Использует 128-битный идентификатор маршрутизатора',
        'Требует двойного стека протоколов',
        'Работает только через туннели IPv6'
    ]
},
{
    id: 97,
    type: 'matching',
    text: 'Упорядочите приоритет, с которым маршрутизатор EIGRP выбирает идентификатор маршрутизатора. (Используются не все варианты)',
    pairs: [
        {question: 'Первый', answer: 'Команда eigrp router-id'},
        {question: 'Второй', answer:'Самый большой IPv4-адрес на loopback-интерфейсах'}, 
        {question: 'Третий', answer:'Самый большой IPv4-адрес на активных физических интерфейсах'}
    ],
    extraAnswers: [
        'Самый маленький IPv4-адрес на loopback-интерфейсах',
        'Случайно сгенерированное значение',
        'Мак адрес маршрутизатора'
    ]
},
{
    id: 98,
    type: 'single',
    text: 'Какой протокол динамической маршрутизации был разработан в качестве протокола внешнего шлюза для соединения различных интернет-провайдеров?',
    options: [
        { text: 'BGP', correct: true },
        { text: 'EIGRP', correct: false },
        { text: 'OSPF', correct: false },
        { text: 'RIP', correct: false }
    ]
},
{
    id: 99,
    type: 'multiple',
    text: 'Какие два протокола являются протоколами маршрутизации по состоянию канала? (Выберите два варианта)',
    options: [
        { text: 'RIP', correct: false },
        { text: 'IGP', correct: false },
        { text: 'IS-IS', correct: true },
        { text: 'BGP', correct: false },
        { text: 'OSPF', correct: true },
        { text: 'EIGRP', correct: false }
    ]
},
{
    id: 100,
    type: 'multiple',
    text: 'Для каких двух целей используются протоколы динамической маршрутизации? (Выберите два варианта)',
    options: [
        { text: 'Предоставление маршрута по умолчанию хостам сети', correct: false },
        { text: 'Обеспечение безопасности сети', correct: false },
        { text: 'Обнаружение удаленных сетей', correct: true },
        { text: 'Уменьшение сетевого трафика', correct: false },
        { text: 'Выбор лучшего пути к сетям назначения', correct: true }
    ]
},
{
    id: 101,
    type: 'single',
    text: 'Что определяется в коде операции заголовка пакета EIGRP?',
    options: [
        { text: 'Таймер удержания EIGRP, согласованный с соседом', correct: false },
        { text: 'Метрики автономной системы EIGRP', correct: false },
        { text: 'Сумма задержек EIGRP от источника к получателю', correct: false },
        { text: 'Тип сообщения EIGRP, отправляемого или получаемого от соседа', correct: true }
    ]
},
{
    id: 102,
    type: 'single',
    text: 'Посмотрите на рисунок. Администратор хочет, чтобы EIGRP на маршрутизаторе Router1 балансировал нагрузку трафика в сеть 2001:db8:11:10::/64 через два интерфейса. В настоящее время трафик использует только интерфейс GigabitEthernet0/1. Второй маршрут, которого нет в таблице маршрутизации, доступен с метрикой 264000. Какое значение необходимо в команде variance, чтобы EIGRP поместил второй маршрут в таблицу маршрутизации?',
    image: 'images/questions/4-102.jpg',
    options: [
        { text: '2', correct: false },
        { text: '3', correct: false },
        { text: '10', correct: false },
        { text: '11', correct: true },
        { text: '4', correct: false },
        { text: '1', correct: false }
    ]
},
{
    id: 103,
    type: 'single',
    text: 'Какую команду можно выполнить на маршрутизаторе, чтобы убедиться, что автоматическое суммирование включено?',
    options: [
        { text: 'show ip protocols', correct: true },
        { text: 'show ip eigrp interfaces', correct: false },
        { text: 'show ip eigrp neighbors', correct: false },
        { text: 'show ip interface brief', correct: false }
    ]
},
{
    id: 104,
    type: 'single',
    text: 'Посмотрите на рисунок. У удаленных пользователей возникают проблемы с подключением при попытке доступа к узлам в сети 172.21.100.0/24. Используя выход из выставки сделайте вывод, какова наиболее вероятная причина проблемы с подключением?',
    image: 'images/questions/4-104.jpg',
    options: [
        { text: 'Интерфейс GigabitEthernet 0/1 не участвует в процессе EIGRP', correct: true },
        { text: 'Интерфейсы GigabitEthernet не ограничивают поток информации о сообщениях EIGRP и переполняются трафиком EIGRP', correct: false },
        { text: 'Команда passive-interface предотвращает отношения смежности на интерфейсе GigabitEthernet 0/0', correct: false },
        { text: 'Таймер приветствия был изменен на интерфейсе GigabitEthernet 0/1 маршрутизатора R3, но не на соседнем устройстве, в результате чего смежность соседнего узла не формируется', correct: false }
    ]
},
{
    id: 105,
    type: 'single',
    text: 'Зачем сетевому администратору использовать обратную маску в команде network при настройке маршрутизатора для использования EIGRP?',
    options: [
        { text: 'Чтобы разбить сеть на подсети во время настройки', correct: false },
        { text: 'Чтобы исключить некоторые интерфейсы из процесса EIGRP', correct: true },
        { text: 'Чтобы вручную выполнить суммаризацию', correct: false },
        { text: 'Чтобы снизить нагрузку на маршрутизатор', correct: false }
    ]
},
{
    id: 106,
    type: 'single',
    text: 'Посмотрите на рисунок. Маршрутизатор R3 получает несколько маршрутов по протоколу маршрутизации EIGRP. Какое утверждение о реализации суммирования в этой сети верно?',
    image: 'images/questions/4-106.jpg',
    options: [
        { text: 'Автоматическое суммирование отключено на маршрутизаторе R3', correct: true },
        { text: 'Автоматическое суммирование отключено для отдельных интерфейсов', correct: false },
        { text: 'На соседних маршрутизаторах включено автоматическое суммирование', correct: false },
        { text: 'Автоматическое суммирование включено только для сети 172.21.100.0/24', correct: false }
    ]
},
{
    id: 107,
    type: 'single',
    text: 'Посмотрите на рисунок. Маршрутизаторы R1 и R2 подключены напрямую через свои последовательные интерфейсы и оба используют протокол маршрутизации EIGRP. Маршрутизаторы R1 и R2 могут отправлять эхо-запросы непосредственно подключенному последовательному интерфейсу своего соседа, но не могут формировать сменность EIGRP. Какие действия следует предпринять для решения этой проблемы?',
    image: 'images/questions/4-107.jpg',
    options: [
        { text: 'Настройте одинаковый интервал приветствия между маршрутизаторами', correct: false },
        { text: 'Настройте оба маршрутизатора с одним и тем же номером автономной системы EIGRP', correct: true },
        { text: 'Настройте EIGRP для отправки периодических обновлений', correct: false },
        { text: 'Включите последовательные интерфейсы обоих маршрутизаторов', correct: false }
    ]
},
{
    id: 108,
    type: 'single',
    text: 'Посмотрите на рисунок. Предполагая, что EIGRP включен на обоих маршрутизаторах и включено автоматическое суммирование, что необходимо настроить, чтобы маршрутизатор R1 мог получить доступ к сети 2.2.2.0/24?',
    image: 'images/questions/4-108.jpg',
    options: [
        { text: 'EIGRP поддерживает VLSM и будет автоматически распознавать сеть 2.2.2.0', correct: false },
        { text: 'EIGRP не поддерживает VLSM и поэтому не может использоваться в несмежных сетях', correct: false },
        { text: 'Использовать команду ip address-summary, чтобы гарантировать, что R1 распознает сеть 2.2.2.0', correct: false },
        { text: 'Использовать команду no auto-summary, чтобы отключить автоматическое суммирование', correct: true }
    ]
},
{
    id: 109,
    type: 'single',
    text: 'Какой протокол маршрутизации поддерживает балансировку нагрузки с неравной стоимостью на маршрутизаторах Cisco?',
    options: [
        { text: 'OSPF', correct: false },
        { text: 'EIGRP', correct: true },
        { text: 'RIPv2', correct: false },
        { text: 'IS-IS', correct: false }
    ]
},
{
    id: 110,
    type: 'multiple',
    text: 'Какие три преимущества использования автоматического суммирования? (Выберите три варианта)',
    options: [
        { text: 'Уменьшение количества записей в таблице маршрутизации', correct: true },
        { text: 'Снижение частоты обновлений маршрутизации', correct: true },
        { text: 'Улучшение доступности в несмежных сетях', correct: false },
        { text: 'Гарантия того, что трафик для нескольких подсетей использует один путь через объединенную сеть', correct: true },
        { text: 'Увеличение размера обновлений маршрутов', correct: false },
        { text: 'Максимизация количества маршрутов в таблице маршрутизации', correct: false }
    ]
},
{
    id: 111,
    type: 'single',
    text: 'Каково административное расстояние для маршрутов EIGRP, полученных извне?',
    options: [
        { text: '170', correct: true },
        { text: '120', correct: false },
        { text: '90', correct: false },
        { text: '110', correct: false }
    ]
},
{
    id: 112,
    type: 'single',
    text: 'Сколько маршрутов с одинаковой стоимостью к одной и той же сети назначения по умолчанию будет установлено EIGRP в таблице маршрутизации?',
    options: [
        { text: '8', correct: false },
        { text: '4', correct: true },
        { text: '6', correct: false },
        { text: '2', correct: false }
    ]
},
{
    id: 113,
    type: 'single',
    text: 'Если маршрутизатор Cisco настроен на быструю коммутацию, как пакеты распределяются по путям равной стоимости?',
    options: [
        { text: 'На основе загрузки пути', correct: false },
        { text: 'На основе назначения', correct: true },
        { text: 'На основе каждого интерфейса', correct: false },
        { text: 'На основе пакетов', correct: false }
    ]
},
{
    id: 114,
    type: 'multiple',
    text: 'Какие два шага необходимо предпринять, чтобы отправить маршрут по умолчанию другим маршрутизаторам EIGRP? (Выберите два варианта)',
    options: [
        { text: 'Отключение автоматической суммаризации', correct: false },
        { text: 'Настройка маршрута по умолчанию', correct: true },
        { text: 'Настройка loopback интерфейса', correct: false },
        { text: 'Настройка идентификатора маршрутизатора', correct: false },
        { text: 'Перераспределение маршрута по умолчанию', correct: true }
    ]
},
{
    id: 115,
    type: 'multiple',
    text: 'Посмотрите на рисунок. Все сети работают в одном домене маршрутизации EIGRP. Когда на маршрутизаторе R3 вводится команда автоматического суммирования, какие две суммарные сети будут вычислены на маршрутизаторе R3? (Выберите два варианта)',
    image: 'images/questions/4-115.jpg',
    options: [
        { text: '172.16.3.0/24', correct: false },
        { text: '172.16.0.0/16', correct: true },
        { text: '192.168.10.0/24', correct: true },
        { text: '192.168.10.0/30', correct: false },
        { text: '192.168.1.0/24', correct: false }
    ]
},
{
    id: 116,
    type: 'multiple',
    text: 'Посмотрите на рисунок. Какие два маршрута будут объявлены провайдеру ISP, если автоматическое суммирование отключено? (Выберите два варианта)',
    image: 'images/questions/4-116.jpg',
    options: [
        { text: '10.1.4.0/28', correct: false },
        { text: '10.1.2.0/24', correct: true },
        { text: '10.1.0.0/16', correct: false },
        { text: '10.1.4.0/30', correct: true },
        { text: '10.1.4.0/24', correct: false }
    ]
},
{
    id: 117,
    type: 'input',
    text: 'Заполните пробел. Команда для распространения маршрута по умолчанию от пограничного маршрутизатора до остальной части домена EIGRP — Border(config-router)# _',
    correctAnswer: 'redistribute static',
    caseSensitive: false
},
{
    id: 118,
    type: 'single',
    text: 'Какая конфигурация необходима, чтобы обеспечить успешную работу EIGRP для IPv6?',
    options: [
        { text: 'Требуется команда no shutdown в режиме конфигурации маршрутизатора', correct: true },
        { text: 'Требуется команда network в режиме конфигурации маршрутизатора', correct: false },
        { text: 'В команде eigrp router-id требуется указать адрес IPv6 в режиме конфигурации маршрутизатора', correct: false },
        { text: 'Требуется команда router eigrp autonomous-system в режиме конфигурации маршрутизатора', correct: false }
    ]
},
{
    id: 119,
    type: 'single',
    text: 'Посмотрите на рисунок. Учитывая, что R2, R3 и R4 настроены правильно, почему R1 не установил смежность с R2, R3 и R4?',
    image: 'images/questions/4-119.jpg',
    options: [
        { text: 'Потому что интерфейс Fa0/0 маршрутизатора R1 объявлен пассивным для EIGRP', correct: true },
        { text: 'Потому что IPv4-адрес на интерфейсе Fa0/0 маршрутизатора R1 неверен', correct: false },
        { text: 'Потому что нет команды network для сети 192.168.1.0/24 на R1', correct: false },
        { text: 'Потому что на R1 включено автоматическое суммирование', correct: false }
    ]
},
{
    id: 120,
    type: 'single',
    text: 'Два маршрутизатора, R1 и R2, совместно используют канал со скоростью 64 кбит/с. Администратор хочет ограничить пропускную способность, используемую EIGRP между этими двумя маршрутизаторами, до 48 кбит/с. Какая команда используется на обоих маршрутизаторах для настройки нового параметра полосы пропускания?',
    options: [
        { text: 'ip bandwidth-percent eigrp 100 64', correct: false },
        { text: 'ip bandwidth-percent eigrp 64 48', correct: false },
        { text: 'ip bandwidth-percent eigrp 100 48', correct: false },
        { text: 'ip bandwidth-percent eigrp 100 75', correct: true },
        { text: 'ip bandwidth-percent eigrp 75 100', correct: false }
    ]
},
{
    id: 121,
    type: 'single',
    text: 'Какова максимальная пропускная способность по умолчанию, которую можно использовать для обмена сообщениями EIGRP на интерфейсе, настроенном на EIGRP?',
    options: [
        { text: '100%', correct: false },
        { text: '75%', correct: false },
        { text: '10%', correct: false },
        { text: '50%', correct: true }
    ]
},
{
    id: 122,
    type: 'single',
    text: 'При каком сценарии использование автоматического суммирования EIGRP приведет к несогласованной маршрутизации в сети?',
    options: [
        { text: 'Когда маршрутизаторы в сети IPv4 подключены к несмежным сетям с включенным автоматическим суммированием', correct: true },
        { text: 'Когда нет общей подсети между соседними маршрутизаторами', correct: false },
        { text: 'Когда между соседними маршрутизаторами не установлена смежность', correct: false },
        { text: 'Когда маршрутизаторы EIGRP в сети IPv4 имеют несовпадающие номера AS', correct: false }
    ]
},
{
    id: 123,
    type: 'single',
    text: 'Какова цель маршрута Null0 в таблице маршрутизации?',
    options: [
        { text: 'Выполнение роли шлюза последней надежды', correct: false },
        { text: 'Предотвращение отправки маршрутизатором пакетов EIGRP', correct: false },
        { text: 'Предотвращение петель маршрутизации', correct: true },
        { text: 'Перераспределение внешних маршрутов в EIGRP', correct: false }
    ]
},
{
    id: 124,
    type: 'input',
    text: 'Заполните пробел. Команда ___ заставляет маршрутизатор EIGRP прекратить отправку пакетов приветствия через указанный интерфейс.',
    correctAnswer: 'passive-interface',
    caseSensitive: false
},
{
    id: 125,
    type: 'multiple',
    text: 'Какие два компонента LSP позволяют маршрутизатору OSPF определить, содержит ли полученный LSP более новую информацию, чем та, что содержится в текущей базе данных состояния каналов маршрутизатора OSPF? (Выберите два варианта)',
    options: [
        { text: 'Приветствия', correct: false },
        { text: 'Подтверждения', correct: false },
        { text: 'Информация об устаревании записи', correct: true },
        { text: 'Запрос', correct: false },
        { text: 'Порядковые номера', correct: true }
    ]
},
{
    id: 126,
    type: 'input',
    text: 'Заполните пробел. ОSPF использует ___ в качестве метрики.',
    correctAnswer: 'стоимость',
    caseSensitive: false
},
{
    id: 127,
    type: 'single',
    text: 'Что произойдет, если два маршрутизатора с состоянием канала перестанут получать пакеты приветствия от соседей?',
    options: [
        { text: 'Они будут флудить свои таблицы базы данных друг другу', correct: false },
        { text: 'Они создают маршрут по умолчанию к соседнему маршрутизатору', correct: false },
        { text: 'Они считают, что сосед недостижим и смежность нарушена', correct: true },
        { text: 'Они продолжают работать в обычном режиме и могут обмениваться пакетами', correct: false }
    ]
},
{
    id: 128,
    type: 'multiple',
    text: 'Что является функциями протокола маршрутизации OSPF? (Выберите два варианта)',
    options: [
        { text: 'Автоматически суммирует сети на границах классов', correct: false },
        { text: 'Используется в основном как протокол внешней маршрутизации', correct: false },
        { text: 'Использует алгоритм Дейкстры для построения дерева SPF', correct: true },
        { text: 'Вычисляет свою метрику, используя пропускную способность', correct: true },
        { text: 'Имеет административное расстояние 100', correct: false }
    ]
},
{
    id: 129,
    type: 'single',
    text: 'Какой протокол маршрутизации предназначен для масштабирования больших иерархических сетей с использованием областей?',
    options: [
        { text: 'BGP', correct: false },
        { text: 'EIGRP', correct: false },
        { text: 'RIP', correct: false },
        { text: 'OSPF', correct: true }
    ]
},
{
    id: 130,
    type: 'single',
    text: 'Что используется для создания таблицы соседей OSPF?',
    options: [
        { text: 'База данных состояния каналов', correct: false },
        { text: 'Таблица маршрутизации', correct: false },
        { text: 'База данных смежности', correct: true },
        { text: 'База данных пересылки', correct: false }
    ]
},
{
    id: 131,
    type: 'single',
    text: 'OSPFv3 для одной области включен на маршрутизаторе с помощью команды ipv6 router ospf 20. Какая команда активирует этот процесс OSPFv3 на интерфейсе этого маршрутизатора?',
    options: [
        { text: 'ipv6 ospf 0 area 20', correct: false },
        { text: 'ipv6 ospf 20 area 0', correct: true },
        { text: 'ipv6 ospf 20 area 20', correct: false },
        { text: 'ipv6 ospf 0 area 0', correct: false }
    ]
},
{
    id: 132,
    type: 'single',
    text: 'Какой пакет OSPF содержит различные типы объявлений состояния канала?',
    options: [
        { text: 'LSR', correct: false },
        { text: 'DBD', correct: false },
        { text: 'Hello', correct: false },
        { text: 'LSAck', correct: false },
        { text: 'LSU', correct: true }
    ]
},
{
    id: 133,
    type: 'single',
    text: 'Посмотрите на рисунок. В сети используется OSPF. Какой путь выберет OSPF для отправки пакетов данных из Net A в Net B?',
    image: 'images/questions/5-133.jpg',
    options: [
        { text: 'R1, R3, R6, R7', correct: false },
        { text: 'R1, R2, R5, R7', correct: false },
        { text: 'R1, R3, R5, R6, R7', correct: false },
        { text: 'R1, R4, R6, R7', correct: false },
        { text: 'R1, R3, R5, R7', correct: true }
    ]
},
{
    id: 134,
    type: 'single',
    text: 'Что маршрутизатор OSPF предпочтет использовать в качестве идентификатора маршрутизатора в первую очередь?',
    options: [
        { text: 'Активный интерфейс с самым большим номером, участвующий в процессе маршрутизации из-за специально настроенного оператора сети', correct: false },
        { text: 'Любой IP-адрес, настроенный с помощью команды router-id', correct: true },
        { text: 'Наивысший IP-адрес, настроенный на loopback-интерфейсе маршрутизатора', correct: false },
        { text: 'Самый большой IP-адрес активного интерфейса, настроенный на маршрутизаторе', correct: false }
    ]
},
{
    id: 135,
    type: 'single',
    text: 'Какой компонент OSPF идентичен во всех маршрутизаторах в области OSPF после конвергенции?',
    options: [
        { text: 'База данных состояния каналов', correct: true },
        { text: 'Таблица маршрутизации', correct: false },
        { text: 'SPF-дерево', correct: false },
        { text: 'База данных смежности', correct: false }
    ]
},
{
    id: 136,
    type: 'single',
    text: 'В чем заключается недостаток развертывания OSPF в среде маршрутизации с одной большой областью?',
    options: [
        { text: 'OSPF использует чрезмерную лавинную рассылку LSP', correct: true },
        { text: 'OSPF использует обновления многоадресной передачи', correct: false },
        { text: 'OSPF использует показатели полосы пропускания и задержки для вычисления метрики', correct: false },
        { text: 'OSPF хранит база данных топологии резервных маршрутов', correct: false }
    ]
},
{
    id: 137,
    type: 'single',
    text: 'С помощью какой команды можно проверить, что маршрутизатор, на котором работает OSPFv3, сформировал смежность с другими маршрутизаторами в своей области OSPF?',
    options: [
        { text: 'show ipv6 interface brief', correct: false },
        { text: 'show ipv6 ospf neighbor', correct: true },
        { text: 'show ipv6 route ospf', correct: false },
        { text: 'show running-configuration', correct: false }
    ]
},
{
    id: 138,
    type: 'multiple',
    text: 'Каковы две причины, по которым два маршрутизатора не смогут сформировать смежность OSPFv2? (Выберите два варианта)',
    options: [
        { text: 'Один маршрутизатор подключается к порту FastEthernet на коммутаторе, а другой подключается к порту GigabitEthernet', correct: false },
        { text: 'Несоответствие масок подсети на интерфейсах', correct: true },
        { text: 'Используются частные IP-адреса на интерфейсах', correct: false },
        { text: 'Настроены несоответствующие таймеры OSPF Hello или Dead', correct: true },
        { text: 'Используется несовпадающая версия Cisco IOS', correct: false }
    ]
},
{
    id: 139,
    type: 'multiple',
    text: 'Для каких двух целей используется идентификатор маршрутизатора OSPF? (Выберите два варианта)',
    options: [
        { text: 'Для уникальной идентификации маршрутизатора в домене OSPF', correct: true },
        { text: 'Для облегчения перехода состояния соседа OSPF в состояние Full', correct: false },
        { text: 'Для облегчения установления сетевой конвергенции', correct: false },
        { text: 'Чтобы включить алгоритм SPF для определения пути с наименьшей стоимостью к удаленным сетям', correct: false },
        { text: 'Для облегчения участия маршрутизатора в выборах назначенного маршрутизатора', correct: true }
    ]
},
{
    id: 140,
    type: 'multiple',
    text: 'Какие два протокола являются протоколами маршрутизации по состоянию канала? (Выберите два варианта)',
    options: [
        { text: 'IS-IS', correct: true },
        { text: 'EIGRP', correct: false },
        { text: 'BGP', correct: false },
        { text: 'RIP', correct: false },
        { text: 'OSPF', correct: true }
    ]
},
{
    id: 141,
    type: 'single',
    text: 'Какова стоимость по умолчанию для любого канала OSPF с пропускной способностью 100 Мбит/с или выше?',
    options: [
        { text: '1', correct: true },
        { text: '100', correct: false },
        { text: '100000000', correct: false },
        { text: '10000', correct: false }
    ]
},
{
    id: 142,
    type: 'single',
    text: 'Что происходит сразу после того, как два маршрутизатора OSPF обменялись приветственными пакетами и сформировали отношение смежности?',
    options: [
        { text: 'Они запрашивают дополнительную информацию о своих базах данных', correct: false },
        { text: 'Они согласовывают процесс выборов, если они находятся в сети с множественным доступом', correct: false },
        { text: 'Они обмениваются сокращенными списками своих LSDB', correct: true },
        { text: 'Они обмениваются пакетами DBD, чтобы объявить такие параметры, как Hello и Dead интервалы', correct: false }
    ]
},
{
    id: 143,
    type: 'single',
    text: 'Какую команду следует использовать для проверки идентификатора процесса OSPF, идентификатора маршрутизатора, сетей, которые маршрутизатор объявляет, соседей, от которых маршрутизатор получает обновления, и административного расстояния по умолчанию?',
    options: [
        { text: 'show ip ospf interface', correct: false },
        { text: 'show ip protocols', correct: true },
        { text: 'show ip ospf', correct: false },
        { text: 'show ip ospf neighbor', correct: false }
    ]
},
{
    id: 144,
    type: 'single',
    text: 'Какой первый шаг предпринимает недавно настроенный маршрутизатор OSPF в процессе конвергенции?',
    options: [
        { text: 'Он узнает о непосредственно подключенных каналах в активном состоянии', correct: true },
        { text: 'Он рассылает пакеты LSP соседним маршрутизаторам', correct: false },
        { text: 'Он обменивается приветственными сообщениями с соседним маршрутизатором', correct: false },
        { text: 'Создает топологическую базу данных', correct: false }
    ]
},
{
    id: 145,
    type: 'matching',
    text: 'Сопоставьте каждый тип пакета OSPF с тем, как он используется маршрутизатором. (Не все варианты используются)',
    pairs: [
        { question: 'Пакет приветствия', answer: 'Установить и поддерживать смежность' },
        { question: 'Пакет запроса состояния канала', answer: 'Запросить дополнительную информацию у другого маршрутизатора' },
        { question: 'Пакет обновления состояния канала', answer: 'Объявить новую информацию' },
        { question: 'Пакет описания базы данных', answer: 'Сравнить локальную топологию с топологией, отправленной другим маршрутизатором' }
    ],
    extraAnswers: [
        'Подтвердить получение информации о состоянии канала',
        'Выбрать назначенный маршрутизатор (DR) в сети',
        'Обновить таблицу маршрутизации непосредственно'
    ]
},
{
    id: 146,
    type: 'multiple',
    text: 'Какие два требования необходимы, прежде чем маршрутизатор, сконфигурированный с протоколом маршрутизации на основе состояния канала, сможет создавать и отправлять свои пакеты состояния канала? (Выберите два варианта)',
    options: [
        { text: 'Таблица маршрутизации обновлена', correct: false },
        { text: 'Маршрутизатор определил стоимости его активных каналов', correct: true },
        { text: 'Маршрутизатор установил смежность с соседним маршрутизатором', correct: true },
        { text: 'Маршрутизатор создал свою базу данных состояния каналов', correct: false },
        { text: 'Маршрутизатор построил SPF-дерево', correct: false }
    ]
},
{
    id: 147,
    type: 'multiple',
    text: 'Какие два события инициируют отправку пакета состояния канала протоколом маршрутизации состояния канала? (Выберите два варианта)',
    options: [
        { text: 'Истек таймер обновления маршрутизатора', correct: false },
        { text: 'Требуется периодическая рассылка пакетов состояния канала всем соседям', correct: false },
        { text: 'Канал к соседнему маршрутизатору стал перегруженным', correct: false },
        { text: 'Изменение топологии', correct: true },
        { text: 'Первоначальный запуск процесса протокола маршрутизации', correct: true }
    ]
},
{
    id: 148,
    type: 'single',
    text: 'Как в таблице маршрутизации идентифицируются суммарные сети OSPF, исходящие из ABR?',
    options: [
        { text: 'O E1', correct: false },
        { text: 'O IA', correct: true },
        { text: 'O E2', correct: false },
        { text: 'O', correct: false }
    ]
},
{
    id: 149,
    type: 'single',
    text: 'Сетевой инженер вручную настроил интервал приветствия на 15 секунд на интерфейсе маршрутизатора с OSPF v2. Каким по умолчанию станет интервал простоя на интерфейсе?',
    options: [
        { text: 'Интервал простоя не изменится по сравнению со значением по умолчанию', correct: false },
        { text: 'Интервал простоя теперь будет составлять 60 секунд', correct: true },
        { text: 'Интервал простоя теперь будет 15 секунд', correct: false },
        { text: 'Интервал простоя теперь будет составлять 30 секунд', correct: false }
    ]
},
{
    id: 150,
    type: 'single',
    text: 'Какую команду необходимо ввести сетевому инженеру, чтобы проверить настроенные интервалы приветствия и простоя на канале точка-точка между двумя маршрутизаторами, на которых работает OSPFv2?',
    options: [
        { text: 'show ipv6 ospf interface serial 0/0/0', correct: false },
        { text: 'show ip ospf interface fastethernet 0/1', correct: false },
        { text: 'show ip ospf interface serial 0/0/0', correct: true },
        { text: 'show ip ospf neighbor', correct: false }
    ]
},
{
    id: 151,
    type: 'multiple',
    text: 'Какие три шага в проектировании и реализации сети с OSPF с несколькими областями считаются этапами планирования? (Выберите три варианта)',
    options: [
        { text: 'Собрать необходимые параметры', correct: true },
        { text: 'Проверить OSPF', correct: false },
        { text: 'Устранить неполадки в конфигурации', correct: false },
        { text: 'Определить требования к сети', correct: true },
        { text: 'Настроить OSPF', correct: false },
        { text: 'Определить параметры OSPF', correct: true }
    ]
},
{
    id: 152,
    type: 'single',
    text: 'Какой тип LSA OSPF используется для информирования маршрутизаторов об идентификаторе маршрутизатора DR в каждой сети с множественным доступом в области OSPF?',
    options: [
        { text: 'Тип 1', correct: false },
        { text: 'Тип 2', correct: true },
        { text: 'Тип 3', correct: false },
        { text: 'Тип 4', correct: false }
    ]
},
{
    id: 153,
    type: 'input',
    text: 'Посмотрите на рисунок и заполните пробел. Не используйте сокращения. Для настройки маршрутизатора R1 для OSPF с несколькими областями необходимо ввести команду ___.',
    image: 'images/questions/6-153.jpg',
    correctAnswer: 'network 192.168.10.128 0.0.0.127 area 1',
    caseSensitive: false
},
{
    id: 154,
    type: 'multiple',
    text: 'Назовите две причины для создания сети OSPF с несколькими областями? (Выберите два варианта)',
    options: [
        { text: 'Чтобы убедиться, что область используется для подключения сети к Интернету', correct: false },
        { text: 'Чтобы определить области в сети для маршрутизаторов, не работающих под управлением OSPF', correct: false },
        { text: 'Чтобы уменьшить использование памяти и ресурсов процессора', correct: true },
        { text: 'Чтобы упростить настройку', correct: false },
        { text: 'Чтобы уменьшить пересчет SPF', correct: true }
    ]
},
{
    id: 155,
    type: 'single',
    text: 'Посмотрите на рисунок. На что указывает О IA в выходных данных маршрутизатора?',
    image: 'images/questions/6-155.jpg',
    options: [
        { text: 'Маршрут был получен извне сети', correct: false },
        { text: 'Маршрут был настроен вручную', correct: false },
        { text: 'Маршрут был изучен из другой области', correct: true },
        { text: 'Маршрут был изучен в пределах области', correct: false }
    ]
},
{
    id: 156,
    type: 'single',
    text: 'Что используется для поддержки иерархической маршрутизации в ОSPF?',
    options: [
        { text: 'Автоматическое суммирование', correct: false },
        { text: 'Выбор назначенных маршрутизаторов', correct: false },
        { text: 'Частые вычисления SPF', correct: false },
        { text: 'Использование нескольких областей', correct: true }
    ]
},
{
    id: 157,
    type: 'single',
    text: 'Посмотрите на рисунок. Какой вывод можно сделать о сети 192.168.4.0 в таблице маршрутизации R2?',
    image: 'images/questions/6-157.jpg',
    options: [
        { text: 'Эта сеть должна использоваться для пересылки трафика во внешние сети', correct: false },
        { text: 'Сеть была получена от маршрутизатора в той же области, что и R2', correct: true },
        { text: 'Доступ к сети возможен через интерфейс GigabitEthernet0/0', correct: false },
        { text: 'Сеть была изучена через суммарные LSA от ABR', correct: false }
    ]
},
{
    id: 158,
    type: 'single',
    text: 'Администратора сети попросили суммировать маршруты для новой области OSPF. Суммируются сети 172.16.8.0, 172.16.10.0 и 172.16.12.0 с маской подсети 255.255.255.0 для каждой сети. Какую команду должен ввести администратор, чтобы передать суммарный маршрут для области 15 в область 0?',
    options: [
        { text: 'area 15 range 172.16.8.0 255.255.255.248', correct: false },
        { text: 'area 0 range 172.16.8.0 255.255.248.0', correct: false },
        { text: 'area 0 range 172.16.8.0 255.255.255.248', correct: false },
        { text: 'area 15 range 172.16.8.0 255.255.248.0', correct: true }
    ]
},
{
    id: 159,
    type: 'single',
    text: 'Когда в сети OSPF требуются выборы DR и BDR?',
    options: [
        { text: 'Когда маршрутизаторы соединены между собой через общую сеть Ethernet', correct: true },
        { text: 'Когда два соседа соединены между собой каналом точка-точка', correct: false },
        { text: 'Когда два соседа находятся в двух разных сетях', correct: false },
        { text: 'Когда все маршрутизаторы в области OSPF не могут сформировать смежности', correct: false }
    ]
},
{
    id: 160,
    type: 'matching',
    text: 'Соотнесите каждый тип маршрутизатора OSPF с его описанием. (Не все варианты используются)',
    pairs: [
        { question: 'Граничный маршрутизатор автономной системы', answer: 'Маршрутизатор, у которого есть хотя бы один интерфейс, подключенный к сети, отличной от OSPF' },
        { question: 'Граничный маршрутизатор области', answer: 'Маршрутизатор с интерфейсами, подключенными к нескольким областям' },
        { question: 'Магистральный маршрутизатор', answer: 'Маршрутизатор в магистральной области' },
        { question: 'Внутренний маршрутизатор', answer: 'Маршрутизатор со всеми его интерфейсами в одной области' }
    ],
    extraAnswers: [
        'Маршрутизатор, который не участвует в OSPF, но обеспечивает интернет-соединение',
        'Маршрутизатор с наибольшим приоритетом в сети',
        'Маршрутизатор с наименьшим идентификатором маршрутизатора'
    ]
},
{
    id: 161,
    type: 'multiple',
    text: 'Посмотрите на рисунок. Какие два утверждения верны? (Выберите два варианта)',
    image: 'images/questions/6-161.jpg',
    options: [
        { text: 'Таблица маршрутизации содержит два маршрута внутри области', correct: false },
        { text: 'Таблица маршрутизации содержит маршруты из нескольких областей', correct: true },
        { text: 'Для достижения сети 192.168.1.0 трафик будет выходить через интерфейс Serial0/0/0', correct: true },
        { text: 'Запись для 172.16.200.1 представляет loopback интерфейс', correct: false },
        { text: 'Для достижения сети 172.16.2.0 трафик будет проходить через интерфейс GigabitEthernet0/0', correct: false }
    ]
},
{
    id: 162,
    type: 'single',
    text: 'Посмотрите на рисунок. Сетевому администратору было предложено суммировать сети, показанные на рисунке, как часть реализации OSPF для нескольких областей. Все адреса используют маску подсети 255.255.255.0. Каково правильное обобщение этих восьми сетей?',
    image: 'images/questions/6-162.jpg',
    options: [
        { text: '10.0.0.0 255.255.240.0', correct: true },
        { text: '10.0.8.0 255.255.248.0', correct: false },
        { text: '10.0.4.0 255.255.248.0', correct: false },
        { text: '10.0.4.0 255.255.0.0', correct: false }
    ]
},
{
    id: 163,
    type: 'input',
    text: 'Заполните пробел. Используйте число. LSA типа ___ идентифицирует ASBR и предоставляет маршрут к нему.',
    correctAnswer: '4',
    caseSensitive: false
},
{
    id: 164,
    type: 'single',
    text: 'Какая команда будет использоваться, чтобы определить, были ли установлены отношения смежности с соседним маршрутизатором?',
    options: [
        { text: 'show ip protocols', correct: false },
        { text: 'show ip interface brief', correct: false },
        { text: 'show ip ospf neighbor', correct: true },
        { text: 'ping', correct: false }
    ]
},
{
    id: 165,
    type: 'single',
    text: 'Какое значение приоритета маршрутизатора по умолчанию для всех маршрутизаторов Cisco OSPF?',
    options: [
        { text: '0', correct: false },
        { text: '255', correct: false },
        { text: '1', correct: true },
        { text: '10', correct: false }
    ]
},
{
    id: 166,
    type: 'input',
    text: 'Заполните пробел. Не используйте сокращения, ответ пишите на английском языке. Сообщения LSA OSPF типа 2 генерируются только ___ маршрутизатором для объявления маршрутов в сетях множественного доступа.',
    correctAnswer: 'designated',
    caseSensitive: false
},
{
    id: 167,
    type: 'multiple',
    text: 'Какие два утверждения правильно описывают LSA OSPF типа 3? (Выберите два варианта)',
    options: [
        { text: 'LSA типа 3 известны как записи каналов маршрутизатора', correct: false },
        { text: 'LSA типа 3 известны как внешние записи LSA автономной системы', correct: false },
        { text: 'LSA типа 3 используются для обновления маршрутов между областями OSPF', correct: true },
        { text: 'LSA типа 3 генерируются без полного расчета SPF', correct: true },
        { text: 'LSA типа 3 используются для маршрутов к сетям за пределами автономной системы OSPF', correct: false }
    ]
}
];

function getImagePath(imageName) {
    if (imageName && imageName.startsWith('images/questions/')) {
        return imageName;
    }
}