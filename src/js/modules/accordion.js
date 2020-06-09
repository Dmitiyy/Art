function occo(triggersSelector){
    let btns = document.querySelectorAll(triggersSelector);
    let blocks = document.querySelectorAll('.accordion-block');

    function showBlocks(n){
        blocks[n].classList.toggle('active-content');
        blocks[n].style.maxHeight = blocks[n].scrollHeight + 85 + 'px';
    }

    function hideBlocks(){
        blocks.forEach(item => {
            item.classList.remove('active-content');
            item.style.maxHeight = null;
        });
    }

    btns.forEach((btn, i) => {
        btn.addEventListener('click', function(e){ 
            if(this.nextElementSibling.style.maxHeight){
                this.nextElementSibling.style.maxHeight = null;
                this.nextElementSibling.classList.remove('active-content');
            } else {
                hideBlocks();
                showBlocks(i);
            }
        });
    });
}
export default occo;