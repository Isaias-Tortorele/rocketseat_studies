const url = 'http://localhost:5500/api'

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => (renderApiResult.textContent = JSON.stringify(data)))
    .catch(error => console.log(error))
}

function getUser() {
  fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userCity.textContent = data.city
      userAvatar.src = data.avatar
    })
    .catch(error => console.log(error))
}

function addUser() {}

const newUser = {
  name: 'Isaias Tortorele',
  avatar: 'https://github.com/Isaias-Tortorele',
  city: 'São Paulo'
}

getUsers()
getUser()
