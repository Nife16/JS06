
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const usDollarConverter = () => {

    readline.question("What is the dollar amount you would like to convert? ", (usDollarAmount) => {

        const dollarAmount = parseFloat(usDollarAmount)

        console.log("What would you like to convert to: ")
        console.log("1) Berries")
        console.log("2) Gold Pieces")
        console.log("3) Clout")
        console.log("4) All options")
        readline.question("Enter your selection: ", (selection) => {

            convertTheDough(selection, dollarAmount)


        })


    })
    
}
usDollarConverter()

const convertTheDough = (selection, usDollarAmount) => {

    let berries = 0, goldPieces = 0, clout = 0;
    switch(selection) {
        case '1':
            berries = usDollarAmount*.59
            console.log(`Your $${usDollarAmount} is now converted to ${berries} Berries!`)
            break;
        case '2':
            goldPieces = usDollarAmount*25000000
            console.log(`Your $${usDollarAmount} is now converted to ${goldPieces} Gee Pee's (Not legal tender in reality)!`)
            break;
        case '3':
            clout = usDollarAmount*.00000004
            console.log(`Your $${usDollarAmount} is now converted to ${clout} Clout!`)
            break;
        case '4':
            berries = usDollarAmount*.59
            console.log(`Your $${usDollarAmount} is now converted to ${berries} Berries!`)
            goldPieces = usDollarAmount*25000000
            console.log(`Your $${usDollarAmount} is now converted to ${goldPieces} Gee Pee's (Not legal tender in reality)!`)
            clout = usDollarAmount*.00000004
            console.log(`Your $${usDollarAmount} is now converted to ${clout} Clout!`)
            break;
        default:
            console.log("Enter in an invalid option!!!")
    }
    exit()
}

const exit = () => {

    console.log("1) Yes")
    console.log("2) No")
    readline.question("Would you like to exit? ", (input) => {
        if(input == "1") {
            console.log("Good Bye!")
            readline.close()
        } else if(input == "2") {
            usDollarConverter()
        } else {
            console.log("TRY AGAIN BILLY")
            exit()
        }
    })
}