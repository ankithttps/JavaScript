const name = "Ankit"
const repo = 3

//console.log(name + repo + "heloo")

console.log(`Helllo my name is ${name} and my repo is ${repo}`)

const gameName = new String('Ankit-hc-Ac')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newstring = gameName.substring(0, 3);
console.log(newstring)

const anotherString = gameName.slice(-8, 3);
console.log(anotherString)

const newStringOne = "     Ankit    "
console.log( newStringOne )
console.log( newStringOne.trim())

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'))










