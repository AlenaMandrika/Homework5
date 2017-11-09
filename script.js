var defaultActionKeyHide = true;
var myList = document.getElementsByTagName('li');
for (var i = 0; i < myList.length; i++) {
    var myBtn = document.createElement('button');
    var icon = document.createElement('i');
    myBtn.className = 'clearBtn';
    icon.className = 'material-icons';
    icon.innerText = 'highlight_off';
    myBtn.appendChild(icon);
    myList[i].appendChild(myBtn);
}

var offButton = document.getElementsByClassName('clearBtn');
for (var i = 0; i < offButton.length; i++) {
    offButton[i].addEventListener('click', function (ev) {
        var li = document.querySelectorAll('li');
        var board = document.getElementById('board');
        for (var i = 0; i < li.length; i++) {
            if (li[i].className.indexOf('checked') !== -1) {
                board.removeChild(li[i])
            }
        }
    }, false);
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
    }
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
            div.style.display = "none";
        }, false);
    }
}

document.getElementById('btn-all').addEventListener('click', function (ev) {
    var li = document.querySelectorAll('li');
    for (var i = 0; i < li.length; i++) {
        li[i].classList.add('checked');
    }
}, false);

document.getElementById('btn-active').addEventListener('click', function (ev) {
    var li = document.querySelectorAll('li');
    if (defaultActionKeyHide) {
        defaultActionKeyHide = !defaultActionKeyHide;

        for (var i = 0; i < li.length; i++) {
            if (li[i].className.indexOf('checked') === -1 && li[i].className.indexOf('hide') === -1) {
                li[i].className = li[i].className + ' hide'
            }
        }
    } else {
        defaultActionKeyHide = !defaultActionKeyHide;

        for (var i = 0; i < li.length; i++) {
            if (li[i].className.indexOf('checked') === -1 && li[i].className.indexOf('hide') !== -1) {
                li[i].className = li[i].className.replace('hide', '')
            }
        }
    }
}, false);

document.getElementById('btn-clear').addEventListener('click', function (ev) {
    var li = document.querySelectorAll('li');
    var board = document.getElementById('board');
    for (var i = 0; i < li.length; i++) {
        if (li[i].className.indexOf('checked') !== -1) {
            board.removeChild(li[i])
        }
    }
}, false);
