const employee = {
    calctax(){
        console.log("tax is 10%");

    },
}

const prince = {
    salary : 50000,
    calctax(){
        console.log("tax is 20%");
    },
}


prince.__prot__ = employee;

prince.calctax();