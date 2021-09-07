let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

let logoImage = document.querySelector('.logo a img');
logoImage.src = './assets/logo-lightmode.png';

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode','enabled');
    darkModeToggle.classList.remove('fa-moon');
    darkModeToggle.classList.add('fa-sun');
    logoImage.src = './assets/logo-darkmode.png';
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem("darkMode",null);
    darkModeToggle.classList.remove('fa-sun');
    darkModeToggle.classList.add('fa-moon');
    logoImage.src = './assets/logo-lightmode.png';
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    if (darkModeToggle.classList[1] == 'fa-sun') {

    } else {

    }
})
