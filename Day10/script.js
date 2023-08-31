const $$addTaskButton = document.getElementById("addTask");
const $$taskList = document.getElementById("taskList");
const $$newTask = document.getElementById("newTask");

$$addTaskButton.addEventListener("click", () => {
    const taskText = $$newTask.value;

    if (taskText.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.className = "task";
        taskItem.innerHTML = `
            <div class="task-container">
                <span class="task">${taskText}</span>
                <div class="buttons">
                    <button class="completeButton"><i class="fas fa-check"></i></button>
                    <button class="editButton"><i class="fas fa-edit"></i></button>
                    <button class="eraseButton"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
        `;

        $$taskList.appendChild(taskItem);
        $$newTask.value = "";

        const completeButton = taskItem.querySelector('.completeButton');
        completeButton.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        });

        const editButton = taskItem.querySelector('.editButton');
        editButton.addEventListener("click", () => {
            const newTaskText = prompt('Editar tarea', taskText);
            if (newTaskText !== null && newTaskText.trim() !== "") {
                taskItem.querySelector('span').textContent = newTaskText;
            }
        });

        const deleteButton = taskItem.querySelector('.eraseButton');
        deleteButton.addEventListener("click", () => {
            $$taskList.removeChild(taskItem);
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const dayOfWeek = new Date().getDay(); // 0 (Domingo) a 6 (Sábado)
    const body = document.body;

    const backgrounds = [
        "sunday.jpg",
        "monday.jpg",
        "tuesday.jpg",
        "wednesday.jpg",
        "thursday.jpg",
        "friday.jpg",
        "saturday.jpg"
    ];

    body.style.backgroundImage = `url(./assets/${backgrounds[dayOfWeek]})`;
});

