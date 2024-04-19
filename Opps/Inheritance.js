//suppose we wants to store the data of employee and manageer have same objects 

class Person{
    constructor(name,age,c_name,deg){
        this.name=name;
        this.age=age;
        this.c_name=c_name;
        this.deg=deg;
    }
    talk(){
        console.log(`Hey ! ${this.name} here`);
    }
}

class Employee extends Person{
    constructor(name,age,c_name,deg){
        super(name,age,c_name);//parents constructor is being called here
        this.deg=deg;
    }
}

class Manager extends Person{
    constructor(name,age,c_name,deg){
        super(name,age,c_name);
        this.deg=deg;
    }
}

let e1=new Employee("shubham",21,"TCS","Software Engineer");


