class parent {
    
    constructor(name){
        console.log("This is parent constructor")
        this.name = name;
        console.log("My Name is",name);
    }

    hello(){
        console.log("Hello world");
    }

}

let rahman = new parent("rahman");  
rahman.hello();
class child extends parent{
    constructor(surname){
        console.log("This is chil₫ constructor");
        super();
        this.surname=surname;
        console.log(surname);
        console.log("exit child constructor");
    }
    hello(){
        console.log("Hello mumbai");
    }
    project(){
        console.log("Build something unique");
    }
}
let khalid = new child("khalid"); 
khalid.hello();
khalid.project();  