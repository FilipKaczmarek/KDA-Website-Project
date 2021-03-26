const hamburgerButton = document.querySelector('.navbar-mobile__menu');
const listofElements = document.querySelector('.navbar-lists');
const listItem = [...document.querySelectorAll('.navbar-list__item')];

const navMobile = function(){
    hamburgerButton.addEventListener('click', function(){

        if(listofElements.classList.contains('navbar-lists--hidden')){
            listofElements.classList.remove('navbar-lists--hidden');
            listofElements.classList.add('navbar-lists--showed');
        } else if (listofElements.classList.contains('navbar-lists--showed')){
            listofElements.classList.remove('navbar-lists--showed');
            listofElements.classList.add('navbar-lists--hidden');
        }
    }, false);
    
    for( let i = 0; i < listItem.length; i += 1 ){
    
        listItem[i].addEventListener('click', function(){
        
            listofElements.classList.remove('navbar-lists--showed');
            listofElements.classList.add('navbar-lists--hidden');
        
        }, false)
    
    }
}

export { navMobile }