# Comandos de la terminal.
> Colocaremos los comandos utilizados en el curso de lineas de comandos la sintaxis sera: 
```
comando
```
- Descripcion, breve de detalles o de que hacemos con esto.

> Para modificar variables de entorno y alias del sistema podemos acceder a el archivo **.bashrc** donde se guarda la configuracion del bash. aqui podemos agregar alias de manera permanete.

``` 
ls -lh
```
- Podemos visulizar de manera mas completa y con lectura Humana los archivos de la carpeta.
```
pwd
``` 
- Print working directory -> nos imprime la direccion de donde estamos trabajando.
```
file 'nombreArchivo.ext'
```
- Nos brinda una descripcio del 'nombreArchivo.ext'.
```
ls -la
```
- Long a -> nos muestra el detalle de los archivos gracias a la bandera -l pero por la bandera -a nos muestra los archivos ocultos del sistema
```
ls -lS
```
- -S de Size -> nos muestra las carpetas y archivos por tamano, agregando esto podemos visualizar el tamano de estos.
```
ls -lr 
```
- -r  de reverse -> nos coloca los archivos y carpetas acomomodados por orden alfabetico pero de z a A
```
tree -L 'number' 
```
- Nos despliega los archivos y carpetas de todo el sistem, como un arbol pero gracias a -L nos permite agregar niveles para poder verlo a los niveles indicados en number, es decir 1 nivel que seria el ls de toda la vida pero puesto como arbol o 2 niveles accediendo a el siguiente compilado de archivos.
```
mkdir 'nameD' 
```
- Make directory -> crea carpetas o directorios en el sistema. colocando el nombre a la carpeta indicado por 'nameD'
```
touche 'name.extension' 
```
- Crea un archivo con el nombre y la extension indicados por 'name.extension'
```
mv 'name.extension' 'direccion' 
```
- Move -> nos permite mover un archivo indicado por 'name.extension' a un lugar o directorio indicado por 'direccion', hay quedara el archivo.
```
rm -rf 
```
- Remove -> borrar un archivo con las banderas -r podemos borrar las carpetas de manera correcta una vez que tinene archivos y la flag -f fuerza a borra todo si o si, la flag -i nos pregunta si realmente es lo que queremos hacer, con lo que podemos decir que agrega un paso de seguridad.
```
help 'comando' 
```
- Nos brinda informacion del comando.
```
man 'comando' 
```
- Nos brinda un manual de usuario para saber como usarlo.
```
less 
```
- Nos permite ver e interactuar con todo el documento.
```
tail -n 'numerode lineas' 
```
- Por defecto muestra las ultimas 10 lineas pero gracias a -n podemos modificar el numero lineas que muestra al sustituir un valor en 'numero de lineas'
```
head -n 'numero de lineas' 
```
- Por defecto nos muestra las 10 primeras lineas del archivo, pero gacias a -n podemos modificar la cantidad a de lineas que nos muestra por defecto, asi 'numero de lineas' se puede sustiituir por 15 0 20 y sera las lineas que nos muestra.
```
cp 'origen.extension' 'destino.extension' 
```
- Copia el archivo 'origen.extension' y lo nombre 'destino.extension'
```
ls 'xxxx'> 'name.ext 
```
- Envia la salida , el output a un archivo 'name.ext'
```
ls 'xx' > 'name.ext' 2>&1 
```
- Concatena la salida del comando 'xx' con el error que se registre a un archivo 'name,ext'
```
ls 'comando' >> 'name.ext' 
```
- Concatena la salida de 'comando' a el contenido que se encuentra en 'name.ext'
```
echo 'message' 
```
- Genera una salida con el message en la terminal.
```
cat 'archivo.ext' 
```
- Muestra el contenido del archivo

> Pipes |, este comando nos permite hacer que el output de un comando sea el input del siguiente comando.
```
comando; comando1; 
```
- Eso nos permite encadenar comandos.

