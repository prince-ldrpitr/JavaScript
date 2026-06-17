class person {
    eat(){
        console.log("person is eating");
    }
}


class student extends person{
    study(){
        console.log("student is studying");
    }
}
 let prince = new student();
 prince.eat();
 prince.study();