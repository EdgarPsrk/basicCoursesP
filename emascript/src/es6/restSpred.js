//arrays destructuring
let fruits = ['Apple', 'Kiwi', 'Tangerine'];
let[a, b, c]=fruits;
console.log(a,b,fruits[2]);

let letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
for(const[index,element] of letters.entries()){
    console.log(index,element);
}



//object destructuring
let user={userName:'Edgar', age:26, country:'MX'};
let {userName, age, country}=user;
console.log(userName,age,user.country);


//spred operator
var rt=0;
let person={name:'Edgar', age:26,};
let year='1990';
let data={id:1, ...person, year};
console.log(data);


//rest
let sumar = (...values) => values.reduce((a,b) => a+b);
let res=sumar(1/10,1/12,1/25,1/15);
function inverso(invertidoRt){
    rt=1/invertidoRt;
    console.log(rt);
}
inverso(res);


//example
function myFunc(...someArgs){
    for (let i = 0; i < someArgs.length; i++){
        console.log(`Argument ${ i + 1 }: ${ someArgs[i] }`);
    }
}

myFunc('Paul', 'John', 'Ringo');