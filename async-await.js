const getdata = () => {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
    console.log("data1");
    resolve("success");
    },2000);
 });
}


async function getdataall() {
    console.log("fetching data1");
    await getdata(1);
    console.log("fetching data2");
    await getdata(2);
    console.log("fetching data3");
    await getdata(3);
}

getdataall();