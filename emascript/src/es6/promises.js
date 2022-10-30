const anotherFunction=()=>{
    return new Promise( (resolve, reject)=>{
        if(false){
            resolve('Hey!!');
        }else{
            reject('Whoops!!');
        }
    } )
}

anotherFunction()
    .then(response=>console.log(response))
    .catch(error=>console.log(error));


//example
const datos = 
[
    {
    id:1,
    title:'Iron man',
    year:2008
    },
    {
        id:2,
        title:'Spiderman: Homecoming',
        year:2017
    },
    {
        id:3,
        title:'Avenger: Endgame',
        year:2019
    }
];

// const getDatos=()=>{
//     return(datos);
// } 

// const getDatos=()=>{
//     setTimeout( () => {return datos}, 1500 );
// }

//const datos=[]

const getDatos = () => {
    return new Promise( (resolve, reject) => { 
        if(datos.length === 0){
            reject(new Error('No hay datos'))
        }
        setTimeout ( () => { resolve(datos) }, 1500) } )
}

getDatos()
    .then( (datos)=>console.log(datos) )
    .catch( (error)=>console.log(error) )