class Employsee{
    constructor( name){
        console.log (` ${name} - employee's are logged in`);
        this.name = name;
    }
    login(){
    console.log(`All the employees are logged in`);
    }
    logout(){
    console.log(`All the employees are logged out`);
    }
    
    leave(leave){
    console.log(`All the employees are  ${leave + 1}   leave -auto leave  `);
    }
    }
    
    class Manager extends Employsee{
        constructor( name){
super(name);
            console.log (`she is an amna - manager's are logged in`);
            this.name = name;
        }
    // constructor(){
    //     super();
    // }
    requestcoffe (x){
    console.log(`Manager is requesting for ${x} coffee`);
    }
    
    leave(leave){
        super.leave(leave);
    console.log(`one day extra for manager`);
        // console.log(`All the employees are  ${leave + 1}  leave (one day extra for manager)`);
        }
    }
    
    let manager = new Manager("faizan");
    manager.login();
    manager.requestcoffe(2);
    manager.leave(2);