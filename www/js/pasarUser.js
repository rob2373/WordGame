var usuarios=[];
//var nuevo= localStorage.getItem('user');
//usuarios=JSON.parse(nuevo);
window.addEventListener('load', ()=>{
var nuevo= localStorage.getItem('user');
if(nuevo==null){
console.log("La llave en LS no existe");
usuarios=[];
console.log(usuarios);
}
else{
    console.log("La llave en LS exiaste y tienen información");
usuarios=JSON.parse(nuevo);
console.log(usuarios);
for (let i = 0; i < usuarios.length; i++) {
    document.getElementById("use").innerHTML= usuarios[i].nombre; 
    
}
}
});


