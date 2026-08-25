// var c = 30
let  a = 300;// global scope
if(true){  // Block scope
    let a = 10;
    const b = 20;
    console.log("Inner" , a);
    
}
// console.log(a);
// console.log(b);
//console.log(a);

function one(){
    const username = "Ankit"

    function two(){
        const website = "You tube"
        console.log(username);
    }
    //console.log(website);

    two();
    
}
//one();

if(true){
    const username = "ankit"
    if(username === "ankit"){
        const website = " you tube ";
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//************** Interesting question  ****************************/
console.log(addone(5))

function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}
