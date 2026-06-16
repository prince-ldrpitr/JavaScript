const getdata1 = () => {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
    console.log("data1");
    resolve("success");
    },2000);
 });
}
const getdata2 = () => {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
    console.log("data2");
    resolve("success");
     },2000);
    });
}

console.log("fethcing data1");
let p1 = getdata1();
p1.then((rel) => {
    console.log("facthing data2");
    let p2 = getdata2();
p2.then((rel) => {
    console.log(rel);
});
});
