// console.log(typeof weight);

// let name = "Isaias";
// let age = 21;
// let start = 5.6;
// let isSubscribed = true

// let student = {
//   name: "Isaias",
//   age: 21,
//   weight: 55.6,
//   isSubscribed: true
// };

// // console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg` )

// let students = [
//   student
// ]

// // console.log(students[0])

// const isaias = {
//   name: "is",
//   age: 21,
//   weight: 78.5,
//   isSubscribed: true
// }

// students[1] = isaias
// console.log(students)

//---------------------------------------------------------------

// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

// function getNotas(nota){
//   let mediaA = nota >= 90 && nota <=100;
//   let mediaB = nota >= 80 && nota <=89;
//   let mediaC = nota >= 70 && nota <= 79;
//   let mediaD = nota >= 60 && nota <= 69;
//   let mediaF = nota <= 60;
//   let notaFinal;

//   if(mediaA){
//     notaFinal ="Você tirou um 'A'";
//   }else if(mediaB){
//     notaFinal = "Você tirou um 'B'";
//   }else if(mediaC){
//     notaFinal = "Você tirou um 'C'";
//   }else if(mediaD){
//     notaFinal = "Você tirou um 'D'";
//   }else if(mediaF){
//     notaFinal = "Você tirou um 'F'";
//   }else{
//     notaFinal = "Nota Inválida!";
//   }

//   return notaFinal;
// }

// console.log(getNotas(101));
// console.log(getNotas(50));
// console.log(getNotas(70));
// console.log(getNotas(90));
// console.log(getNotas(68));
// console.log(getNotas(85));

// -------------------------------------------------------------------

// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: [] 
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas e irá mostrar uma mensagem se a família está com 
// saldo positivo ou negativo, seguido do valor do saldo.

// let familia = {
//   receitas: [150, 120, 80, 357.50],
//   despesas: [200, 50, 30]
// }

// function soma(array){
//   let total = 0;

//   for(let value of array){
//     total += value;
//   }
//   return total;
// }

// function calculo(){
//   const calcularReceitas = soma(familia.receitas);
//   const calcularDespesas = soma(familia.despesas);

//   const total = calcularReceitas - calcularDespesas;
//   let message = "Negativo";

//   if(total >= 0){
//     message= "Positivo";
//   }

//   console.log(`Seu saldo é ${message}: R$ ${total.toFixed(2)}`);
// }

// calculo();

//------------------------------------------------------------------

// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra 
//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32

// function transformacaoDeGrau(graus){
//   const celsiusExists = graus.toUpperCase().includes('C');
//   const fahrenheitExists = graus.toUpperCase().includes('F');

//   if(!celsiusExists && !fahrenheitExists){
//     throw new Error("Grau não identificado");
//   }

//   // fluxo  ideal, F -> C
//   let updatedDegree = Number(graus.toUpperCase().replace("F", ""));
//   let formula = (fahrenheit) => (fahrenheit - 32) * 5/9;
//   let degreeSign = 'C'

//   // fluxo alternativo, C -> F
//   if(celsiusExists){
//     updatedDegree = Number(graus.toUpperCase().replace("C", ""));
//     formula = celsius => celsius * 9/5 + 32
//     degreeSign = 'F'
//   }

//   return formula(updatedDegree).toFixed(2) + degreeSign
// }

// try {
//   console.log(transformacaoDeGrau('10C'));
//   console.log(transformacaoDeGrau('50F'));
//   transformacaoDeGrau('50V');
// } catch (error) {
//   console.log(error.message);
// }

//-------------------------------------------------------------------------

/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

//Contar o número de categorias e o número de livros em cada categoria
// const booksByCategory = [
//   {
//       category: "Riqueza",
//       books: [
//           {
//               title: "Os segredos da mente milionária",
//               author: "T. Harv Eker",
//           },
//           {
//               title: "O homem mais rico da Babilônia",
//               author: "George S. Clason",
//           },
//           {
//               title: "Pai rico, pai pobre",
//               author: "Robert T. Kiyosaki e Sharon L. Lechter",
//           },
//       ],
//   },
//   {
//       category: "Inteligência Emocional",
//       books: [
//           {
//               title: "Você é Insubstituível",
//               author: "Augusto Cury",
//           },
//           {
//               title: "Ansiedade – Como enfrentar o mal do século",
//               author: "Augusto Cury",
//           },
//           {
//               title: "Os 7 hábitos das pessoas altamente eficazes",
//               author: "Stephen R. Covey",
//           },
//       ],
//   },
// ];
// // Contar o número de autores
// const totalCategoria = booksByCategory.length
// console.log(`Total de categoria: ${totalCategoria}`);

// for(let category of booksByCategory){
//     console.log(`Total de livros da categoria: ${category.category}`)
//     console.log("Total:", category.books.length)
// }
// //Mostrar livros do autor Auguto Cury
// function countAuthor(){
//   let authors = [];
//   for(let category of booksByCategory){
//     for(let books of category.books){
//       if(authors.indexOf(books.author) == -1){
//         authors.push(books.author);
//       }
//     }
//   }
//   console.log("Total de autores: ",authors.length)
// }
// countAuthor();

// // Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
// function booksOfAuthor(author){
//   let books = [];

//   for(let category of booksByCategory){
//     for(let book of category.books){
//       if(book.author === author){
//         books.push(book.title)
//       }
//     }
//   }
//   console.log(`Livros do autor ${author}: ${books.join(", ")}`)
// }

// booksOfAuthor('Augusto Cury')
// booksOfAuthor('George S. Clason')

