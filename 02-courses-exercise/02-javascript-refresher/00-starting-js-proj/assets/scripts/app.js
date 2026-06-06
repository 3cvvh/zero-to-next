// // import apiKey from "./uttils.js"
// // // const userName = "axyl"
// // let userName = "axyl"
// // userName = "2"
// // console.log(userName)
// // console.log(api.key)
// // console.log(10 > 10)
// // console.log("10" === 10)
// if(10 == "10"){
//     console.log("hello " + "world")
// }
// import user from "./uttils.js";
// class User{
    
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }

//     gretings(){
//         console.log("hello " + this.name + " your age is " + this.age)
//     }
// }
// const user1 = new User("axyl",18)
// console.log(user1.gretings())
// console.log(user)
// function transformToObj(numberArray){
// return numberArray.map(item => ({val:item}))
// }
// const array = [1,2,3,4,5,6,7,10]

// // console.log(transformToObj(array))
// console.log(array.findIndex(item => item == 10 ))

// const {name:Username,id} = {
//     name:"axyl",
//     id:2
// }

// const [Username,id] = ["axyl",1]
// const obj = {
//     Username:"axyl",
//     id:2
// }
// function hellow({Username:name,id}){
//     return "hello my name "+ name + " and my id is " + id
// }

// const array1 = ["ashley","sattela"]
// const array2 = ["ashley2"]
// const mergeArray = [...array1,...array2]
// const obj1 = {
//     isAdmin: false

// }
// const obj2 = {
//     id:1,
//     username:"axyl"
// }
// const mergeObj = {
//     ...obj1,...obj2
// }
// console.log(mergeObj)

// const array = ["apel","buah"]
// const array = [
// "apel","apel2"
// ]
const obj = {
    name:"axyl",
    age:12
}

for(const item in obj){
    console.log(item)
}
// for(const food of array){
//     if(food == "apel"){
//         alert("apel jir")
//     }else if(food == "apel2"){
//         alert("apel 2 jir")
//     }
//     console.log(food)
// }
// document.getElementsByTagName("ul")[0].remove()

//function menjadi argument build in function

setTimeout(() => {
    console.log("time out")
}, 1000);
const handdle = () => {
    console.log("time out 2")
}

setTimeout(handdle,2000)

// membuat function yang parameter nya berisi function
function nestedFn(fn){
    fn()
}
function greetings(){
    console.log("hellos")
}
nestedFn(() => {
    console.log("hello")
})
nestedFn(greetings)

const array = [1,2,3,4,5,6];
let newSlice = array.slice(0,2)
let splice = array.splice(1,10,22,33)
let total = array.reduce((accumulator,currentValue) => accumulator += currentValue,0)
console.log(newSlice)
console.log(total)
console.log(splice)
console.log(array)