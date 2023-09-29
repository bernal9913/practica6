function hola (a){
    return console.log(a);
}
hola("queshow");


//si

let a = 1;
let b = 2;
var c = (a = 1,b =2) => {
    return a + b + 3;
}