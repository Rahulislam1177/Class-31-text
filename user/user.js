const loadUser=()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data=>displayUsers(data.results))
}
loadUser()
const userBox =document.getElementById('users');  
  console.log(userBox);
const displayUsers=(users)=>{
for(const user of users){

    const DIV = document.createElement('div')
    DIV.classList.add('users')
    DIV.innerHTML =`
    <h4>Name: ${user.name.first} ${user.name.last }</h4>
     <h5>Address: ${user.location.country.city} </h5>
  <p>Email: ${user.email} </p>
  <p>Phone: ${user.phone}</p>
  <img src="${user.picture.medium}" alt="">
  <br>
  <button>Show Details:</button>
    `
    userBox.appendChild(DIV)
}



} 