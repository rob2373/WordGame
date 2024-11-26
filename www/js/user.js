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
    }
});

var val1=0;

function categoria(){
    nom= document.getElementById("firstname");
    
    if(nom.value){
        nombre="";
        document.getElementById("Cate").href = "#";
        nombre = nom.value;
        Tnom = nombre.length;
        if (Tnom > 8){
        
            document.getElementById("Rec").href = "#";
            document.getElementById("defaul").style.display="none";
            document.getElementById("escribe").style.display="none";
            document.getElementById("borra").style.display="block";
            document.getElementById("especial").style.display="none";
        }
        else{
            val1=0
            for (let i = 0; i < Tnom; i++) {
                
                res = nombre.charAt(i);
                if(res === "@" || res === "#" || res === "$" || res === "&" || res === "/" ||res === ` ` || res === "!" || res === "°" || res === "=" || res === "`" || res === "'" || res === "["|| res === "]" || res === "{" || res === "}" || res === "(" || res === ")" || res === ";" || res === "|" || res === "¡" || res === "¿" || res === "?" || res === "+" || res === "~"|| res === "." || res === "," || res === ":"|| res === "-" || res === "_" || res === "<" || res === ">"|| res === "*" || res === "^"|| res === `"` ){
                    
                    val1=1;
                }
                
            }
            if(val1 == 1){
                document.getElementById("Cate").href = "#";
            
                document.getElementById("defaul").style.display="none";
                document.getElementById("escribe").style.display="none";
                document.getElementById("borra").style.display="none";
                document.getElementById("especial").style.display="block";
                document.getElementById("Rec").href = "#";
            }
            else if (val1 == 0){
                document.getElementById("Cate").href = "categorias.html";
                document.getElementById("Rec").href = "record.html";
                
                var usuario={
                    nombre: nom.value
                }
                usuarios.push(usuario);
                localStorage.setItem('user', JSON.stringify(usuarios));
                
                alert("Registrado");
                
                
            }
        }
        
    }
    
    else{
        
        document.getElementById("defaul").style.display="none";
        document.getElementById("escribe").style.display="block";
        document.getElementById("borra").style.display="none";
        document.getElementById("especial").style.display="none";
        
    }
    
}
