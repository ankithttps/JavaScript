class User{
    constructor(username){
        this.username = username 
    }

    logMe(){
        console.log(`username: ${this.username}`);  
    }

    createId(){
        return `123`
    }
}


const Ankit = new User("Ankit");
//console.log(Ankit.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());
