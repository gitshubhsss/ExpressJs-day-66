function Student(name,age){
    this.name=name;
    this.age=age;
}

Student.prototype.talk=()=>{
    console.log(`hey am ${this.name}`);
}

let s1=new Student("shubham",21);
console.log(`name = ${s1.name}`);
console.log(`age = ${s1.age}`);
s1.talk();
let s2=new Student("Omkar",21);
s2.talk()