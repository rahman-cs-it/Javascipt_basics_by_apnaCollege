let btn1 = document.getElementById("btn1");
btn1.onclick = ()=>{
    console.log("you clciked it once");
    alert("thankyou once");
}

let btn2 = document.getElementById("btn2");
btn2.ondblclick = () => {
    console.log("you clicked it twice");
    alert("thankyou twice");
}

let h1 = document.getElementById("h1");
h1.onmouseover = () => {
    console.log("you are inside h1");
    alert("thankyou again");
}

btn1.onclick = (evt) => {
console.log(evt);
}

btn1.addEventListener("click",() =>{
    console.log("button was clicked one time");
})
const two = () =>{
    console.log("button was clicked two time");
}
btn1.addEventListener("click",two);
btn1.addEventListener("click",() =>{
    console.log("button was clicked three time");
})
btn1.addEventListener("click",(evt) =>{
    console.log(evt);
    console.log("button was clicked four time");
    
})

btn1.removeEventListener("click",two);

let currmod = document.querySelector("body").style.backgroundColor;

btn2.addEventListener("click", () => {
    if (currmod === "rgb(255, 255, 255)" || currmod === "white") {
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        document.querySelector("body").style.backgroundColor = "white";
    }
    currmod = document.querySelector("body").style.backgroundColor;
    console.log(currmod);
});

