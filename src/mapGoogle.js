const mapContainer = document.querySelector('.contactus-map');

const createMap = function (){

    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.761971740738!2d21.011968051719162!3d52.24770697966417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc661b455407%3A0x55195cd6911f19f2!2splac%20Zamkowy%204%2C%2003-401%20Warszawa!5e0!3m2!1spl!2spl!4v1616782612181!5m2!1spl!2spl';
    iframe.classList.add('contactus-map__style');
    iframe.setAttribute('style', 'border:0;');
    iframe.setAttribute('loading', 'eager');
    iframe.style.width = "100%";

    return mapContainer.appendChild(iframe)

}

export {createMap}