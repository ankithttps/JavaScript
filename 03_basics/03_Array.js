const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);// THIS refers the current cotext
        console.log(this);
    }

}
// THIS exectues only in objects not in functions
// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "Ankit"
//     console.log(this.username);
    
// }
// chai();

// const chai = function(){
//     let username = "Ankit"
//      console.log(this.username);
// }
const chai = () => { // Arrow function
    let username = "Ankit"
     console.log(this.username);
     console.log(this);
}
//chai();

//  const addTwo = (num1 , num2)  => {
//     return num1 + num2
//  }// Basic Arrow function


//const addTwo = (num1 , num2)  =>   num1 + num2 // implicit return
//const addTwo = (num1 , num2)  =>   (num1 + num2)
const addTwo = (num1 , num2)  =>  ( {username: "Ankit"})
 console.log(addTwo(3,4));
 

