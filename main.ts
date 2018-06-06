//sample code
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say Hello 2";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);

// types
// string
let str = "hello";
let stre:string = "explicit string";
stre = "explicit string changed";
// console.log(str + "" + stre);

//number
let num1 = 110;
let num2 = 10.5;
let num3:number = 1023;
// console.log(num1,num2,num3);
num3 = 1500;
// console.log(num1,num2,num3);

//boolean
let bool = true;
let bool2:boolean = false;
// console.log(bool,bool2);

//Any
let anyy;
anyy = "stringggg";
// console.log(anyy);
anyy = 100; // we can also reassign different type of value in any type of variable but not allowed in other types
// console.log(anyy);
let any2:any = {val:3,val2:4}; // we can also assign objects
// console.log(any2);

//Array
let arr = ["a","b","c","d"];
// console.log(arr);
// console.log(arr[1]);

//Tuples
let tup1:[string,number] = ["abc",123];
// console.log(tup1);
// console.log(tup1[0]);

//enum
enum color{
  red,
  green,
  blue
}

// console.log(color);

// console.log(color[1]);
// green

// console.log(color.red);
//0
// console.log(color.green);
//1

enum color2 {
  pink,
  yellow = 100,
  grey,
  black = 200,
  brown
}

// console.log(color2);
// {0: "pink", 100: "yellow", 101: "grey", 200: "black", 201: "brown", pink: 0, yellow: 100, grey: 101, black: 200, brown: 201}

// console.log(color2[0]);
//pink

// console.log(color2[1]);
//undefined

// console.log(color2[100]);
//yellow

// console.log(color2.brown);
//201
