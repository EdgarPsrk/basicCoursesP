var lastName='Palomino';
lastName='Perez';
console.log(lastName);

let fruit='Apple';//scope block
fruit='Tangerine';
console.log(fruit);

const animal='Dog'; //no se puede sobreescribir -> scope block
console.log(animal);

const fruits=()=>{
    if(true){
        var fruit1='Apple';
        let fruit2='Tangerine';
        const fruit3='Kiwi';
    }
    console.log(fruit1);
    console.log(fruit2);//genera error por falta de scope en let
    console.log(fruit3);
}
fruits();


