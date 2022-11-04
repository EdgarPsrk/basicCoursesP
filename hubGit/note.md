# Comandos usados en el curso de git en Platzi.
> La correpondecia de el codigo es:
```
comando
```
- Descripcion de que podemos hacer con el comando.
> NOTAS: Aquello que esta entre comillas puedes considerarlo una variable. “ejemplo”, aquello que tiene comillas y asterisco lleva forzosamente las comillas. **”ejemplo”* aquí si tenemos que poner las comillas en el comando.
```
git init 
```
- Inicia una carpeta como master o main para git (esto se hace siempre al iniciar una carpeta).
```
git add .
```
- Tiene varias variantes, pero la mas usada es con un punto donde agrega todos los archivos al trackeo de git.
```
git commit
```
- Crea un snapshoot de lo que se esta realizando en ese momento, esto versiona el código debes mandar una descripción de lo que estas mandando siempre.
```
git commit -m *“mensaje”
```
- Manda el mensaje de lo que hiciste sin necesidad de entrar al editor vim.
```
git branch
```
- Muestra las ramas existentes en la carpeta.
```
git branch “nombre de la rama”
```
- crea una rama con el nombre “nombre de la rama”.
```
git checkout “nueva rama”
```
- Nos mueve a la rama “nueva rama”.
```
git config –global user.mail "email@example.some"
```
- Crea tu email para saber quien esta mandado el cambio (esto se hace siempre al instalar git).
```
git config –global user.name "yourNAME"
```
- Crea el nombre de quie esta haciendo estos cambios (esto se hace siempre al instalar git).
```
git checkout –“archivo.txt”
```
- Es un control z para el archivo mientras no usemos git add.
```
git diff
```
- Muestra aquello que se modificó al hacer el git add.
```
git status
```
- Muestra el estado de aquello que estamos trackeando.
```
git log
```
- Nos muestra la historia de los commitis que hemos hecho.
```
git  remote add origin “URL”
```
- Toma el url que le indicas para poder hacer el push origin master O main. 
```
git push origin main
```
- Lleva lo que tiene en tu repositorio local al repositorio en github.

> PROCESO DE UN PUSH ADD ORIGIN “BRANCH”
```
git add . 
git commit -m "(agregando tu comentario)"
git pull origin "branch"
git push origin “branch”
```
- Asi agregamos a la rama que indiquemos lo que estamos cambiando. Origin master manda el commit a la rama master del proyecto
```
git clone “URL”
```
- Clona el código desde esa url a tu repositorio local.
```
git rm --cached “node_modules” -r
```
- Nos ayuda a remover lo trackeado anteriormente, básicamente deshace un git add  debemos especificar que archivo o carpeta vamos a untrackear
```
rm -rf .git
```
- Comando para eliminar complemante el trackeo de un archivo iniciado en git.
```
git remote set-url origin git@github.com:EdgarPsrk/jsPractico.git
```
- Donde origin es el standar de la industria y es el alias que ricibe esa url, ademas la url que tenemos tiene que ser al del repositorio al que queremso apuntar con este alias.
Este comando sirve para cambiar el set que se agrego en ***git remote add origin "url"*** con lo cual podemos cambiar la direccion a donde estamos apuntando el repositorio para hacer el pull y el push de este.
```
git pull origin main --allow-unrelated-histories
```
- Resulve el problema de conflicto con historias de commit
```
git pull --rebase origin main
```
- Muy mala practica, pero puede ayudar a trackearte en el repositorio.
```
git rebase "branch"
```
- Nos permite hacer cambios silenciosos, funciona como un merge pero pega las ramas de un punto a otro por decir si hacemos cambios en branch2, hacemos commits, despues queremos que esos cambios y commits se pasen a main, debemos hacer un *git rebase main*, esto trae toda la historia de main a branch1, despues pasamos a main y desde ese punto hacemos un *git rebase branch1* elimina branch1, lo cual genera una sola historia de commits y es como si no hubieramos echo esos cambios en otra rama, si no que siempre se trabajo en main.