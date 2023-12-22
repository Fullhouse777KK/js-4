
// let a = prompt('Введите ваше имя')
// let b = +prompt('Введите нынешний год')
// let c = +prompt('Введите ваш год рождения')

do{
  var a = prompt('Введите ваше имя')
}while (a > 0|| a < 0);
   
do{
 var b = +prompt('Введите нынешний год')   
}while (isNaN(b) || b < 2023)

do{
var c = +prompt('Введите ваш год рождения')
}while (isNaN(c) || c < 1900)

function sum(){
    let years = b - c
    return console.log('Вас зовут ' + a + ', Вам ' + years + ' лет')   
}
console.log(sum()) 

// ===============================================================================================2================================================================================
// function randomSighn2(){
//     return Math.random() > 0.5 ? '*' : '/' 
// }

// function answerTrue(){
//    if (two == '+') {
//     answerTrue = (one + three)
// }else if (two == '-'){
//     answerTrue = (one - three)
// }else if (two == '*'){
//     answerTrue = (one * three)
// } else {
//     answerTrue = (one / three)
// }
// }
// function answerTrue(){
//     let minus = one - two
//     let plus = one + two
//     let devide = one / two
//     let multiply = one * two
// }


do {
   var prim = +prompt("Введите число примеров")
} while (isNaN(prim) || prim == 0);


function random1(){
return Math.floor (Math.random() * 100)
}
function random2(){
    return Math.floor (Math.random() * 100)
    }

function randomSighn(){
    return Math.random() > 0.5 ? '+' : '-' && random1 >= random2 ? '/' : '*'  

}


for (let i = 0; i < prim; i++) {
var one = random1()
var two = randomSighn()
var three = random2()  
let answer = +prompt(one + " " + two + " " + three + " = ?") 
if (one + three == answer || one * three == answer|| one / three == answer || one - three == answer) {
    console.log('Ваш ответ правильный ' + answer)
} else {
    console.log('Ваш ответ ' + answer + ' не верный')
}

}
alert('зайдите в консоль')
