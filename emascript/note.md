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

### es9
- Expresiones regulares como funciones para su uso, nos permite crear plantillas de expresiones regul;ares y pasarlas como funciones para usarlas como si fueran funciones.
- Podemos hacer uso de la funcion de propagacion ya no solo con arrays, si no con objetos a primer nivel, debido a que si reuqerimos copiar arrays dentro de un objeto, esto apriori no se puede lograr.
- Tenemos una nueva palabra reservada que es finally para poder agregar una funcion dentyro de este y hacer uso de esta cuando terminemos de ejecutar toda la promesa ya sea que se haya cumplido o no, si, solo si la funcion termino todo el proceso.
- Podemos hacer uso de generadores asincronos con ***generetor + asyn & await*** ademas de poder usar for asincronos.

### es10
- Salio en enero de 2019
- Flat map nos devuelve una matriz de cualquier submatriz, es decir reduce la matriz de n dimenciones a R1, ademas con el operador map podemos pasar un ()=> y obtener una matriz de R1 con alguna operacion que coloquemos. asi como [aqui](./src/es10/flatMap.js)
- Podemos eliminar algo cal final o al principio con trimStar o trimEnd.
- Ahora podemos personalizar el mensaje que se muetra en consola al hacer un catch de un error.
- Con fromEntries podemos pasar de objetos a arrays y de arrays a objetos a travz del mapeo der estos.

### es11
- Junio de 2020
- Optional chaining nos ayuda a no romper el codigo y validar la existencia de una propiedad, con lo cual nos devuelve un *undefine* y no un *fatal error*
- Este constructor bigInt nos permite trabajar con numero muy grandes para las operaciones matematicas con presicion.
- Para trabajar con valores null podemos usar nullish -> ?? y colocar un valor en este null basicamente ejecuta un condicional donde si el numero esta vacio pasa el valor que estamos asiganando *num ?? 5* lo que en el ejemplo pasa es que si *num* es null entonces *num=5*
- Nos permite montar un ()=> para continuar una vez que una serie de promesas se ha cumplido.
- GlobalThis nos permite hacer portabilidada dependiendo del contexto de donde estemos trabajando.
- matchAll nos ayuda a filtrar elementos dentro de un string.
- Se agrega la posibilidad de agregar imports dinamicos, es decir que se cargan de manera que lo indiquemos y asi no sobre cargar la pagina cuando se carga al aplicacion.

### es12
- 




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




