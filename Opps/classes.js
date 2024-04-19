class Employee{
    constructor(name,deg,sallary){
        this.name=name;
        this.deg=deg;
        this.sallary=sallary;
    }
    canCode(){
        console.log(`Hey am ${this.name} here I can write a code`);
    }
}

let e1=new Employee("shubham","software Engineer",85000);
let e2=new Employee("omkar","software Engineer",85000);

//e2.canCode === e1.canCode

