//nota: 1 es piedra, 2 es papel y 3 es tijera
let jugador = 0;
let pc = 0;
jugador = prompt('Elige 1 para piedra, 2 para papel y 3 para tijera');
if(jugador == 1)
{
    console.log('Elegiste Piedra');
}
else if(jugador==2)
{
    console.log('Elegiste Papel');
}
else if(jugador==3)
{
    console.log('Elegiste Tijera');
}
else
{
    console.log('Opcion NO valida');
}

