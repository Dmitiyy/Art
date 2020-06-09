function filter(){
    let menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnGirl = menu.querySelector('.girl'),
        btnGuy = menu.querySelector('.guy'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGranddad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no');

    function typeFilter(markType){
        markAll.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'zoomIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'zoomIn');

        if(markType){
            markType.forEach(item => {
                item.style.display = 'block';
                item.classList.add('animated', 'zoomIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'zoomIn');
        }
    }

    function optimizeElement(elem, activeImg){
        elem.addEventListener('click', function(){
            typeFilter(activeImg);
        });
    }

    optimizeElement(btnAll, markAll);
    optimizeElement(btnLovers, markLovers);
    optimizeElement(btnChef, markChef);
    optimizeElement(btnGirl, markGirl);
    optimizeElement(btnGuy, markGuy);
    optimizeElement(btnGrandmother, false);
    optimizeElement(btnGranddad, false);

    menu.addEventListener('click', function(e){
        if(e.target && e.target.tagName == 'LI'){
            items.forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
        }
    });
}
export default filter;