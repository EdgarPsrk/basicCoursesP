const msn='Hay va la prueba';
const h1=document.querySelector('h1');
const in1=document.querySelector('#base');
const in2=document.querySelector('#iva');
const btn1=document.querySelector('#btnCalcular');
const presultado=document.querySelector('#resultado');


function calcular(base,iva){
    let isr=iva*base;
    let sumaO=base+isr
    presultado.innerText = 'El producto con iva vale ' + sumaO
}

function btnCalcula(){
    let base=Number(in1.value);
    let iva = Number(in2.value);

    if(iva == 0.16){
        calcular(base,iva)
    }else{
        console.warn('Todavia no podemso hacer eso');
    }
}