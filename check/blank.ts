import { createInterface as createQuestionInterface } from 'readline/promises';

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const ask = async () => {
//     const answer = await readline.question("Hows the weather: ", (input: string) => {
//         return input
//     })
//     return answer
// }

// const answer = ask()
// readline.close()
// console.log(answer)

let user = ["joe"]
let newUser = user
newUser[0] = "phil"
console.log(user)