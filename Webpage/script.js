function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText) {
      const taskList = document.getElementById("taskList");
  
      const newTask = document.createElement("li");
      newTask.textContent = taskText;
  
      newTask.onclick = function () {
        this.classList.toggle("completed");
      };
  
      taskList.appendChild(newTask);
      taskInput.value = "";
    }
  }
  