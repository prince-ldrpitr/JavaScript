

let promises = new Promise((resolve, reject) => {
    console.log("i am a promise");
    resolve("i am resolved");
});




//function getdata(dataid,getnextdata){
  //  return promises = new Promise((resolve, reject) => {
    //setTimeout(function(){
      //  console.log("data",dataid);
        //resolve("success");
 //   } )  
   //     if (getnextdata) {
     //       getnextdata();
    //    }
 //   },2000);
//}

//getdata(1,() => {
//    getdata(2,() => {
  //      getdata(3);
    //});
//
//}); // it will print "data 1" after 2 seconds