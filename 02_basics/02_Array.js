const marvel_Heroes = ["Thor" , "Iron Man" , "Hulk"]
const dc_heroes = ["SuperMan" , "Flash ", "Batman"]

//marvel_Heroes.push(dc_heroes)

// console.log(marvel_Heroes)
// console.log(marvel_Heroes[3][1])

//const allHeroes = marvel_Heroes.concat(dc_heroes)

//console.log(allHeroes)

const all_New_heroes = [...marvel_Heroes, ...dc_heroes]
// console.log(all_New_heroes)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

//console.log(real_another_array)

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Ankit"))
// console.log(Array.from({name: "Ankit"})) /// interesting

const score1 = 100
const score2 = 100
const score3 = 100
console.log(Array.of(score1,score2, score3))


