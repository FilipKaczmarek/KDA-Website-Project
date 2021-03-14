const hamburgerButton = document.querySelector('.navbar-mobile__menu');
const listofElements = document.querySelector('.navbar-lists');

hamburgerButton.addEventListener('click', function(){

    if(listofElements.classList.contains('navbar-lists--hidden')){
        listofElements.classList.remove('navbar-lists--hidden');
        listofElements.classList.add('navbar-lists--showed');
    } else if (listofElements.classList.contains('navbar-lists--showed')){
        listofElements.classList.remove('navbar-lists--showed');
        listofElements.classList.add('navbar-lists--hidden');
    }

}, false)