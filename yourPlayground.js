//console.log('babu234')
function sayMyName(name){
    console.log(`hi ${name}, How are you?`)
}
//sayMyName('shyam sunder')
function sum(a,b){
    return a+b;
}
//console.log(sum(2,3))
function calculateTotalWithTip(food,tip){
    tipPercentage=tip/100
    tipAmount=food*tipPercentage
    total=sum(food,tipAmount)
    return Math.floor(total)
}
//console.log(calculateTotalWithTip(434,7))
const fruits=['banana','orange','grape','peal','cucumber','apple']
// for(let i=0; i<fruits.length;i++){
    //console.log(i,fruits[i])
// }
// fruits.push('tomato')
// for(const fruit of fruits){
//     console.log(fruit)
// }

// console.log(test)
// console.log(result)
const plural=(fruits)=>{
    var test='abs'
    let result=[]
    for(let fruit of fruits){
        result.push(fruit+"s")
    }
    return result
}
//console.log(plural(fruits))
 console.log(fruits)