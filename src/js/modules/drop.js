function drop(){
    const fileInputs = document.querySelectorAll('[name="upload"');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefault, false);
        });
    });

    function preventDefault(e){
        e.preventDefault();
        e.stopPropagation();
    }

    function hightLight(item){
        item.closest('.file_upload').style.border = '3px solid orange';
        item.closest('.file_upload').style.background = 'rgba(0,0,0 .7)';
    }

    function unHightLight(item){
        item.closest('.file_upload').style.border = 'none';
        item.closest('.file_upload').style.background = 'transparent';
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => hightLight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unHightLight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            let arr = input.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            let name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.innerHTML = name;  

            let user = {};
            for(let key in input.files[0]){
                user[key] = input.files[0][key];
            }

            async function post(){
                let response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
              });
              
              return await response.text();
            }

            if(input.closest('.file_yourself')){
                post().then(result => console.log(result));
            }
        });
    }); 
}
export default drop;