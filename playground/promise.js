var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Hey. It worked!'); 
        reject('Unable to fulfill promise.');
    }, 3000); 
});

somePromise.then((message) => {
    console.log('Success: ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
});