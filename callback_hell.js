function getdata(dataid,getnextdata){
    setTimeout(function(){
        console.log("data",dataid);
        if (getnextdata) {
            getnextdata();
        }
    },2000);
}

getdata(1,() => {
    getdata(2,() => {
        getdata(3);
    });

}); // it will print "data 1" after 2 seconds