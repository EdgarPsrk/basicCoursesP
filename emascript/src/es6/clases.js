class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log(`Creado el usuario ${this.name}!!`)
    };

    //metodos funciones dentro de una clase.
    greeting(){
        return `Bienvenido ${this.name} de edad ${this.age}`;
    }

    //usando set and get
    get uAge(){
        return this.age;
    }
    set nAge(newAge){
        this.age=newAge;
    }
};


const user1=new User('Kus', 26);
console.log( user1.greeting() );

const user2=new User('Prush', 32);
console.log( user2.greeting() );

console.log(user1.uAge);
console.log(user2.nAge=34);

console.log( user2.greeting() );