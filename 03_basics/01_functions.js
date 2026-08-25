function sayMyName(){
    // console.log("H");
    // console.log("I");
    // console.log("T");
    // console.log("E");
    // console.log("S");
    // console.log("H");
}

// sayMyName();

// function addTwoNumber(num1 , num2){
//     console.log(num1 + num2)
// }
function addTwoNumber(num1, num2){ //parameters
   let result = num1 + num2
   return result
}
//const result = addTwoNumber(3 , 5)//Arguments

// console.log("Result :", result)

function loginUSerMessage(username = "sam"){
    if(!username){ //username === undefined
       // console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUSerMessage("Ankit"));
//console.log(loginUSerMessage("Ankit"));

// function calculateCartPrice(...num1){
//     return num1
// }
// function calculateCartPrice(val1 , val2 , ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200 , 400 ,500));

// const user = {
//     username:  "Ankit" ,
//      price: 199
// }
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);
    
}
// handleObject(user);
handleObject({
    username: "Ankit",
    price:  100
})

const myNewArray = [100 ,200, 300];

function newArray(getArray){
    return getArray[3];
}
// console.log(newArray(myNewArray));
console.log(newArray([100 , 200 , 300 , 400]));


