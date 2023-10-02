
const loadApi = () =>{
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data =>displayApi(data))
}

const displayApi=(data)=>{
const ul = document.getElementById('ul');
ul.innerText = data.quote;
}