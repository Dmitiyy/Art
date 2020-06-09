function modals(){
    let modalWindow = document.querySelector('.popup-design');
    let btnModalOpen = document.querySelectorAll('.btn_open');
    let btnModalClose = document.querySelectorAll('.popup-close');
    let phoneLinkBtn = document.querySelectorAll('.button-consultation');
    let imgGift = document.querySelector('.fixed-gift');
    let btnPressed = false;
    
    function modal(destroy = false){
        let scroll = calcScroll();

        btnModalOpen.forEach(item=>{
            item.addEventListener('click', function(e){
                if(e.target){
                    e.preventDefault();
                }
                btnPressed = true;
                document.body.style.overflow = 'hidden';
                modalWindow.style.display = 'block';
                document.body.style.marginRight = `${scroll}px`;
                modalWindow.classList.add('animated', 'fadeIn');
                imgGift.style.marginRight = `${scroll}px`;
            });
        });

        btnModalClose.forEach(item=>{
            item.addEventListener('click', function(){
                document.body.style.overflow = '';
                modalWindow.style.display = 'none';
                document.body.style.marginRight = `0px`;
                document.querySelector('.popup-gift').style.display = 'none';
                document.querySelector('.popup-consultation').style.display = 'none';
                imgGift.style.marginRight = `0px`;
            });
        });

        imgGift.addEventListener('click', function(e){
            if(e.target){
                e.preventDefault();
            }
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            document.querySelector('.popup-gift').style.display = 'block';
            document.querySelector('.popup-gift').classList.add('animated', 'fadeIn');
            destroy = true;
            if(destroy){
                this.style.display = 'none'; 
            }
        });

        document.querySelector('.popup-gift').addEventListener('click', function(e){
            if(e.target == this){
                document.body.style.overflow = '';
                this.style.display = 'none';
                document.body.style.marginRight = `0px`;
            }
        });

        modalWindow.addEventListener('click', function(e){
            if(e.target === this){
                document.body.style.overflow = '';
                modalWindow.style.display = 'none';
                document.body.style.marginRight = `0px`;
                imgGift.style.marginRight = `0px`;
            }
        });

        phoneLinkBtn.forEach(item => {
            item.addEventListener('click', function(e){
                if(e.target){
                    e.preventDefault();
                }
                btnPressed = true;
                document.body.style.overflow = 'hidden';
                document.querySelector('.popup-consultation').style.display = 'block';
                document.body.style.marginRight = `${scroll}px`;
                imgGift.style.marginRight = `${scroll}px`;
                document.querySelector('.popup-consultation').classList.add('animated', 'fadeIn');
            });
        });

        document.querySelector('.popup-consultation').addEventListener('click', function(e){
            if(e.target == this){
                document.body.style.overflow = '';
                document.querySelector('.popup-consultation').style.display = 'none';
                document.body.style.marginRight = `0px`;
                imgGift.style.marginRight = `0px`;
            }   
        });

        setTimeout(()=>{
            function replation(){
                let display;
                document.querySelectorAll('[data-modal]').forEach(item=>{
                    if(getComputedStyle(item).display !== 'none'){
                        display = 'block';
                    }
                });
                if(!display){
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scroll}px`;
                    imgGift.style.marginRight = `${scroll}px`;
                    document.querySelector('.popup-consultation').style.display = 'block';
                    document.querySelector('.popup-consultation').classList.add('animated', 'fadeIn');
                }
            }
            replation(); 
        }, 60000);

        function calcScroll(){
            let div = document.createElement('div');
            
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';

            document.body.appendChild(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
            return scrollWidth;
        }

        function openByScroll(){
            window.addEventListener('scroll', function(){
                if(!btnPressed && 
                (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)){
                    document.querySelector('.fixed-gift').click();
                }
            });
        }
        openByScroll();
    }
    modal();
}
export default modals;