async function postData(url, data){
    let result = await fetch(url, {
        method: 'POST',
        body: data
    });
    return await result.text();
} 

async function getResource(url){
    let result = await fetch(url);
    if(!result.ok){
        throw new Error(`Fetch ${url} status ${result.status}`);
    }
    return await result.json();
} 

export {postData, getResource};