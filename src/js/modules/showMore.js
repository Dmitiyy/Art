import {getResource} from '../services/requests';
function showMoreStyles(trigger, wrapper){
    let btnMore = document.querySelector(trigger);
    btnMore.addEventListener('click', function(){
        getResource('http://localhost:3000/styles')
            .then(res => createCards(res));
        this.remove();
    });

    function createCards(response){
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
            <div class="styles-block">
                <img src="${src}" alt>
            	<h4>${title}</h4>
             	<a href="${link}">Подробнее</a>
            </div>
            `;
            document.querySelector(wrapper).appendChild(card);
        });
    }
}
export default showMoreStyles;