
/* -------------- Elements -------------- */ 
const input = document.querySelector(".todo-input");
const btn = document.querySelector(".todo-btn");
const list = document.querySelector(".todo-list");


/* -------------- Functions -------------- */ 

// Add a new item 
function addNewItem(input) {
    // Create the DIV 
    const todo_div = document.createElement("div");
    todo_div.classList.add("todo");

    // Create the LI 
    const todo_item = document.createElement("li");
    todo_item.innerHTML = input.value;
    todo_item.classList.add("todo-item");
    todo_div.appendChild(todo_item);

    // Create the completed btn 
    const completed_btn = document.createElement('button');
    completed_btn.innerHTML = '<i class="fas fa-check"></i>';
    completed_btn.classList.add("complete-btn");
    todo_div.appendChild(completed_btn);

     // Create the delete btn 
     const delete_btn = document.createElement('button');
     delete_btn.innerHTML = '<i class="fas fa-trash"></i>';
     delete_btn.classList.add("delete-btn");
     todo_div.appendChild(delete_btn);

     // Add to the list 
     list.appendChild(todo_div);
     input.value = "";

}

// Delete or check an item 
function deleteOrCheck (e) {
    const item = e.target; 
    // Delete an item 
    if (item.classList[0] === 'delete-btn') {
        item.parentElement.remove();
    }

    // Check an item 
    if (item.classList[0] === 'complete-btn') {
        item.parentElement.classList.toggle("completed");
    }
    
}

/* -------------- Event listeners -------------- */ 

list.addEventListener('click', deleteOrCheck);

btn.addEventListener("click", (e) => {
    e.preventDefault(); 
    addNewItem(input);
})