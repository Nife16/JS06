import { createInterface as createQuestionInterface } from 'readline';

const rl = createQuestionInterface({
  input: process.stdin,
  output: process.stdout
});

// example useage
async function main() {

  var name = await rl.question("whats you name? ")
  console.log(`nice to meet you ${name}`)
 
  var age = await rl.question("How old are you? ")
  console.log(`Wow what a fantastic age, imagine just being ${age}`)

  return name
 }
 
const outtaDaFunc = await main()
console.log(outtaDaFunc)
