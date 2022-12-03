const body = document.querySelector('body');
const aside = document.querySelector('aside');
const textArea = document.querySelector('textarea');
const noteButtons = document.querySelector('.buttonsLow');
const shadyButton = document.querySelector('#darkmode');
const noteList = document.querySelector('aside > ul');
//const wellLitButton = document.querySelector('body.darkMode main .buttonsUp button#darkmode');

const darkmodeElements = [body, aside];
const noteElements = [textArea, noteButtons];

let notesArray = [];

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