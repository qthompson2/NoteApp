const body = document.querySelector('body');
const aside = document.querySelector('aside');
const asideUl = document.querySelector('aside > ul');
const textArea = document.querySelector('textarea');
const noteButtons = document.querySelector('.buttonsLow');
const shadyButton = document.querySelector('#darkmode');
const noteList = document.querySelector('aside > ul');
const darkmodeElements = [body, aside];
const noteElements = [textArea, noteButtons];

let notesArray = [];

asideUl.addEventListener('click', listClick);

function toggleDarkMode(element) {
    element.classList.toggle('darkMode');
}

function darkMode(elements) {
    for (let i = 0; i < elements.length; i += 1) {
        toggleDarkMode(elements[i]);
    }
    if (shadyButton.textContent == 'Dark Mode') {
        shadyButton.textContent = 'Light Mode';
    } else if (shadyButton.textContent == 'Light Mode'){
        shadyButton.textContent = 'Dark Mode';
    }
}

function cancelNote(elements) {
    for (let i = 0; i < elements.length; i += 1) {
        elements[i].classList.add('hidden');
    }
}

function newNote(elements) {
    for (let i = 0; i < elements.length; i += 1) {
        elements[i].classList.remove('hidden');
    }
}

function saveNote() {
    let title = prompt('Enter note title.');
    notesArray.push({'title':title, 'content':textArea.value});
    let newListItem = document.createElement('li');
    newListItem.textContent = title;
    noteList.append(newListItem);
}

function retrieveNote(title) {
    for (let i = 0; i < notesArray.length; i += 1) {
        if (notesArray[i]['title'] === title) {
            return notesArray[i]['content'];
        }
    }
}

function listClick(e) {
    textArea.value = retrieveNote(e.target.innerText);
}