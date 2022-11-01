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
- Se agregan opciones de filtrar y encontrar un elemento sobre un array.


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




