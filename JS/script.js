const body = document.querySelector('body');
const aside = document.querySelector('aside');

const elements = [body, aside]

function toggleDarkMode(element) {
    element.classList.toggle('darkMode');
}

function darkMode(elements) {
    for (let i = 0; i < elements.length; i += 1) {
        toggleDarkMode(elements[i])
    }
}