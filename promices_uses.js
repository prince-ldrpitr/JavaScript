const getpromice = () => {
    return new Promise((resolve, reject) => {
    console.log("i am a promise");
    resolve("i am resolved");
});

}

let promice = getpromice();
promice.then((rel) => {
    console.log("data from promice", rel);
});