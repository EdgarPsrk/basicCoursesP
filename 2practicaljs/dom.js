// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

const img = document.createElement('img');
img.setAttribute('src','https://www.flaticon.es/svg/vstatic/svg/3917/3917032.svg?token=exp=1679356661~hmac=f01280490f3a9e881a8c11b8abfd45ac');
pid.replaceWith(img);