function burgerMenu(menuSelector, burgerSelector){
    let menuElem = document.querySelector(menuSelector);
    let burgerElem = document.querySelector(burgerSelector);

    menuElem.style.display  = 'none';
    burgerElem.addEventListener('click', function(){
        if(menuElem.style.display == 'none' && window.screen.availWidth < 993){
            menuElem.style.display = 'block';
        } else {
            menuElem.style.display  = 'none';
        }
    });

    window.addEventListener('resize', function(){
        if(window.screen.availWidth > 992){
            menuElem.style.display = 'none';
        }
    });
}
export default burgerMenu;