const student = {
name : "Prince",
age : 20,
course : "BCA",
display : function(){
    console.log("Name : " , this.name);// student.name
    console.log("Age : " , this.age);
    console.log("Course : " , this.course);
}
}

student.display();
console.log(student.name);