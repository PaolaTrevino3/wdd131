const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambutton.classList.toggle('open');
});

const year = document.querySelector('#currentyear');
const today = new Date();

year.textContent = today.getFullYear();

document.querySelector('#lastModified').textContent = 
    `Last Modification: ${document.lastModified}`;