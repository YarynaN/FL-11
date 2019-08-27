const listNode = document.getElementById('userList');
const modifyItemNode = document.getElementById('modifyItem');
const itemsListNode = document.getElementById('list');
const postsNode = document.getElementById('userPosts');
const hiddenClass = 'hidden';

class JSONPlaceholderService {
    async updateItem(item) {
        return await fetch(`https://jsonplaceholder.typicode.com/users/${item.id}`, {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    }

    async deleteUser(id) {
        return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    }

    async getUsers() {
        return await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json());
    }

    async getPosts(id) {
        return await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => response.json());
    }

    async getComments(id) {
        return await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => response.json());
    }

    async getUser(id) {
        return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json());
    }
}

const storage = new JSONPlaceholderService();

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
    loadPosts(id);
};

let modifyUser = async (id) => {
    let item = await storage.getUser(id);
    showModifyItem('Modify item', id);
    document.getElementById('modifyItemInput').value = item.name;
};

let refreshList = async () => {
    let data = await storage.getUsers();
    const template = document.getElementById('userTemplate');

    while (itemsListNode.firstChild) {
        itemsListNode.removeChild(itemsListNode.firstChild);
    }

    data.forEach((item) => {
        let node = template.cloneNode(true);
        node.id = 'item-' + item.id;
        node.setAttribute('data-id', item.id);
        itemsListNode.appendChild(node);
        node.querySelector('a').innerText = item.name;
        node.querySelector('a').href = '#/modify/' + item.id;
    });
};

let cancelModification = () => {
    location.hash = '#';
};

let saveUser = async () => {
    const name = document.getElementById('modifyItemInput').value;
    const id = document.getElementById('modifyItem').getAttribute('data-id');

    if (name === '') {
        return;
    }

    if (id) {
        let item = await storage.getUser(id);
        item.name = name;
        await storage.updateItem(item);
    }
    location.hash = '#';
};

let deleteUser = async (element) => {
    let node = element.parentNode;
    await storage.deleteUser(node.getAttribute('data-id'));
    await refreshList();
};

let updateState = () => {
    const modifyRegexp = /^#\/modify\/(\d+)$/;

    if (modifyRegexp.test(location.hash)) {
        let id = modifyRegexp.exec(location.hash)[1];
        modifyUser(id);
    } else {
        showViewList();
        refreshList();
    }
};

let loadPosts = (id) => {
    const template = document.getElementById('postsTemplate');

    while (postsNode.firstChild) {
        postsNode.removeChild(postsNode.firstChild);
    }
    storage.getPosts(id)
        .then(posts => {
            posts.forEach((item) => {
                let node = template.cloneNode(true);
                postsNode.appendChild(node);
                node.querySelector('.postTitle').innerText = item.title;
                node.querySelector('.postBody').innerText = item.body;
                node.classList.remove(hiddenClass);
                loadComments(node, item.id);
            });
        });
};

let loadComments = (postNode, postId) => {
    const commentsNode = postNode.querySelector('.userComments');
    const template = document.getElementById('commentTemplate');

    storage.getComments(postId)
        .then(comments => {
            comments.forEach((item) => {
                let node = template.cloneNode(true);
                commentsNode.appendChild(node);
                node.querySelector('.commentName').innerText = item.name;
                node.querySelector('.commentEmail').innerText = item.email;
                node.querySelector('.commentBody').innerText = item.body;
                node.classList.remove(hiddenClass);
            });
        });
};

let onHashChange = () => {
    updateState();
};

window.addEventListener('hashchange', onHashChange);
updateState();