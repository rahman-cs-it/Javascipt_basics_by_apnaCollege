let marks=[85,97,44,37,76,60];
console.log(marks);
for(let i of marks){
    console.log(i);
}
let sum=0;
for(let i of marks){
    sum+=i;
}
console.log(sum);
let res=sum/marks.length;
console.log(res);

let items=[250,645,300,900,50];

let j=0;
for(let i of items){
    console.log(`Price at index ${j} = ${i}`)
    let offer = i/10;
    i=i-offer;
    
    console.log(`Price after offer ${i}`);
    j++;
    
}

let i=0;
for(let val of items){
    let offer = val/10;
    items[i]=items[i]-offer;
    console.log(items[i]);
    i++;
}

for(let i=0;i<items.length;i++){
    let offer = items[i]/10;
    items[i]-=offer;
    console.log(items[i]);
}
console.log(items);

let foodPrice=[100,200,300,400];
console.log(foodPrice);
foodPrice.push(500);
console.log(foodPrice);
foodPrice.pop();
console.log(foodPrice);
console.log(foodPrice.toString()); 
console.log(foodPrice);
// console.log(foodPrice.slice(0,2));
console.log(foodPrice.splice(1,2,50,60));
console.log(foodPrice);
console.log(foodPrice.splice(0,0,90));
console.log(foodPrice);

let companies=["Bloomberg","Microsoft","Uber","Google","Ibm","Netflix"];
console.log(companies);

console.log(companies.shift());
console.log(companies);

console.log(companies.splice(2,0,"Ola"));
console.log(companies);

console.log(companies.push("Amazon"));
console.log(companies);


