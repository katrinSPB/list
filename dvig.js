const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы

  const todoText = todoInput.value.trim(); // Получаем текст из поля ввода
  if (todoText !== '') {
    const todoItem = createTodoItem(todoText);
    todoList.appendChild(todoItem);
    todoInput.value = ''; // Очищаем поле ввода после добавления задачи
  }
});

function createTodoItem(text) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const label = document.createElement('label')
  const button = document.createElement('button');

  checkbox.type = 'checkbox';
  label.textContent = text;
  button.textContent = 'Удалить';

  checkbox.addEventListener('change', function() {
    if (this.checked) {
      label.style.textDecoration = 'line-through';
    } else {
      label.style.textDecoration = 'none';
    }
  });

  button.addEventListener('click', function() {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(button);

  return li;
}