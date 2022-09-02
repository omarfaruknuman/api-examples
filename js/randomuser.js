// arrow function
const loadUser = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => dispalyUser(data.results))
}

const dispalyUser = users => {
    const usersContianer = document.getElementById('users-container');
    for(const user of users){
        console.log(user)
        const userDiv = document.createElement('div')
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <h3>User Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
            <p>Email: ${user.email}</p>
            <p>User Location: ${user.location.city} ${user.location.country}</p>
            <p>Coordinates: ${user.location.coordinates.latitude}</p>
        `;
        usersContianer.appendChild(userDiv)
    }
}
loadUser();