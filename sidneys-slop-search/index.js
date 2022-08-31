const Resturaunt = require('./resturaunt');
const { createResturaunt, searchResturaunts, updateResturaunt, deleteResturaunt, readline } = require('./utilFuncs');
const resturant1 = new Resturaunt("Krusty Krab", "123 Wallaby Way", "123", "Burgers")
const resturant2 = new Resturaunt("Chum Bucket", "124 Wallaby Way", "124", "Burgers")
const resturant3 = new Resturaunt("Red Lobster", "125 Wallaby Way", "125", "Burgers")
const resturauntList = []
resturauntList.push(resturant1)
resturauntList.push(resturant2)
resturauntList.push(resturant3)


const menu = () => {

    console.log("Welcome to Sidneys Slop, you can: ")
    console.log("1) Enter in your new resturants Data")
    console.log("2) Look up Local Resturaunts")
    console.log("3) Update your resturaunts data")
    console.log("4) Remove an OOB Resturaunt")

    readline.question("What is your selection: ", (input) => {

        switch(input) {

            case "1":
                createResturaunt(resturauntList, menu)
                break;
            case "2":
                searchResturaunts(resturauntList)
                break;
            case "3":
                updateResturaunt(resturauntList)
                break;
            case "4":
                deleteResturaunt(resturauntList)
                break;
            default:
                console.log("Please enter a valid entry billy, 1,2,3 or 4")
                menu()
        }

    })

}

menu()