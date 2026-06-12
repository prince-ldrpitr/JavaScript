class car{
    constructor(name){
        this.name = name;
        console.log(`car ${name} is created`);
    }
    start(){
        console.log(`car ${this.name} started`);
    }

    stop(){
        console.log(`car ${this.name} stoped`);
    }
}


let thar = new car("thar");
let scorpio = new car("scorpio");
thar.start();
thar.stop();