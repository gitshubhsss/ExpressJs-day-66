class Mammels{
    constructor(name){
        this.name=name;
        this.type="mamal";
        this.height="8.5";
        this.color="voilder";
    }
}
class Dog extends Mammels{
    constructor(name){
        super(name)
    }
    bark(){
        console.log(`wooof.....`);
    }
}
class Cat extends Mammels{
    constructor(name){
        super(name)
    }
    maou(){
        console.log(`meooooo...`);
    }
}
let d1=new Dog("PANDA");
console.log(d1.color);