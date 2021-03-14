const dot = document.querySelectorAll('.slider');


dot.forEach((element) => {

    element.addEventListener('click', function (e) {
        for (let i = 0; i < dot.length; i++) {
            dot[i].classList.remove('slider--clicked');
            dot[i].classList.add('slider--unclicked');
        }

        this.classList.add('slider--clicked');
    })

})

// Smooth scroll - NOT FINISHED 
const dotLinks = document.querySelectorAll('.slider-link');
const sectionIDs = ['#header-section', '#aboutus-section', '#testimonials-section', '#ourwork-section', '#contactus-section'];
const [header, aboutus, testimonials, ourwork, contactus] = sectionIDs;

function smoothScroll(target, duration) {

    const mainTarget = document.querySelector(target);
    const targetTopPosition = mainTarget.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetTopPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
            let timeElapsed = currentTime - startTime;
            let run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) {
                requestAnimationFrame(animation)
            }
        }
    }

    // easeInOutCubic downloaded from gizma.com/easing
    const easeInOutCubic = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    };

    requestAnimationFrame(animation);
}

dotLinks.forEach((e) => {

    e.addEventListener('click', function () {

        for (let i = 0; i < sectionIDs.length; i++) {

            smoothScroll(sectionIDs[i], 4500)

        }

    })

})