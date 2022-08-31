//Write a method called "max3" that finds the largest of THREE integers.

const max3 = (num1, num2, num3) => {

    if(num1 > num2 && num1 > num3) {
        console.log(num1 + 'is the biggest number!')
        return num1
    } else if(num2 > num1 && num2 > num3) {
        console.log(num2 + 'is the biggest number!')
        return num2
    } else {
        console.log(num3 + 'is the biggest number!')
        return num3
    }

}

// max3(13,342,5)

//Write a method called "min3" that finds the smallest of THREE Integers. 

const min3 = (num1, num2, num3) => {

    if(num1 > num2 && num1 > num3) {
        console.log(num1 + 'is the smallest number!')
        return num1
    } else if(num2 > num1 && num2 > num3) {
        console.log(num2 + 'is the smallest number!')
        return num2
    } else {
        console.log(num3 + 'is the smallest number!')
        return num3
    }

}

//Write a method called "middle3" that computes the MIDDLE value of THREE integers. 
//Hint: for the case of three numbers, 
//the middle is the value that is NOT the maximum NOR the minimum,
// so add the three values and subtract out the min and max, 
//using the methods you wrote for problems #1 and #2.


const middle3 = (num1, num2, num3) => {


    const maxNum = max3(num1, num2, num3)
    const minNum = min3(num1, num2, num3)
    const sumTotal = num1+num2+num3

    const middleNum = sumTotal - maxNum - minNum

    console.log(middleNum + ' is the middle number!')

}

// Write a method called "xor" that takes two boolean values (either true or false)
// and returns a boolean value which is true if EITHER of the values is true BUT NOT BOTH of them.
// This is called the "xor" function, or "eXclusive OR" 
// (where we are excluding the case where both values are true).

const xor = (boolean1, boolean2) => {


    if((boolean1 == true || boolean2 == true) && (boolean1 != boolean2)) {
        console.log("true")
        return true
    } else {
        console.log("false")
        return false
    }


}

// xor(false, true)

// Write a method "isFactor" which takes two integers (k and n)
// and returns true if ("if and only if") k is a factor of n

const isFactor = (bigNumber,smallNumber) => {

    if(bigNumber%smallNumber == 0) {
        console.log(smallNumber + ' is a factor of ' + bigNumber)
        return true
    } else {
        console.log(smallNumber + ' is a NOT a factor of ' + bigNumber)
        return false
    }
    
}

//isFactor(8, 3)


// Write a method "isPerfect" which takes an integer and returns true 
// if that integer is a perfect number 
// Your method MUST call the "isFactor" method you wrote for problem #5.

const isPerfect = (number) => {

    let sum = 0

    for(let i = 1; i < number; i++) {

        if(isFactor(number, i)) {

            sum += i

        }

    }

    if(sum == number) {
        console.log("PERFECT: " + number)
        return true
    } else {
        console.log("IMPERFECT: " + number)
        return false
    }

}

// Write a method "isPrime" which takes an integer 
// and returns true if it is a prime number. 
// Your method MUST call the "isFactor" method you wrote for problem #5.

const isPrime = (number) => {

    for(let i = 2; i < number; i++) {

        if(isFactor(number, i)) {

            console.log("NOT PRIME: " + number + ', ' + i + ' is a factor!!!!1!ONE')
            return false

        }

    }

    console.log("PRIME: " + number)

}


