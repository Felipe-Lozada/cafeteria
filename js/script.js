window.addEventListener('scroll', (ev) => {
    console.log("scrolled");
    const fix1 = document.getElementById('mensaje');
    const nav = document.getElementById('');

    fix1.innerHTML = "scrolled";
    const scrolled = window.scrollY;
    fix1.innerHTML = "scrolled: " + scrolled;
    console.log(scrolled);
    console.log()

});

//const fix1 = document.getElementById('icono2');
//fix1.innerHTML = 'Top' + window.scrollY;
//console.log('Top: ' + event.scrollY);


/**
 * 
             <picture class="col col-md-6 icono-izquierda" id="icono1">
                <img src="" alt="" class="1">
            </picture>
            <picture class="col col-md-6 icono-derecha" id="icono2">
                <img src="assets/ico/menu.png" alt="" class="i2">
                <img src="assets/ico/menu.png" alt="" class="i3">
            </picture>
*/