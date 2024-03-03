let a=5 , b=2;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
let age = 17;

if(age<18){
    console.log("You are not eligible to vote");

}
else{
    console.log("you are eligible to vote")
}

let result = age<18 ? "not adult":"adult";
console.log(result);

let que = prompt("please enter the number");
console.log(que);   
if(que%5==0){
    console.log(que,"is Multiple of 5");
}
else{
    console.log(que,"is Not multiple of 5");
}

let marks = prompt("Please enter your marks");
if(marks>=80 && marks<=100){
    console.log("your grade is A");
}
else if(marks>=70 && marks<=79){
    console.log("your grade is B");
}
else if(marks>=60 && marks<=69){
    console.log("your grade is C");
}
else if(marks>=50 && marks<=59){
    console.log("your grade is D")
}
else {
    console.log("your grade is E")
}