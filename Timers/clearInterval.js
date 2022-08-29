// setInterval i´ra rodar uma função N vezes
// depois de X milissegundos
const timeOut = 1000
const checking = () => console.log('Checking!')

let interval = setInterval(checking, timeOut)

setTimeout(() => clearInterval(interval), 4000);