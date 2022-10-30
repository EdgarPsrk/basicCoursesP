function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const contar = iterate( ['jaja', 'jeje', 'jiji', 'jojo', 'juju'] );
console.log( contar.next().value )
console.log( contar.next().value )
console.log( contar.next().value )
console.log( contar.next().value )
