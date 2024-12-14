const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const clearAllButton = document.getElementById('clearAllButton');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return alert('Please enter a task!');

    const taskItem = document.createElement('li');
    taskItem.className = 'flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow';

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.className = 'mr-3';
    taskCheckbox.addEventListener('change', () => {
        taskTextElement.classList.toggle('line-through');
        taskTextElement.classList.toggle('text-gray-400');
    });

    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;
    taskTextElement.className = 'flex-grow';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'text-red-500 hover:text-red-700';
    deleteButton.addEventListener('click', () => taskItem.remove());

    taskItem.append(taskCheckbox, taskTextElement, deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
});

clearAllButton.addEventListener('click', () => {
    taskList.innerHTML = '';
});