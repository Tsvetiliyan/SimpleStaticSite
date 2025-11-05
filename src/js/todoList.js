let todos = [];

function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (text === '') {
        alert('Please enter a task!');
        return;
    }
    
    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    
    todos.push(todo);
    input.value = '';
    renderTodos();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
    }
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
}

function renderTodos() {
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    
    if (todos.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">No tasks yet. Add one above!</p>';
        return;
    }
    
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        const textSpan = document.createElement('span');
        textSpan.className = 'todo-text';
        textSpan.textContent = todo.text;
        textSpan.onclick = () => toggleTodo(todo.id);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTodo(todo.id);
        
        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

function handleTodoKeyPress(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}

renderTodos();

function updateColor() {
    const color = document.getElementById('colorPicker').value;
    document.getElementById('colorDisplay').style.background = color;
    document.getElementById('colorCode').textContent = color.toUpperCase();
}

updateColor();

window.addEventListener('load', () => {
    console.log('Welcome! Website loaded successfully.');
});