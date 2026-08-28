// for each loop

const coding = ["cpp", "ruby" , "python" , "swift"]

// coding.forEach(function (value){ // call back function
//     console.log(value);
    
// })

// coding.forEach((val) => { // for each loop in arrow function
//     console.log(val);
    
// })

// function printme(item){
//     console.log(item);
    
// }
// coding.forEach(printme);

// coding.forEach((item , index , arr) => {
//      console.log(item , index , arr)
// })


const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

mycoding.forEach((item) => {
    console.log(item.languageFileName ,"=" , item.languageName)
})
// array > object > property