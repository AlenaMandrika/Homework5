var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
    }
    todoList()
}, false);


var but = document.getElementById('myButton');
but.addEventListener('click', newElement);

function newElement(value) {
    var li = document.createElement('li');
    var inputValue = document.getElementById('sample3').value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        alert('введіть текст')
    } else {
        document.getElementById('board').appendChild(li)
    }
    document.getElementById('sample3').value = '';

    var myBtn = document.createElement('button');
    var icon = document.createElement('i');
    myBtn.className = 'clearBtn';
    icon.className = 'material-icons';
    icon.innerText = 'highlight_off';
    myBtn.appendChild(icon);
    li.appendChild(myBtn);

    var offButton = document.getElementsByClassName('clearBtn');
    for (var i = 0; i < offButton.length; i++) {
        offButton[i].addEventListener('click', function (ev) {
            var div = this.parentElement;
            div.remove(li);
        }, false);
    }
    todoList()
};

document.getElementById('btn-all').addEventListener('click', function (ev) {
    var li = document.querySelectorAll('li');
    for (var i = 0; i < li.length; i++) {
        if (li[i].className.indexOf('hide') !== -1) {
            li[i].className = li[i].className.replace('hide', '')
        }
    }
}, false);

document.getElementById('btn-active').addEventListener('click', function (ev) {
    var li = document.querySelectorAll('li');

    for (var i = 0; i < li.length; i++) {
        if (li[i].className.indexOf('checked') !== -1 && li[i].className.indexOf('hide') === -1) {
            li[i].className = li[i].className + ' hide'
        }
    }

}, false);

document.getElementById('btn-clear').addEventListener('click', function (ev) {
    var li = document.querySelectorAll('li');
    var board = document.getElementById('board');
    for (var i = 0; i < li.length; i++) {
        if (li[i] !== -1) {
            board.removeChild(li[i])
        }
    }
    todoList();

}, false);

function todoList() {
    var done = 0;
    var inprogress = 0;
    var todos = document.querySelectorAll('li');

    for (i = 0; i < todos.length; i++) {
        if (todos[i].className.indexOf('checked') !== -1) {
            done += 1;
        } else {
            inprogress += 1;
        }
    }
    document.getElementById('all').value = todos.length;
    document.getElementById('done').value = done;
    document.getElementById('undone').value = inprogress;
}

document.getElementById('box-button').addEventListener('click', function (e) {
    document.getElementById('box-button').querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

}, false);



