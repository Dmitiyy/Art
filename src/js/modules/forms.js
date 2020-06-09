import {postData} from '../services/requests';
function forms(){
    let form = document.querySelectorAll('form');
    let input = document.querySelectorAll('input');
    let upload = document.querySelectorAll('[name="upload"]');

    function ps(){
        let obj = {
            success: 'OK',
            loading: 'loading',
            failure: 'Error',
            spinner: 'assets/img/spinner.gif',
            ok: 'assets/img/ok.png',
            fail: 'assets/img/fail.png'
        };

        let path = {
            designer: 'assets/server.php',
            question: 'assets/question.php'
        };

    upload.forEach(item=>{
        item.addEventListener('input', function(){
            console.log(item.files[0].name);
            let dots;
            let arr = item.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.innerHTML = name;        
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', function(e){
            e.preventDefault();
            let stMes = document.createElement('div');
            stMes.classList.add('status');
            item.parentNode.appendChild(stMes);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(()=>{
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', obj.spinner); 
            statusImg.classList.add('animated', 'fadeInUp');
            stMes.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.innerHTML = obj.loading;
            stMes.appendChild(textMessage);

            let formData = new FormData(item);
            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);

            postData(api, formData)
                .then((res)=>{
                    console.log(res);
                    statusImg.setAttribute('src', obj.ok);
                    textMessage.innerHTML = obj.success;
                })
                .catch((res)=>{
                    console.log(res);
                    statusImg.setAttribute('src', obj.fail);
                    textMessage.innerHTML = obj.failure;
                })
                .finally(()=>{
                    input.forEach(item=>{
                        item.value = '';
                    });

                    upload.forEach(item => {
                        item.previousElementSibling.innerHTML = 'Файл не выбран'; 
                    });
                    setTimeout(()=>{
                        stMes.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                });
            });
        });
    }
    ps();
}
export default forms;