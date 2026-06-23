function getdata(dataid,getnextdata){
    setTimeout(function(){
        console.log("data",dataid);
        if (getnextdata) {
            getnextdata();
        }
    },2000);
}

getdata(1,() => {
    console.log("data 2 is  getting...");
    getdata(2,() => {
        console.log("data 3 is getting...");
        getdata(3);
    });

}); // it will print "data 1" after 2 seconds