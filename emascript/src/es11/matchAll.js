const regex=/\b(Apple)+\b/g;
const fruit='Para este ejemplo debemos de tener la palabra Apple pero pues no se me ocurre una oracion donde poner la palabra Apple, con lo cual se tiene este texto.';

for(const match of fruit.matchAll(regex)){
    console.log(match);
}
