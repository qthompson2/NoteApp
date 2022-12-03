const body = document.querySelector('body');
const aside = document.querySelector('aside');
const textArea = document.querySelector('textarea');
const noteButtons = document.querySelector('.buttonsLow');

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
}

function cancelNote(elements) {
    for (let i = 0; i < elements.length; i += 1) {
        elements[i].classList.add('hidden');
    }
}