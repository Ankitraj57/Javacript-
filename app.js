function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        },2000);
    });
}

(async function () {
    console.log("getting data1.....");
    await getData(1);
    console.log("getting data2.....");
    await getData(2);
    console.log("getting data3.....");
    await getData(3);
    console.log("getting data4.....");
    await getData(4);
    console.log("getting data5.....");
    await getData(5);
}) ();

//Async- await
// async function getAllData() {
//     console.log("getting data1.....");
//     await getData(1);
//     console.log("getting data2.....");
//     await getData(2);
//     console.log("getting data3.....");
//     await getData(3);
//     console.log("getting data4.....");
//     await getData(4);
//     console.log("getting data5.....");
//     await getData(5);
// }

// async function hello() {
//     console.log("hello");
// }
/*-----------------------------------*/
// function getData(dataId) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         },5000);
//     });
// }

/*-----------------promise chain-------------*/
// console.log("processing data1.......");
// getData(1)
//     .then((res) => {
//     console.log("processing data2.......");
//     return getData(2);
// })
// .then((res) => {
//     console.log("processing data3.......");
//    return getData(3); 
// })
// .then((res) => {
//     console.log("processing data4.......");
//     return getData(4);
// }).then((res) => {
//     console.log(res);
// });


// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data1.......");
//  asyncFunc1().then((res) => {
//     console.log("fetching data2.......");
//  asyncFunc2().then((res) => {});
// });


/*-------- Promises -----------*/
// const getPromise = () => {
//    return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");
//         // reject("network error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fullfield", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });


// let Promises = new Promise((resolve,  reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("some error occurred");
// });


// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             // reject("error");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// }
/*---------------------------------------------------*/

// console.log("one");
// console.log("two");

// setTimeout(() => {
// console.log("hello");
// }, 4000);

// console.log("three");
// console.log("four");

/*-----callbacks-------*/
// function Sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 2, Sum);

/*------Nesting--------*/

// let age = 19;
// if(age>=18){
//     if(age>=60){
//         console.log("senior");
//     } else {
//         console.log("middle");
//     }
// } else {
//     console.log("child");
// }
//---------------------------------

// for(let i=0; i<5; i++){
//     let str = "";
//     for(let j=0; j<5; j++){
//        str = str + j;
//     }
//     console.log(i, str);
// }

/*-----Callback Hell----*/
// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, () => {
//     console.log("getting data2....");
//     getData(2, () => {
//         console.log("getting data3....");
//         getData(3, () => {
//             console.log("getting data4....");
//             getData(4);
//         });
//     });
// });

