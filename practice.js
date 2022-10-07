
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


// Given 2 non-negative ints, a and b, return their sum,
// so long as the sum has the same number of digits as a.
// If the sum has more digits than a, just return a without b. 


const sumDigits = () => {

    readline.question("Type a number: ", (a) => {
        readline.question("Another one: ", (b) => {


            const string = "dasfda"

            string.replace()

            const parsedInput1 = parseFloat(a)
            const parsedInput2 = parseFloat(b)

            const isInputNotANumber = isNaN(parsedInput1) || isNaN(parsedInput2)
            const isInputNegativeNumber = (parsedInput1 < 0) && (parsedInput2 < 0)

            if (isInputNotANumber) {
                console.log("Try again billy, try numbers this time")
                sumDigits()
            } else if(isInputNegativeNumber) {
                console.log("No negative numbers Billy")
                sumDigits()
            } else {

                const sum = parsedInput1+parsedInput2

                if (checkDigits(sum) === checkDigits(parsedInput1)) {
                    console.log(sum)
                } else if(checkDigits(sum) > checkDigits(a)) {
                    console.log(b)
                }
                readline.close()

            }

        })

    })
}

sumDigits()

const checkDigits = (num) => {

    const stringNum = num.toString()

    return stringNum.length

}