const suscripciones={
    free:'Es gratis',
    basic:'Valido por un mes',
    expert:'Todo para uno',
    duo:'Todo para 2'
};

let askSuscripcion=prompt('Que tipo de supcripcion tienes?');

function printSuscripcion(type){
    if(suscripciones[type]){
        console.log(suscripciones[type]);
        return;
    }
    console.warn('Ese tipo de suscripcion no existe')
};

printSuscripcion(askSuscripcion);