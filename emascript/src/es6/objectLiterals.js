//antes 
function newPerson(user, age, country){
    return{
        user:user,
        age:age,
        country:country
    }
}

//ahora
function newUser(user, age, country,uId){
    return{
        user,
        age,
        country,
        id:uId,
    }
}
console.log(newUser('kusmx', 26, 'MX',1));
console.log(newPerson('gndx', 34, 'MX'));