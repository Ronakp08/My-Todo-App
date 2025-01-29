function toDo() {
  const addButton = document.getElementById("add-task-btn");
  const resetButton = document.getElementById("reset-btn");

  const todoTable = document.querySelector(".task-table"); 


  function addTask(e) {
      e.preventDefault();  

      const taskTitle = document.getElementById("task-name").value;
      const priorityInput = document.getElementById("priority").value;
      const deadlineInput = document.getElementById("deadline").value;
      const commentInput = document.getElementById("comment").value;

      if (taskTitle === "" || deadlineInput === "" || commentInput === "") {
          alert("Please fill all details...!");
          return;
      }

     
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
          <td>${taskTitle}</td>
          <td>${priorityInput}</td>
          <td>${deadlineInput}</td>
          <td>${commentInput}</td>
          <td><button class="delete-btn">Delete</button></td>
      `;

   
      todoTable.appendChild(newRow);
      resetForm(); 
  }


  function resetForm() {
      document.getElementById("task-name").value = "";
      document.getElementById("priority").value = "high"; 
      document.getElementById("deadline").value = "";
      document.getElementById("comment").value = "";
  }


  addButton.addEventListener("click", function (e) {
      addTask(e);  
  });


  resetButton.addEventListener("click", function () {
      resetForm();
  });
}


document.addEventListener("DOMContentLoaded", function () {
  toDo();
});
