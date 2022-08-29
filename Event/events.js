const { inherits} = require('util')
const { EventEmitter} = require('events')
// const ev = new EventEmitter()
// ev.on('saySomething', (message) =>{
//   console.log('Eu ouvi você: ', message)
// })
// ev.once('saySomething', (message) =>{
//   console.log('Eu ouvi você: ', message)
// })
// once unica vez
// ev.emit('saySomething', "Isaias Tortorele")
// ev.emit('saySomething', "Matheus Tortorele")
// ev.emit('saySomething', "Jhon Tortorele")

function Character(name){
  this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?');

chapolin.emit('help')