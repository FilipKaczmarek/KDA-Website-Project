const dotLink = document.querySelectorAll('slider-link');
const dot = document.querySelectorAll('.slider');


dot.forEach( (element) => {

    element.addEventListener('click', function(e){
        for(let i = 0; i < dot.length; i++){
            dot[i].classList.remove('slider--clicked');
            dot[i].classList.add('slider--unclicked');
        }

        this.classList.add('slider--clicked');
    } )

})