> Output y input  **> <** estos simbolo nos permite pasar o recibir procesos, con este escribimos el resukltado de un proceso en un archivo. 

```
comando & comando1
```
- Nos permite hacer lo comandos en paralelo, tomar un hilo por comando.
```
comando && comando1 
```
- Nos condiciona la ejecucion de los comandos, funciona como un condicional and.
```
comando || comando1 
```
- Hace un condicional or.
```
chmod 
```
- Nos permite cambiar los permisos asignados de un archivo. los permisos se puede meter de manera octal donde la representacion es basicamente binaria decimal ya que 101 -> 5 y 111-> 7, los permisos se asigan con el formato USUARIO/GRUPO/GLOBAL. otra manera de ahacer la asignacion es con la palabra u-'permiso' para quitartlo o u+'permiso' para garegarlo donde permiso es lo que quermos modificar, ademas de bes de padar el archivo que se va a modificar con lo que un ejemplo seria:chmod 755 'archivo.ext' -> lo que nos diria que el 'archivo.ext' que con todos los permisos para el usuario, lectura y escritura para global asi como para el grupo. 
***chmod u-x,go=w*** 'archivo.ext' -> nos deja el archivo de la siguinet manera, quite el executable al usuario y deja con escritura al grupo asi como el global.
```
whoami 
```
- Nos dice quienes somos en la terminal
```
id 
```
- Nos otorga el numero de usuario otorgado por la terminal.
```
sudo su
```
- Siwtch user -> nos permite cambiar al usuario root.
```
passwd 
```
- Nos permite cambiar el password del usuario actual.
```
ln -s 'direccion/de/archivo' 'nombre de la variable' 
```
- Genera un link simbolico donde podemos acceder a esa ruta.
```
printenv
```
- Nos imprime todas las variables de entorno configuradas en el sistema.
```
which 
```
- Nos permite encotrar las ubicacion de un archivo.
```
find ./ -name '*.txt'
```
- Buscar archivos desde la ubicacion actual.
```
grep [expresion regular] [archivo donde buscar] 
```
- Busqueda a traves de expresiones regulares
```
wc 'name.ext'
```
- Word count -> nos permite saber el numer de lineas, de palabras 'words' o de bites que tiene un archivo. podemos usar las banderas -l, -w o -c, respectivamente.
```
ifconfig
```
- Datos de la red donde estoy
```
ping 'url' -c 'numero de veces' 
```
- Nos permite mandar pings a una pagina para ver si esta funcionando, util para saber el estado de la red, ademas con la flag -c nos permite limitar las veces que lo hace
```
curl 'url' 
```
- Nos trae el html desde la url
```
wget 'url' 
```
- Nos trae y guarda el html en un archivo index.html
```
traceroute 'url' 
```
- Nos permite ver toda la ruta que recorre la peticion hasta llegar a su destino
```
netstat -i 
```
- Saber el estado de los datos de la red.
```
tar -cvf 'nombre de archivo resultante'.tar 'diroFileaComprimir' 
```
- Este comando comprime los archivos 'diroFileaComprimir' a un archivo .tar, donde las banderas -c,-v, -file son de create, vervosely list files y files en el orden correspondiente. Agregando una z en las banderas, podemos pasarlo a una compresion .gz en vez de .tar
```
tar -xvf 'nombre de archivo comprimido.tar' 
```
- Descomprime el archivo. donde si agregamos la z para el formato .gz debemso de agregarlo tambien asi como pasar el archivo .tar.gz
```
zip -r 'name de archivo comprimido' 'dir o file a comprimir'
```
- Nos comprime el dir o el file a un archivo de nombre 'name de archivo comprimido'
```
unzip 'dir comprimido.zip' 
```
- Nos descomprime el archivo comprimido en .zip
```
ps
```
- Muestra los procesos que esta corriendo.
```
kill 'numero de proceso' 
```
- Mata el proceso con el 'numero de proceso' indicado.
```
vim 'name.ext'
```
- Editor de texto.






