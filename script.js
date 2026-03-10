// 1. Alerts
alert("Welcome to JavaScript");
alert("My name is Huzafa");

// 2. Variables for Strings
var name = "Huzafa";
var city = "Karachi";

console.log(name);
console.log(city);

// 3. Variables for Numbers
var age = 18;
var marks = 450;

console.log(age);
console.log(marks);

// 4. Variable Names Legal & Illegal
var userName = "Ali";
var user_age = 20;
var $price = 100;

console.log(userName);
console.log(user_age);
console.log($price);

// 5. Math Expressions (Operators)
var a = 10;
var b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// 6. Increment / Decrement
var num = 10;

num++;
console.log(num);

num--;
console.log(num);

// 7. Parentheses in Math
var result = (10 + 5) * 2;
console.log(result);

// 8. Concatenating Strings
var firstName = "Huzafa";
var lastName = "Kareem";

console.log(firstName + " " + lastName);

// 9. Prompts
var userName = prompt("Enter your name");
console.log("Hello " + userName);

// 10. if Statement
var age = 18;

if(age >= 18){
console.log("You are adult");
}

// 11. Comparison Operators
var a = 10;
var b = 20;

console.log(a == b);
console.log(a < b);
console.log(a > b);

// 12. if else / else if
var marks = 70;

if(marks >= 80){
console.log("Grade A");
}
else if(marks >= 60){
console.log("Grade B");
}
else{
console.log("Fail");
}

// 13. Multiple Conditions
var age = 20;
var city = "Karachi";

if(age >= 18 && city == "Karachi"){
console.log("You can apply");
}

// 14. Nested if
var age = 20;
var hasCNIC = true;

if(age >= 18){
 if(hasCNIC){
  console.log("You can vote");
 }
}

// 15. Arrays
var fruits = ["Apple","Mango","Banana","Orange"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);