document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const resetButton = document.querySelector(".reset-btn");
    const taskNameInput = document.getElementById("task-name");
    const priorityInput = document.getElementById("priority");
    const deadlineInput = document.getElementById("deadline");
    const notesInput = document.getElementById("notes");
    const taskTable = document.querySelector(".task-table");
  

    function addTask() {
      const taskName = taskNameInput.value;
      const priority = priorityInput.value;
      const deadline = deadlineInput.value;
      const notes = notesInput.value;
  
      if (taskName === "" || deadline === "") {
        alert("Please fill in all the required fields.");
        return;
      }
  

      const newRow = document.createElement("tr");
  
      newRow.innerHTML = `
        <td>${taskName}</td>
        <td>${priority}</td>
        <td>${deadline}</td>
        <td>${notes}</td>
        <td><button class="delete-btn">Delete</button></td>
      `;
  
 
      taskTable.appendChild(newRow);
  

      const deleteButton = newRow.querySelector(".delete-btn");
      deleteButton.addEventListener("click", function () {
        taskTable.deleteRow(newRow.rowIndex);
      });
  
      resetForm();
    }
  

    function resetForm() {
      taskNameInput.value = "";
      priorityInput.value = "high";
      deadlineInput.value = "";
      notesInput.value = "";
    }
  

    addButton.addEventListener("click", function (e) {
      e.preventDefault(); 
      addTask();
    });
  

    resetButton.addEventListener("click", function () {
      resetForm();
    });
  });
  