async function* generetor(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
    yield await Promise.resolve(4);
}

const other =generetor();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello!!');


async function arrayName(array){
    for await(let value of array){
        console.log(value)
    }
}

const name = arrayName(['Irish', 'Adriana', 'Pamela', 'Vanesa']);
console.log('After');
