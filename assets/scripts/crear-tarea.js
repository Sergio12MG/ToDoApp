const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title-task').value;
    const description = document.getElementById('description-task').value;
    const priority = document.querySelector('[name="priority-task"]').value;
    const date = document.getElementById('date-task').value;
    const category = document.querySelector('[name="category-task"]').value;

    const task = {
        title,
        description,
        priority,
        date,
        category,
        completed: false
    };

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    form.reset();

    window.location.href = 'inicio.html';
});