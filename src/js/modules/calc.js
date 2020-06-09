function calc(state){
    let sizeBlock = document.querySelectorAll('.optSize'),
        materialBlock = document.querySelectorAll('.optMaterial'),
        optionBlock = document.querySelectorAll('.optDop'),
        promocodeBlock = document.querySelector('.promocode'),
        resultBlock = document.querySelector('.calc-price'),
        btn = document.querySelector('.btnPostCalc'),
        sum = 0,
        sumWithPromo = 0,
        form = document.querySelector('.calc_form');

    let sizeBind = document.querySelector('#size'),
        materialBind = document.querySelector('#material'),
        optionBind = document.querySelector('#options');

    function bindData(selector, name){
        selector.forEach((item) => {
            item.addEventListener('click', function(){
                state[name] = this.value;
                console.log(state);
            });
        });
    }

    bindData(sizeBlock, 'size');
    bindData(materialBlock, 'material');
    bindData(optionBlock, 'options');

    const calcFunc = () => {
        sum = Math.round((+sizeBind.value) * (+materialBind.value) + (+optionBind.value));
        state.summa = sum;
        resultBlock.textContent = sum;
        if (sizeBind.value == '' || materialBind.value == '') {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            sumWithPromo = Math.round(sum * 0.7);
            resultBlock.textContent = sumWithPromo;
            state.summaWithPromo = sumWithPromo;
        } else {
            resultBlock.textContent = sum;
        }
        
        if(promocodeBlock.value === 'IWANTPOPART'){
            state.promo = 'Промокод введён';
            
        } else {
            state.promo = 'Промокод не введён';
        }
        console.log(state);
    };

    sizeBind.addEventListener('change', calcFunc);
    materialBind.addEventListener('change', calcFunc);
    optionBind.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);

    btn.addEventListener('click', function(e){
        e.preventDefault();
        let formData = new FormData(form);
        for(let key in state){
            formData.append(key, state[key]);
        }

        async function postData(){
            let response = await fetch('../../assets/question.php', {
                method: 'POST',
                body: formData
            });
            return await response.text();
        }
        postData()
            .then(result => console.log(result));
    });
}
export default calc;