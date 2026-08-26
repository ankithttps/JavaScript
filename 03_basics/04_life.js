 // Immediately Invoked Function Expressions (IIFE)
 // global scope ke pollutin se bachne ke liye ham IIFE ka use karte haio 

 (function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

(
    (name) => {
        // Unnamed IIFE
        console.log(`DB Connected Two  ${name}`)
    }
)("ANKIT")
