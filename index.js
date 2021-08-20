// const name='aamir khan';
// console.log(name);

// file system

//creating a new file
const fs = require("fs");
// fs.writeFileSync("file.txt","Mohammad")

// fs.writeFileSync("file.txt","Aamir khan")

// fs.appendFileSync("file.txt","hello mohammad aamir how are you")

// const buf_data=fs.readFileSync("file.txt")
// console.log(buf_data);

//we will get the data in binary form or we can say in buffer form
const dataReading = fs.readFileSync("readWrite.txt");
// console.log(dataReading);

//but if i want to get actual data then have to use toString

// org_data=dataReading.toString();
// console.log(org_data);

//we can do also by second way
// org_data1=fs.readFileSync("readWrite.txt","utf8")
// console.log(org_data1);

//change the file name

// const chg_file=fs.renameSync("file.txt","readWrite.txt")
// console.log(chg_file);

// const delFile=fs.unlinkSync("crud.js")
// console.log(delFile);

// Asynchronous
//we have to write a call back function
// const asys=fs.writeFile("read.txt","Hello aamir khan how are you")
// console.log(asys);

// const asynchronous=fs.writeFile("read.txt","Hello aamir khan how are you",(err)=>{
// console.log("file has been created");
// console.log(err);
// })

//Asynchronous file delete

// const delRed=fs.unlink("read.txt",()=>{
//     console.log("file has been deleted successfully");
// })
// console.log(delRed);

//adding some data in Asynchronous existing file

// const addingInAsynchronous=fs.appendFile("read.txt"," Yeah i am good and fine",
// (err)=>{
//     console.log("added successfully");
//     console.log(err);
// })
// console.log(addingInAsynchronous);

//read file by Asynchronous
//here data transfer in data argument from read.txt file
//wanna actual data then have to write UTF-8 or utf8
// fs.readFile("read.txt","utf8",(err,data)=>{
// console.log(data);
// console.log(err);
// });

//Asynchronous vs Synchronous

//Asynchronous

// fs.readFile('read.txt','utf8',(err,data)=>{
// console.log(data);
// console.log(err);
// console.log('file has been read');
// })
// console.log('i am out of this function');

//here for example file reading is taking some millisecond and also have remaining code out side the method then that remaining code will be execute because of Asynchronous

//Synchronous
// const syn = fs.readFileSync("read.txt", "utf8");
// console.log(syn);
// console.log('this is synchronous');

//here first show the data from read.txt file and then print second console


//create and export our own modules and here we have to require that file where create the function because expo it is not predefined module

// const add=require("./expo");
// console.log(add(5,5));

// const name=require("./expo");
// console.log(name);
//console.log(add); 
//this console for name calling which is declared inside the expo.js

const {show,run,multiple,divide,myName} = require('./expo')

console.log(show(5,5));
console.log(run(10,5));
console.log(multiple(5,5));
console.log(divide(10,5));
console.log(myName);

//we can create also our own web server
//to access web pages of any application, we need to web server The web server will handle all the http request for the web application

//but in Node js we can create our own web server and handle the http requests asynchronously 
