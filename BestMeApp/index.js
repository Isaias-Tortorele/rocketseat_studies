const questions = [
  "O que eu aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que eu poderia fazer para melhorar",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
  process.stdout.write(questions[index] + " ")
}

ask()

const answers = []
process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    console.log(answers)
    process.exit()
  }
})

process.on('exit', () => {
  console.log(`Banana Isaias!

   O que você aprendeu hoje foi: 
   ${answers[0]}
   O que me deixou aborrecido: 
   ${answers[1]}
   O que eu poderia fazer para melhorar: 
   ${answers[2]}
   O que me deixou feliz hoje:
   ${answers[3]}
   Quantas pessoa ajudeu hoje: 
   ${answers[4]}
  `)
})