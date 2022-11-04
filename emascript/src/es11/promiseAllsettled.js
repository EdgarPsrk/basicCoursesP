const promise1 = new Promise( (resolve, reject)=> reject('No jala'));
const promise2 = new Promise( (resolve, reject)=>resolve('yes, baby!!'));
const promise3 = new Promise( (resolve, reject)=>resolve('o si, o si, oshii!!'));

Promise.allSettled([promise1,promise2,promise3]).then(response=>console.log(response));

