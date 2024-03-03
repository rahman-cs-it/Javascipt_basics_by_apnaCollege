function Name(Name) {
  console.log(Name);
}

Name("Wasifur");
Name("Rahman");

function sum(a, b) {
  console.log(a + b);
}
sum(5, 7);
sum("a", "b");

const arrowsum = (a, b) => {
  console.log(a + b);
};
arrowsum(7, 5);

function vowel(string) {  
  string = string.toLowerCase();
  let num = 0;
  for (let j of string) {
    if (j == "a" || j == "e" || j == "i" || j == "o" || j == "u") {
      num++;
    }
  }
  console.log(num);
}

vowel("Rahman");

const arrowvowel = (string) => {
  string = string.toLowerCase();
  let num = 0;
  for (let j of string) {
    if (j === "a" || j === "e" || j === "i" || j === "o" || j === "u") {
      num++;
    }
  }
  console.log(num);
};
arrowvowel("124");

let arr=[1,2,3,4,5];
arr.forEach(function printvalue(val){
  console.log(val);
})  

arr.forEach(function square(val){
  console.log(val*val);
})

let newarr=arr.map((val)=>{
  return val**2;
});
console.log(newarr);

let newarr1=arr.filter((val)=>{
  return val%2==0;
})
console.log(newarr1);

let out=arr.reduce((prev,curr)=>{
  if (prev>curr){
    return curr;
  }
  else{
    return prev;
  }
})
console.log(out);

let marks=[97,64,32,49,99,96,86];
let output=marks.filter((val)=>{
  if(val>90){
    return val;
  }
})
console.log(output);

let n= prompt("Please enter the number");
let brr=[];
for(let i=1;i<=n;i++){
  brr[i-1]=i;
}
console.log(brr);

let output1=brr.reduce((prev,curr)=>{
  return prev*curr;
})
console.log(output1);



