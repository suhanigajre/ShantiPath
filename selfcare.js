function addTask() {
  const newTaskInput = document.getElementById("new-task");
  const taskText = newTaskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" /> ${taskText}`;
  document.getElementById("checklist").appendChild(li);

  newTaskInput.value = "";
}

function resetChecklist() {
  const checklistItems = document.querySelectorAll("#checklist input[type='checkbox']");
  checklistItems.forEach(item => {
    item.checked = false;
  });
}
