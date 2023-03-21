function test(){
    console.log('Hay va');
}

let array=[];
let res=prompt();
while(res != 0){
    array.push(res);
    res=prompt();
} 

let sizeArr=array.length;
while(sizeArr>=0){
    console.log(array[sizeArr]);
    sizeArr--;
}

