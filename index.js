function hola (a){
    return console.log(a);
}
hola("queshow");


//si

var c = (a = 1,b =2) => {
    return a + b + 3;
}

console.log(c());