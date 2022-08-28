


const loadUsers = () => {
    fetch("https://randomuser.me/api/?results=10")
        .then(res => res.json())
        .then(data => showUsers(data.results))
}

const showUsers = (users) => {
    const usersContainer = document.getElementById("users-container")
    for (const user of users){
        console.log(user);
       const userDiv = document.createElement("div");
       userDiv.classList.add("user")
       userDiv.innerHTML = `
            <img src="${user.picture.large}" />
            <h2>UserName :${user.name.title} ${user.name.first} ${user.name.last} </h2>
            <h3>UserEmail : ${user.email} </h3>
       `;

       usersContainer.appendChild(userDiv);
    }
}

