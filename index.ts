// function greet() {
// console.log("hello world")
// }
// greet()

// function greek (name:string, age:number, email:string) {
// 	console.log(`hello ${name} and age is ${age} and my email is ${email}`);
// }
// greek("sadia", 17, "sadiakham985@gmail") //argument


// function think(name ,email,age,password,rollnumber) {
// 	console.log(`hello !my ${name} is and my age is ${age} ,password is ${password},and my rollnumber is ${rollnumber} `)
// }
// think("sadia", "sadia@gmail", 17, "1234", 346)



// function homework(digit1:number,digit2:number) {
// 	console.log(digit1 * digit2)
	
// }
// homework(3, 8)

// function room(a: number, b: number) {
// 	console.log(a + b)
	
// }
// room(5, 5);


// function googlemap(from: string, to: string) {
// 	console.log(` ${from} ${to}`)
// }
// googlemap("GH" , "home");

// function marriage(choice:string ="ami ki choice") {
// 	console.log(choice)
// }
// marriage()
// marriage("meri choice")

// function sum(a:number,b :number):number {
// 	return (a + b);
// }
// console.log(sum(2,7));

// function detect(name: string = "sadia", age: number = 17) {
// 	return (`my name is ${name} and my age is ${age}`)
// }
// console.log(detect("nadia", 24));
 
// division
// function division(a:number,b:number):number {
// 	return (a/b)
// }
// console.log(division(4,2));

// multiply
// function multiply(a: number, b: number): number{
// 	return (a*b)
// }
// console.log(multiply(2, 3));
  

// let date = 21
// if (date === 28) {
// 	console.log(`today is ${date} its your first paper BE`);
// } else if (date === 20) {
// 	console.log("you study more you have time to work hard");
// } else if (date === 29) {
// 	console.log("its your college day");
// } else {
// 	console.log("its not your board exam");
// }


// ARROW FUNCTION

// const Hello = () => {
// 	console.log("hello from arrow function");
// }
// Hello();

// const hello = (digit:number) => {
// 	return digit
// }
// const ans = console.log(hello(6))
 
// const number = () => 5
// const ans = number()
// console.log(ans);
// const calculator = (digit: number, digit2: number, sign:string)=>{
// 	if (sign == "+") {
// 		 console.log(digit+digit2);
		 
// 	} else if (sign=="-") {
// 		console.log(digit-digit2);
		
// 	} else if (sign=="*") {
// 		console.log(digit * digit2);
// 	 }
//  } else {
// 	console.log("invalid number");
	
// }

// GLOBAL AND BLOCK SCOPE

// function  alisession() {
// 	let ali = "Ali"
// 	console.log(ali);
// }
// alisession();

// const Hamzahsession = () => {
// let hamzah = "hamzah"
// console.log(hamzah);
// 	console.log("sir Ameen ");
//  }
//  hamzahsession ()


// function police (){
// 	let a = "police"
// 	console.log("police");
	
// } police()
// console.log ("army")

// let army = "army"
// const KPS = () => {
// 	let kps = "kps"
// 	console.log(KPS);
// 	console.log(army);
// }
// KPS()
// function SFP() {
// 	const SFP = "SFP"
// 	console.log(SFP);
// 	console.log(army);
// }
// SFP()

// RETURN SCOPE

// let teacher = "Sir ameen"
// function alisession () {
// 	let teacher = "ali"         //nearest scope run first in function :
// 	console.log(teacher);
// }
// console.log(teacher);
// alisession();

// ARRAY

// const fruits = ["Banana", "Apple", "Mango", "Melon", "Peach", "Kiwi"];
// fruits.push("strewberry");
// console.log(fruits);
// fruits.pop()
// console.log(fruits);
// fruits.shift()
// console.log(fruits);
// fruits.unshift("blueberry")
// console.log(fruits);

// let elements = ["zinc", "magnecium", "calcium", "lead", "gold", "silver"]
// elements.unshift("barylium")
// console.log(elements);
 
// let array = [1, 2, 3, 4]
// console.log(array[0]); // output = 1
// console.log(array[1]); //output = 2
// console.log(array[2]);
// console.log(array[3]);

// const element = (name: string, fname: string) => {
//    return name + fname
// }
// console.log(element("sadia","shamim"));
// let fruits = ["Banana", "Apple", "Mango", "Melon", "Peach", "Kiwi"];
// fruits.shift();
// console.log(fruits);
//  const Hello = () => {
// 	console.log("hello from arrow function");
// }
// Hello();

// const hello = (digit:number) => {
// 	return digit
// }
// const ans = console.log(hello(6))

// const calculator = (digit1:number,digit2:number) => {
// 	console.log(digit1 + digit2);
// }
// calculator(2, 3);

// const arrow = (a: number, b: number, sign: string) => {
// 	if (sign === "+") {
// 		console.log(a + b);
// 	} else if (sign == "-") {
// 		console.log(a - b);
// 	} else if (sign == "*") {
// 		console.log(a * b);
// 	} else if (sign == "/") {
// 		console.log(a / b);
// 	} else {
// 		console.log("invaliad");
// 	}
// }

//  let vegetables =["potatoes","tomatoes","correct","bringal","chilli"]
// vegetables.splice(2, 0, "ginger", "garlic")
// console.log(vegetables);
 
// objects :::::::::

// const myCar = {
// 	brand: "toyota",
// 	model: "2023",
// 	variant :"1800cc",
// 	start: () => {
// 		return "stating"
// 	}
// }
// myCar.variant ="2500cc"
// console.log(myCar.brand);
// console.log(myCar.model);
// console.log(myCar.variant);

// const students = [{
// 	name: "sadia",
// 	email: "abc@.com",
// 	rollnumber: 23456,
// }, {
// 	name: "emaan",
// 	email: "emaan@gmail.com",
// 	rollnumber: 2345
// }, {
// 	name: "areesha",
// 	email: "def@gmail.com",
// 	rollnumber: 2345
// 	}];
// console.log(students[1].name);
// console.log(students[1].name = "fatima");
// console.log(students);

// types alias ;;;;
// type IrfanPappu = string;
// type IrfanChintu = string;
// const


// TYPES ALLIAS

// type rollnumber = number
// type phone = number
// const rollno: rollnumber = 2345
// const phonenumber: phone = 9236099
// 	console.log(rollno,phonenumber);
	
// type name = string;
// type hobbies = string[]
// const myname: name = "Sadia"
// const myhobbies: hobbies = ["studies", "work"];
// console.log(myname,myhobbies);

// function add (a:number,b:number):number {
// 	return a+b
// }
// console.log(add(2,4));
// const Hello = () => {
//  	console.log("hello from arrow function");
//  }
// Hello()
// const a = (a: number, b: number) => {
// 	console.log(a + b);
	
// }
// a(2,3)

// function greek(name: string, age: number, email: string)
// {
// 	console.log(`hello ${name} and age is ${age} and my email is ${email}`);
// }
// greek("sadia", 17, "sadiakham985@gmail") //argument

// function students(a:string,b:string) {
// 	console.log(a);
// 	console.log(b);
// }
// students("sadia","nimra")
// function myName(name:string= "sadia",age:number):string|number {
// 	return (`my name is ${name} , and my age is ${age}`)
// }
// console.log(myName());

// function detect(name: string, age: number = 17) {
// 	return (`my name is ${name} and my age is ${age}`)
// }
// console.log(detect("sadia"));









 

















