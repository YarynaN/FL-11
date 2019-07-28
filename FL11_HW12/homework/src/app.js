const listNode = document.getElementById('todoItems');
const modifyItemNode = document.getElementById('modifyItem');
const itemsListNode = document.getElementById('list');
const hiddenClass = 'hidden';

class ToDoService {
    constructor() {
        this.loadData();
    }

    createItem(item) {
        item.id = this.collection.lastId;
        item.modifiedAt = new Date();
        this.collection.lastId++;
        this.collection.data.push(item);
        this.saveData();
        return item;
    }

    updateItem(item) {
        item.modifiedAt = new Date();
        this.saveData();
    }

    deleteItem(id) {
        this.collection.data = this.getItems().filter(item => item.id !== parseInt(id));
        this.saveData();
    }

    getItems() {
        return this.collection.data.sort((a, b) => {
            if (a.isDone === b.isDone) {
                return a.isDone ? new Date(a.modifiedAt) - new Date(b.modifiedAt) : 0;
            } else {
                return a.isDone ? Infinity : -Infinity;
            }
        });
    }

    getItem(id) {
        return this.getItems().find(item => item.id === parseInt(id));
    }

    getItemByName(description) {
        return this.getItems().find(item => item.description === description);
    }

    loadData() {
        let data = localStorage.getItem('todoItems');
        this.collection = data ? JSON.parse(data) : {
            data: [],
            lastId: 1
        };
    }

    saveData() {
        localStorage.setItem('todoItems', JSON.stringify(this.collection));
    }
}

const storage = new ToDoService();

let showViewList = () => {
    listNode.classList.remove(hiddenClass);
    modifyItemNode.classList.add(hiddenClass);
};

let showModifyItem = (header, id) => {
    modifyItemNode.classList.remove(hiddenClass);
    listNode.classList.add(hiddenClass);
    if (id) {
        document.getElementById('modifyItem').setAttribute('data-id', id);
    } else {
        document.getElementById('modifyItem').removeAttribute('data-id');
    }
    document.getElementById('modifyItemHeader').innerText = header;
    document.getElementById('modifyItemInput').value = '';
};

let addNewTaskItem = () => {
    showModifyItem('Add task', null);
};

let modifyTaskItem = (id) => {
    let item = storage.getItem(id);
    if (item.isDone) {
        notify("You can't edit already done item");
        location.hash = '#';
        return;
    }
    showModifyItem('Modify item', id);
    document.getElementById('modifyItemInput').value = item.description;
};

let refreshList = () => {
    let data = storage.getItems();
    const template = document.getElementById('todoItemTemplate');

    while (itemsListNode.firstChild) {
        itemsListNode.removeChild(itemsListNode.firstChild);
    }

    data.forEach((item) => {
        let node = template.cloneNode(true);
        node.id = 'item-' + item.id;
        node.setAttribute('data-id', item.id);
        itemsListNode.appendChild(node);
        node.querySelector('input').checked = item.isDone;
        node.querySelector('a').innerText = item.description;
        node.querySelector('a').href = '#/modify/' + item.id;
    });
};

let cancelModification = () => {
    location.hash = '#';
};

let saveModifiedItem = () => {
    const description = document.getElementById('modifyItemInput').value;
    const id = document.getElementById('modifyItem').getAttribute('data-id');
    const isDone = false;

    if (description === '') {
        return;
    }

    if (storage.getItemByName(description)) {
        notify("You can't add already exist item");
        return;
    }

    if (id) {
        let item = storage.getItem(id);
        item.description = description;
        storage.updateItem(item);
    } else {
        storage.createItem({isDone: isDone, description: description});
    }

    location.hash = '#';
    refreshList();
};

let deleteItem = (element) => {
    let node = element.parentNode;
    node.remove();
    storage.deleteItem(node.getAttribute('data-id'));
};

let checkItem = (element) => {
    let node = element.parentNode;
    let checked = node.querySelector('input').checked;
    let id = node.getAttribute('data-id');
    let item = storage.getItem(id);
    item.isDone = checked;
    storage.updateItem(item);
    refreshList();
};

let notify = (message) => {
    const displayAlert = document.getElementById('errorMessage');
    const timeOut = 2000;
    document.getElementById('errorMessageText').innerText = message;
    displayAlert.classList.remove('hidden');
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (isChrome) {
        displayAlert.classList.add('chrome')
    } else {
        displayAlert.classList.add('otherBrowser')
    }
    setTimeout(() => {
        displayAlert.classList.add('hidden');
    }, timeOut);
};

let updateState = () => {
    const modifyRegexp = /^#\/modify\/(\d+)$/;
    const addRegexp = /#add/;

    if (addRegexp.test(location.hash)) {
        addNewTaskItem();
    } else if (modifyRegexp.test(location.hash)) {
        let id = modifyRegexp.exec(location.hash)[1];
        modifyTaskItem(id);
    } else {
        showViewList();
        refreshList();
    }
};

let onHashChange = () => {
    updateState();
};

window.addEventListener('hashchange', onHashChange);
updateState();