let maxCheck = () => {
    let liCount = document.getElementById('list').childElementCount - 1;
    let disabledLink = document.getElementById('addItem');
    let disabledInput = document.querySelector('input');
    let message = document.querySelector('.heading p');
    const maxItemsPerList = 10;
    if(liCount < maxItemsPerList) {
        disabledInput.disabled = false;
        message.classList.add('hidden');
    } else {
        disabledLink.classList.add('not-active');
        disabledInput.disabled = true;
        message.classList.remove('hidden');
    }
};

let onInputChange = () => {
    let inputText = document.getElementById('todoInput').value;
    let disabledLink = document.getElementById('addItem');
        if(inputText !== ''){
            disabledLink.classList.remove('not-active');
        } else {
            disabledLink.classList.add('not-active');
        }
};

let onAddClick = () => {
    let liCount = document.getElementById('list').childElementCount - 1;
    let template = document.getElementById('itemTemplate');
    let newListItem = template.cloneNode(true);
    newListItem.id = 'Item-'+liCount;
    newListItem.classList.remove('hidden');
    newListItem.classList.add('todoItem');
    newListItem.classList.add('viewMode');
    const todoText = document.getElementById('todoInput').value;
    let span = newListItem.querySelector('span.todoItemText');
    span.innerText = todoText;
    document.getElementById('todoInput').value = '';
    onInputChange();
    document.getElementById('list').appendChild(newListItem);
    maxCheck();
};

document.getElementById('addItem').addEventListener('click', onAddClick);

document.getElementById('todoInput').addEventListener('input', onInputChange);

let markedItemClick = (element) => {
    element.disabled = true;
};

let onEditAction = (e) => {
    let node = e.parentNode.parentNode;
    node.classList.remove('viewMode');
    node.classList.add('editMode');
    let span = node.querySelector('span.todoItemText');
    node.querySelector('input.todoTextInput').value = span.innerText;
};

let onDeleteClick = (e) => {
    let node = e.parentNode;
    document.getElementById('list').removeChild(node);
    onInputChange();
    maxCheck();
};

let onSaveAction = (e) => {
    let node = e.parentNode.parentNode;
    node.classList.remove('editMode');
    node.classList.add('viewMode');
    let input = node.querySelector('input.todoTextInput');
    node.querySelector('span.todoItemText').innerText = input.value;
};

let onDrop = (element, e) => {
    const id = e.dataTransfer.getData('elementId');
    const source = document.getElementById(id);
    document.getElementById('list').insertBefore(source, element);
};

let onDrag = (e) => {
    e.dataTransfer.setData('elementId', e.target.id);
};

let onAllowDrop = (e) => {
    e.preventDefault();
};