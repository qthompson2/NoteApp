const a = document.querySelector('body');
const b = document.querySelector('aside');

function toggleDarkMode(element) {
    element.classList.toggle('darkMode');
}

console.log(a, b);

toggleDarkMode(a);
toggleDarkMode(b);