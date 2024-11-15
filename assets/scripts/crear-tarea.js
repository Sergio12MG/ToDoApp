document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#task-form');
    const titleInput = document.querySelector('#title-task');
    const descriptionInput = document.querySelector('#description-task');
    const priorityInput = document.querySelector('#priority-task');
    const dateInput = document.querySelector('#date-task');
    const categoryInput = document.querySelector('#category-task');
    const submitButton = form.querySelector('input[type="submit"]');

    const urlParams = new URLSearchParams(window.location.search);
    const taskIndex = urlParams.get('edit');

    if (taskIndex !== null) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const task = tasks[taskIndex];

        if (task) {
            titleInput.value = task.title;
            descriptionInput.value = task.description;
            priorityInput.value = task.priority;
            dateInput.value = task.date;
            categoryInput.value = task.category;
            submitButton.value = 'Actualizar tarea';
        }
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();
        const priority = priorityInput.value;
        const date = dateInput.value;
        const category = categoryInput.value;

        if (!title || !description) {
            alert("Por favor, completa todos los campos requeridos.");
            return;
        }

        const task = { title, description, priority, date, category, completed: false };
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        if (taskIndex !== null) {
            tasks[taskIndex] = task;
        } else {
            tasks.push(task);
        }

        localStorage.setItem('tasks', JSON.stringify(tasks));
        window.location.href = 'index.html';
    });
});
