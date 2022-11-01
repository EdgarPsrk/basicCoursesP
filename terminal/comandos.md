Colocaremos los comandos utilizados en el curso de lineas de comandos 
la sintaxis sera:
comandos = Descripcion, breve de detalles o de que hacemos con esto.
quantum&zi1001

ls -lh = podemos visulizar de manera mas completa y con lectura Humana
         los archivos de la carpeta.

pwd = print working directory -> nos imprime la direccion de donde 
      estamos trabajando

file 'nombre archivo' = nos brinda una descripcio del 'nombre archivo'

ls -la = long a -> nos muestra el detalle de los archivos gracias a 
         long -l pero por la bandera -a nos muestra los archivos ocultos
         del sistema

ls -lS = -S de Size -> nos muestra las carpetas y archivos por tamano, 
         agregando hace podemos visualizar el tamano de estos.

ls -lr = -r  de reverse -> nos coloca los archivos y carpetas acomomodados 
         por orden alfabetico pero de z a A

tree -L 'number' = nos despliega los archivos y carpetas de todo el 
                   sistem, como un arbol pero gracias a -L nos permite 
                   agregar niveles para poder verlo a los niveles 
                   indicados en number, es decir 1 nivel que seria el ls
                   de toda la vida pero puesto como arbol o 2 niveles 
                   accediendo a el siguiente compilado de archivos.

mkdir 'nameD' = make directory -> crea carpetas o directorios en el 
                sistema. colocando el nombre a la carpeta indicado por 
                'nameD'

touche 'name.extension' = crea un archivo con el nombre y la extension 
                          indicados por 'name.extension'

mv 'name.extension' 'direccion' = move -> nos permite mover un archivo 
                                  indicado por 'name.extension' a un lugar 
                                  o directorio indicado por 'direccion', 
                                  hay quedara el archivo.

rm -rf = remove -> borrar un archivo con las banderas -r podemos borrar 
         las carpetas de manera correcta una vez que tinene archivos y 
         la flag -f fuerza a borra todo si o si, la flag -i nos pregunta
         si realmente es lo que queremos hacer, con lo que podemos decir 
         que agrega un paso de seguridad.

help 'comando' = nos brinda informacion del comando.

man 'comando' = nos brinda un manual de usuario para saber como usarlo.

less = nos permite ver e interactuar con todo el documento.

tail -n 'numerode lineas' = por defecto muestra las ultimas 10 lineas pero
                            gracias a -n podemos modificar el numero 
                            lineas que muestra al sustituir un valor en 
                            'numero de lineas'

head -n 'numero de lineas' = por defecto nos muestra las 10 primeras 
                             lineas del archivo, pero gacias a -n podemos 
                             modificar la cantidad a de lineas que nos 
                             muestra por defecto, asi 'numero de lineas' 
                             se puede sustiituir por 15 0 20 y sera las 
                             lineas que nos muestra.

cp 'origen.extension' 'destino.extension' = copia el archivo 
                                            'origen.extension' y 
                                            lo nombre 'destino.extension'

ls 'xxxx'> 'name.ext = envia la salida , el output a un archivo 'name.ext'
ls 'xx' > 'name.ext' 2>&1 = concatena la salida del comando 'xx' con el 
                            error que se registre a un archivo 'name,ext'

ls 'comando' >> 'name.ext' = concatena la salida de 'comando' a el contenido
                             que se encuentra en 'name.ext'

echo 'message' = genra una salida con el message en la terminal.

cat 'archivo.ext' = muestra el contenido del archivo

pipes |, este comando nos permite hacer que el output de un comando sea el
input del siguiente comando.

output y input = > < -> nos permite pasar o recibir procesos, con este 
                 escribimos el resukltado de un proceso en un archivo. 

comando; comando1; = eso nos permite encadenar comandos.

comando & comando1 = nos permite hacer lo comandos en paralelo, tomar un hilo 
                     por comando.

comando && comando1 = nos condiciona la ejecucion de los comandos, funciona
                      como un condicional and.

comando || comando1 = hace un condicional or.

chmod = nos permite cambiar los permisos asignados de un archivo.
        los permisos se puede meter de manera octal donde la representacion
        es basicamente binaria decimal ya que 101 -> 5 y 111-> 7, los 
        permisos se asigan con el formato USUARIO/GRUPO/GLOBAL.
        otra manera de ahacer la asignacion es con la palabra u-'permiso' 
        para quitartlo o u+'permiso' para garegarlo donde permiso es lo que 
        quermos modificar, ademas de bes de padar el archivo que se va a 
        modificar con lo que un ejemplo seria:
        chmod 755 'archivo.ext' -> lo que nos diria que el 'archivo.ext'
        que con todos los permisos para el usuario, lectura y escritura para 
        global asi como para el grupo.
        chmod u-x,go=w 'archivo.ext' -> nos deja el archivo de la siguinet 
        manera, quite el executable al usuario y deja con escritura al grupo
        asi como el global.

whoami = nos dice quienes somos en la terminal

id = nos otorga el numero de usuario otorgado por la terminal.

sudo su = siwtch user -> nos permite cambiar al usuario root.

passwd = nos permite cambiar el password del usuario actual.

ln -s 'direccion/de/archivo' 'nombre de la variable' = genera un link simbolico
                                                       donde podemos acceder a 
                                                       esa ruta.

printenv = nos imprime todas las variables de entorno configuradas en el sistema.

para modificar variables de entorno y alias del sistema podemos acceder a el 
archivo .bashrc donde se guarda la configuracion del bash. aqui podemos 
agregar alias de manera permanete.

which = nos permite encotrar las ubicacion de un archivo.

find ./ -name '*.txt'= buscar archivos desde la ubicacion actual.

grep [expresion regular] [archivo donde buscar] = busquieda a traves de xpresiones regulares

wc 'name.ext' = word count -> nos permite saber el numer de lineas, de palabras 'words'
                o de bites que tiene un archivo. podemos usar las banderas -l, -w o -c,
                respectivamente.

ifconfig = datos de la red donde estoy

ping 'url' -c 'numero de veces' = nos permite mandar pings a una pagina para ver si esta
                                  funcionando, util para saber el estado de la red, ademas 
                                  con la flag -c nos permite limitar las veces que lo hace

curl 'url' = nos trae el html dede la url

wget 'url' = nos trae y guarda el html en un archivo index.html

traceroute 'url' = nos permite ver toda la ruta que recorre la peticion hasta llegar a su destino

netstat -i = saber el estado de los datos de la red.

tar -cvf 'nombre de archivo resultante'.tar 'diroFileaComprimir' = este comando comprime los archivos
                                                                   'diroFileaComprimir' a un archivo 
                                                                   .tar, donde las banderas -c,-v, -file
                                                                   son de create, vervosely list files y 
                                                                   files en el orden correspondiente.
                                                                   
                                                                   agregando una z en las banderas, 
                                                                   podemos pasarlo a una compresion .gz
                                                                   en vez de .tar

tar -xvf 'nombre de archivo comprimido.tar' = descomprime el archivo.
                                              donde si agregamos la z para el formato .gz debemso de 
                                              agregarlo tambien asi como pasar el archivo .tar.gz

zip -r 'name de archivo comprimido' 'dir o file a comprimir' = nos comprime el dir o el file a un archivo
                                                               de nombre 'name de archivo comprimido'

unzip 'dir comprimido.zip' = nos descomprime el archivo comprimido en .zip

ps= muestra los procesos que esta corriendo.
 
kill 'numerdo de proceso' = mata el proceso con el 'numero de proceso' indicado.

vim = editor de texto






