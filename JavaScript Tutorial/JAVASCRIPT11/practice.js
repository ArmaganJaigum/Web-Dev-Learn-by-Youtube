let DATA = "secret information";

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Data = ", DATA);
    }
}

class Admin extends User {
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "some new value";
    }
}

let student1 = new User("mohammad", "armagan@gmail.com");
let student2 = new User("Armagan", "armagan@gmail.com");
let student3 = new User("Jaigum", "armagan@gmail.com");

let admin = new Admin("Admin", "admin@gmail.com");