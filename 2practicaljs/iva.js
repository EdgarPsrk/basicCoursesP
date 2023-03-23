//condición ? expr1 : expr2

const msn='Hay va la prueba';
const h1=document.querySelector('h1');
const in1=document.querySelector('#base');
const in2=document.querySelector('#ivaB');
const btn1=document.querySelector('#btnCalculoNeto');
const in3=document.querySelector('#isr');
const in4=document.querySelector('#ivaI');
const btn2=document.querySelector('#btnCalculoSubneto');
const presultado=document.querySelector('#resultado');

function calcularNeto(base){
    let isr=base*0.16;
    let sumaO=base+isr
    presultado.innerText = 'El producto con iva vale: ' + sumaO
}

function calcularSubneto(isr){
    let base=isr/1.16
    presultado.innerText = 'El producto sin iva vale: ' + base
}


function btnCalculoNeto(){
    let base=Number(in1.value);
    let ivaB= Number(in2.value);

    ivaB==0.16 ? calcularNeto(base) : console.warn('Todavia no podemos hacer eso');
}

function btnCalculoSubneto(){
    let isr=Number(in3.value);
    let ivaI=Number(in4.value);

    ivaI==0.16 ? calcularSubneto(isr) : console.warn('Todavia no podemos hacer eso');
}