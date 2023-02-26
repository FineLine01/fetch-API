fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(json =>{
    const markup = json.data.map(el => {

        return `
        <li class="card-container">
        <div class="name-container">
        <span class="firstName">${el.first_name}</span>
        <span class="lastName">${el.last_name}</span>
        </div>
        </li>
        `
    })
    document.querySelector('.list-container').innerHTML = markup.join('');
})