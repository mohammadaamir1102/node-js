//here add it is a constant method means private the accessability of add only inside this file (expo.js) but if we want to call this method form another file then we have to use export  

// const add =(a,b)=>{
// return a+b
// }

// const name ='Aamir khan';

// module.exports=name;
// module.exports=add;
//here we can not write like add() because we are not calling this from her we are calling from outside

//we have to two or multiple method so we can do like this way

const show =(a,b)=>{
    return a+b;
}
const run =(a,b)=>{
    return a-b;
}
const multiple =(a,b)=>{
    return a*b;
}
const divide =(a,b)=>{
    return a/b;
}
const myName='Mohammad Aamir khan'

module.exports={show,run,multiple,divide,myName}