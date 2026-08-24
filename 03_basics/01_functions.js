function sayMyName(){
    // console.log("H");
    // console.log("I");
    // console.log("T");
    // console.log("E");
    // console.log("S");
    // console.log("H");
}

sayMyName();

// function addTwoNumber(num1//parameters , num2){
//     console.log(num1 + num2)
// }
function addTwoNumber(num1, num2){ //parameters
   let result = num1 + num2
   return result
}
const result = addTwoNumber(3 , 5)//Arguments

// console.log("Result :", result)

function loginUSerMessage(username = "sam"){
    if(!username){ //username === undefined
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUSerMessage("Ankit"));
console.log(loginUSerMessage("Ankit"));
