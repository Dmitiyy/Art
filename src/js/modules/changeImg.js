function changeImg(){
    let blocks = document.querySelectorAll('.sizes-block');
    let images = document.querySelectorAll('.sizes-block img');
    
    function showImg(){
        blocks.forEach((item, i) => {
            item.addEventListener('mouseover', function(){
                images[i].src = `assets/img/sizes-${i + 1}-1.png`;
                this.querySelectorAll('p').forEach(p => {
                    p.style.display = 'none';
                });
                document.querySelector('.sizes-hit').style.display = 'block';
            });
        });
        
    }
    showImg();

    function hideImg(){
        blocks.forEach((item, i) => {
            item.addEventListener('mouseout', function(){
                images[i].src = `assets/img/sizes-${i + 1}.png`;
                this.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
                    p.style.display = 'block';
                });
            });
        });
    }
    hideImg();
}
export default changeImg;