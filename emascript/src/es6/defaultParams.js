function newUser(name, age, country){
    var name = name || 'Edgar';
    var age = age || 26;
    var country = country || 'MX';
    console.log(name, age, country);
}
newUser();
newUser('kus', 30, 'USA');



//para es6
function newAdmin(name='Edgar', age=26, country='MX'){
    console.log(name, age, country);
}
newAdmin();
newAdmin('Vega', 32, 'CO');