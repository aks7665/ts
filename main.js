"use strict";
//sample code
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var button = document.createElement('button');
button.textContent = "Say Hello 2";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
// types
// string
var str = "hello";
var stre = "explicit string";
stre = "explicit string changed";
// console.log(str + "" + stre);
//number
var num1 = 110;
var num2 = 10.5;
var num3 = 1023;
// console.log(num1,num2,num3);
num3 = 1500;
// console.log(num1,num2,num3);
//boolean
var bool = true;
var bool2 = false;
// console.log(bool,bool2);
//Any
var anyy;
anyy = "stringggg";
// console.log(anyy);
anyy = 100; // we can also reassign different type of value in any type of variable but not allowed in other types
// console.log(anyy);
var any2 = { val: 3, val2: 4 }; // we can also assign objects
// console.log(any2);
//Array
var arr = ["a", "b", "c", "d"];
// console.log(arr);
// console.log(arr[1]);
//Tuples
var tup1 = ["abc", 123];
// console.log(tup1);
// console.log(tup1[0]);
//enum
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
// console.log(color);
// console.log(color[1]);
// green
// console.log(color.red);
//0
// console.log(color.green);
//1
var color2;
(function (color2) {
    color2[color2["pink"] = 0] = "pink";
    color2[color2["yellow"] = 100] = "yellow";
    color2[color2["grey"] = 101] = "grey";
    color2[color2["black"] = 200] = "black";
    color2[color2["brown"] = 201] = "brown";
})(color2 || (color2 = {}));
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
