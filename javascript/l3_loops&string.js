for(let i=0;i<5;i++){
    console.log("My name is Rahman");
}

let i=0;
while(i<=5){
    console.log("My name is Rahman");
    i++;
}
let Name = "Rahman";
let size=0;
for(let i of Name){
    console.log(i);
    size++;
}
console.log(size);

const student = {
    Name: "Rahman",
    age: 25,
    cgpa: 7,
    isPass: true
};

for(let i in student){
    console.log(i,student[i]);
}

for(let i=0;i<=100;i++){
    console.log(i);
}
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

let num=40;
let res=prompt("Please guess the number");

while(num!=res){
    res=prompt("You enter the wrong number,Please try again");
}
console.log("congratulation,you guess the number");

console.log(Name[2]);

let obj={
    item:"Pen",
    price:10
};
console.log("The cost of",obj.item,"is",obj.price,"rupees");
console.log(`The cost of ${obj.item} is ${obj.price} rupees`);
let str="wasifurrahman";
let str1="wasifur rahman";
let str2="wasifur\nrahman";

console.log(str.length);
console.log(str1.length);
console.log(str2.length);

let str3="rahman";
let str4=str3.toUpperCase();
console.log(str3);
console.log(str4);

let username=prompt("Please enter your username");
console.log(`@${username}${username.length}`)
console.log("@"+username+username.length)
