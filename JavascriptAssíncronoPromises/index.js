/* Promisse */
const aceitar = true

console.log('Pedir uber')
const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve('Pedido aceito!')
  }
  return reject('Pedido negado!')
})

promessa
  .then(result => console.log(result))
  .catch(erro => console.log(erro))
  .finally(() => console.log('finalizado'))

console.log('aguardando')

/* Fetch */
fetch('https://api.github.com/users/Isaias-Tortorele')
  .then(response => response.json())
  .then(data => fetch(data.repos_url))
  .then(res => res.json())
  .then(d => console.log(d))
  .catch(error => console.log(error))

/* Axios */
import axios from 'axios'

axios
  .get('https://api.github.com/users/Isaias-Tortorele')
  .then(response => axios.get(response.data.repos_url))
  /*   .then(response => {
    const user = response.data
    return axios.get(user.repos_url)
  }) */
  .then(repos => console.log(repos.data))
  .catch(error => console.log(error))

/* Promise All */
import axios from 'axios'

Promise.all([
  axios.get('https://api.github.com/users/Isaias-Tortorele'),
  axios.get('https://api.github.com/users/Isaias-Tortorele/repos')
])
  .then(responses => {
    console.log(responses[0].data.login)
    console.log(responses[1].data.length)
  })
  .catch(error => console.log(error.message))
