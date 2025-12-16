const examQuestionsData = [
{
    id: 1001,
    type: 'multiple',
    text: 'Какие две команды можно использовать для включения защиты BPDU на коммутаторе? (Выберите два варианта)',
    options: [
        { text: 'S1(config)# spanning-tree bpduguard default', correct: false },
        { text: 'S1(config-if)# enable spanning-tree bpduguard', correct: false },
        { text: 'S1(config)# spanning-tree portfast bpduguard default', correct: true },
        { text: 'S1(config-if)# spanning-tree portfast bpduguard', correct: false },
        { text: 'S1(config-if)# spanning-tree bpduguard enable', correct: true }
    ]
},
{
    id: 1002,
    type: 'multiple',
    text: 'Какие три метода можно использовать для защиты от атак на VLAN? (Выберите три варианта)',
    options: [
        { text: 'Включите защиту источника', correct: false },
        { text: 'Включить защиту BPDU', correct: false },
        { text: 'Отключите DTP', correct: true },
        { text: 'Включите транк вручную', correct: true },
        { text: 'Установите для Native VLAN неиспользуемую VLAN', correct: true },
        { text: 'Используйте частные VLAN', correct: false }
    ]
},
{
    id: 1003,
    type: 'multiple',
    text: 'Посмотрите на рисунок. Какие два утверждения верны? (Выберите два варианта)',
    image: 'images/past_years/1003.jpg',
    options: [
        { text: 'Таблица маршрутизации содержит два маршрута внутри области', correct: false },
        { text: 'Таблица маршрутизации содержит маршруты из нескольких областей', correct: true },
        { text: 'Для достижения сети 192.168.1.0 трафик будет выходить через интерфейс Serial0/0/0', correct: true },
        { text: 'Запись для 172.16.200.1 представляет loopback интерфейс', correct: false },
        { text: 'Для достижения сети 172.16.2.0 трафик будет проходить через интерфейс GigabitEthernet0/0', correct: false }
    ]
},
];
