let todoList = [
    {task: "Купить молоко", done: false, deadline: "2024-02-23"},
    {task: "Заплатить за интернет", done: true, deadline: "2024-02-20"},
    {task: "Позвонить маме", done: false, deadline: "2024-02-22"},
    {task: "Почитать книгу", done: false, deadline: "2024-02-28"},
    {task: "Сделать домашнее задание", done: true, deadline: "2024-02-21"},
    {task: "Посмотреть фильм", done: false, deadline: "2024-02-24"},
    {task: "Помыть посуду", done: true, deadline: "2024-02-22"},
    {task: "Погулять с собакой", done: false, deadline: "2024-02-23"},
    {task: "Заказать пиццу", done: false, deadline: "2024-02-25"},
    {task: "Посетить врача", done: true, deadline: "2024-02-20"},
    {task: "Починить компьютер", done: false, deadline: "2024-02-26"},
    {task: "Подарить цветы подруге", done: true, deadline: "2024-02-21"},
    {task: "Поиграть в видеоигры", done: false, deadline: "2024-02-27"},
    {task: "Послать резюме", done: true, deadline: "2024-02-20"},
    {task: "Поехать в отпуск", done: false, deadline: "2024-02-29"},
        
  ];

const listAllElements = document.querySelector('.list');
const inputElement = document.querySelector('.task-input');
const createButton = document.querySelector('.btn');
const showAllButton = document.querySelector('#all');
const showDoneButton = document.querySelector('#completed');
const showUndoneButton = document.querySelector('#not_completed');

const updateList = (array) => {                                     //параметром (array) является наш массив
    listAllElements.innerHTML = '';                                 //стирает весь список который уже есть (если он есть)
    
    array.sort((a, b) => a.done - b.done);                          //сортирует список что-бы выполненные задачи группировались снизу
    
    array.forEach(element => {                         //и содержимое цикла отвечает за создание списка с нуля
        const newListItem = document.createElement('li');           //создаётся ячейка (элемент 'li')
        newListItem.classList.add('list-item');                     //добавляется ячейке (элементу 'li') класс (list-item) 
        if(element.done){                                           //если 'done' === true
            newListItem.classList.add('list-item_done');            //присваеваем ячейке (элементу 'li') класс ('list-item_done')
        }
        newListItem.textContent = element.task;                     //добавляем текс таска из массива
        newListItem.addEventListener('click', listItemClickHandler)//включаем функцию зачеркивания тасков. этот лисенер должен находиться в цикле, чтобы применять свои строки для каждого элемента массива
        listAllElements.append(...newArray);                        //добавляем новый элемент в лист
        });
}

const createButtonHandler = () => {
    const newEntry = {task: inputElement.value, done: false};
    todoList.push(newEntry);
    inputElement.value = '';                                        //обнуляет поле ввода после нажатия кнопки создать
    updateList(todoList);
    // console.log(todoList);
}

const listItemClickHandler = (event) => {                           //отвечает за зачеркивание тасков списка и обратно
    const taskText = event.target.textContent;                      //переменная taskText будет содержать текст таска на который нажали
    const task = todoList.find(task => task.task === taskText);     //переменная task будет содержать функцию find(), которая ищет первый элемент с заданным текстом
    task.done = !task.done;                                         //было true становиться false; было false становиться true
    updateList(todoList);                                           //обновление списка
}

createButton.addEventListener('click', createButtonHandler);        
showAllButton.addEventListener('click', () => updateList(todoList));                                //лисенер получает функцию update list для обнуления и создания списка с нуля
showDoneButton.addEventListener('click', () => updateList(todoList.filter(task => task.done)));     //лисенер получает снова созданный список и сразу фильтрует его, чтобы показать только таски где 'done' === true
showUndoneButton.addEventListener('click', () => updateList(todoList.filter(task => !task.done)));  //лисенер получает снова созданный список и сразу фильтрует его, чтобы показать только таски где 'done' === !true

updateList(todoList);