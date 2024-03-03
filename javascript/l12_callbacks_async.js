console.log("One");
console.log("Two");
setTimeout(() => {
  console.log("Hello");
}, 2000);
console.log("three");
console.log("four");

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}



// This is callbackhell
/* getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
}); */

// to solve callbackhell promise comes
function getData1(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 10000);
  });
}

(async function (){
  console.log("getting data 1");
  await getData1(1);
  console.log("getting data 2");
  await getData1(2);
  console.log("getting data 3");
  await getData1(3);
  console.log("getting data 4");
    await getData1(4);
})();

/* let final = getData1(123);
console.log(final);
setTimeout(()=>{
    console.log(final);
},12000); */


/* const getPromise = () => {
    return new Promise ((resolve,reject)=>{
        console.log("I am rahman");
        resolve("success");
    })
};

const promise = getPromise();
promise.then((res)=>{
    console.log("Promised fulfilled",res);
});
promise.catch((err)=>{
    console.log("Promise rejected",err);
}) */

/* function asynsfunc (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data11");
            resolve("Done");
        },1000);
    });
}

function asynsfunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data11");
            resolve("Done");
        },1000);
    });
}

console.log("Fetching data1 .....");
asynsfunc().then((res)=>{
    console.log("successfully fullfilled promise");
    console.log("Fetching data2 ....");
    asynsfunc1().then((res)=>{
        console.log("Successfully fullfilled second promise");
    });
});
 */

function getData1(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 1); 
  });
}

// This is  promise chain
/* getData1(5).then((res)=>{
    console.log(res);
    getData1(10).then((res)=>{
        console.log(res);
    })
}); */

// another way of doing promis chaing
getData1(15)
  .then((res) => {
    return getData1(20);
  })
  .then((res) => {
    console.log(res);
  });

/* function api(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather data");
            resolve(200);
        },2000)
    })
}

async function  getWetherData(){
    await api();
} */

