function sliders(slides, dir, prev, next){
    let slideIndex = 1,
        paused = false;
    let items = document.querySelectorAll(slides);
    
    function show(n){
        if (n > items.length){
            slideIndex = 1;
        } else if (n < 1){
            slideIndex = items.length;
        }

        items.forEach(item=>{
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block';
    }
    show(slideIndex);

    function change(n){
        show(slideIndex += n);
    }

    try{
        let prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', function(){
            change(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });
        
        nextBtn.addEventListener('click', function(){
            change(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch(e) {

    }

    function activateAnimation(){
        if(dir === 'vertical'){
            paused = setInterval(()=>{
                change(1);
                items[slideIndex - 1].classList.add('zoomIn');
            }, 3000);
        } else {
            paused = setInterval(()=>{
                change(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }
    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', function(){
        clearInterval(paused);
    });

    items[0].parentNode.addEventListener('mouseleave', function(){
        activateAnimation();
    });
}
export default sliders;