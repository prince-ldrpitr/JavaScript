const getdata = () => {
     return new Promise((resolve, reject) => {
    console.log("i am a promise");
    resolve("i am resolved");
});
}


let promices = getdata();
promices.then(() => {
    console.log("success");
});