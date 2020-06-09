function scrolling(upSelector){
    let upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', function(){
        if(document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.remove('fadeIn');
            upElem.classList.add('fadeOut');
        }
    });

    //! scroll with requestAnimationFrame

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.1;

    links.forEach(link => {
        link.addEventListener('click', function(e){
            e.preventDefault();

            let widthTop = document.documentElement.scrollTop;
            let hash = this.hash;
            let toBlock = document.querySelector(hash).getBoundingClientRect().top;
            let start = null;
            
            requestAnimationFrame(step);

            function step(time){
                if(start === null){
                    start = time;
                }

                let progress = time- start;
                let r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));
                document.documentElement.scrollTo(0, r);

                if(r != widthTop + toBlock){
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });

    //! scroll with js native 
    
    // let element = document.documentElement,
    //     body = document.body;

    // function calcScroll(){
    //     upElem.addEventListener('click', function(e){
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if(this.hash !== ''){
    //             e.preventDefault();
    //             let hashElement = document.querySelector(this.hash),
    //                 hashElementTop = 0;

    //             while(hashElement.offsetParent){
    //                 hashElementTop += hashElement.offsetTop;
    //                 hashElement = hashElement.offsetParent;
    //             }

    //             hashElementTop = Math.round(hashElementTop);
    //             smoothScroll(scrollTop, hashElementTop, this.hash);
    //         }
    //     });
    // }

    // function smoothScroll(from, to, hash){
    //     let timeInterval = 1;
    //     let prevScrollTop;
    //     let speed;

    //     if(to > from){
    //         speed = 30;
    //     } else {
    //         speed = -30;
    //     }

    //     let move = setInterval(function () {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if (
    //             prevScrollTop === scrollTop ||
    //             (to > from && scrollTop >= to) || 
    //             (to < from && scrollTop <= to)
    //         ) {
    //             clearInterval(move);
    //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //         } else {
    //             body.scrollTop += speed;
    //             element.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);
    // }
    // calcScroll();
}
export default scrolling; 