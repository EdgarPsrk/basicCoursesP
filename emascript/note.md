# Historia
- ecma -> European Computer Manufacturer Association.
- tc39 -> Grupo de personas a fines a js.

### es6 
- Nacido en junio de 2015.
- Se le incorpora let y const. donde let funge como var pero su scope es de bloque y no global como var.
- ()=> hay funciones que no se puede usar, ademas no se debe usar para construri metodos.
- Se agrega las plantillas literales.
- Los parametros por defecto ya no se tienen que validar y se puden pasar directo en la declaracion de las variables.
- Para la destructuracion podes rabajar con array o con objetos con una escritura mas limpia.
- Para el uso de new Promise ocupamos retornanr 2 parametro resolve o reject, a una funcion, lo cual genera un callback ya que pasamos una funcionm como parametro de otra funcion, con lo cual al colocar then en la resolucion de la promesa podemos generar una funcion que haga algo con esa respuesta. 
- Los modulos nos sirven para importar y exportar codigo de un archivo a otro, solo debemos de colocar la extensio  .mjs o conmfigurar el parametro "types" : "modules".
- Los generetor se diferencian con un aterisco en la palabra clave fuction, estos sirven para crear una logica, la cual se puede repetir a lo largo del codigo pero recuerdo su estado anterior, es decir durante una sola ejecucion podemos acceder a todos los elementos del array en orden, sin tener que instarcialos directamente.
- Podemos usar la funcion new Set para poder crear una funcion que agregue items a un array.

### es7 
- Nacido de junio en 2016.
- Se agrega la funcion del un exponecial de manera m ** n para obtener potencias de exponencial n con base m.
- Se agregan opciones de filtrar y encontrar un elemento sobre un array, con la funcion ***array.includes***.

### es8
- Nacido en junio de 2017
- Object entries devuelve una matriz de pares propios de elementos enumerables, transforma un objeto en una matriz de 2x2.
- Object values nos devuelve un array de las propiedades enumerables , es decir con los valores de las propiedades de un objeto o de las keys de ese objeto. tambien con lapropiedad object keys nos pasa un array de las keys de ese objeto.
- String padding -> nos ayuda a generar un padding pasando un string para rellenar las posiciones vacias y terminar con el numero de caracteres que coloquemos o pasemos como parametro, asi si colocas un .padStar('valor a llegar', 'caracter con cual rellenar'), esto generaria una salida de 10 caracteres rellenando con 'caractere con cual rellenar' todas las pocisiones nesesarias para llegar a lo solicitado es decir a los 10 caracteres. contamso con pad end que se diferencia al colocar los caractertes de relleno al final del string.
- Trainling commas nos permite agregar o resevar espacios vacios sobre una array y respetar estas posiciones, asi como contarlas para los elementos del array, en cualquier posicion. 
- Funciones asincronas con async y await  
> Promesas -> algo que puede pasar today, tomorrow, sometime or never.



### Comandos de la inicializacion de un repositoryo de git.
```sh
    echo "# test" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin git@github.com:EdgarPsrk/test.git
    git push -u origin main
```




