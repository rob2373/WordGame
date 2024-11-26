window.addEventListener('load', ()=>{
    var info = localStorage.getItem('records');
    if(info==null){
    console.log("La llave en LS no existe");
    todo=[];
    console.log(todo);
    }
    else{
        console.log("La llave en LS exiaste y tienen información");
        todo = JSON.parse(info);
    console.log(todo);
   llenarTabla();
   
}
    });


    
    function llenarTabla(){
        tabla.innerHTML="";
        
  
        const l = todo.length;
        for (let i = 0; i < l; i++ ) {
          for (let j = 0; j < l - 1 - i; j++ ) {
            if ( todo[ j ].minutos > todo[ j + 1 ].minutos ) {
              [ todo[ j ], todo[ j + 1 ] ] = [ todo[ j + 1 ] , todo[ j ] ];
            }
            else if(todo[ j ].minutos == todo[ j + 1 ].minutos){
                if ( todo[ j ].segundos > todo[ j + 1 ].segundos ) {
                    [ todo[ j ], todo[ j + 1 ] ] = [ todo[ j + 1 ] , todo[ j ] ];
                  }
            }
          }
        }
    
    
    for (let i = 0; i < 10; i++) {
        //  const element = almmnos[index];
        tabla.innerHTML+=`
        <tr>
        <td style="font-family: 'Boogaloo', cursiva;  text-align: center; font-size: 1.2rem;"> ${i + 1}</td>
        <td style="font-family: 'Boogaloo', cursiva;  text-align: center; font-size: 1.2rem; border-left: 2px solid #000;"> ${todo[i].nombre}</td>
        <td style="font-family: 'Boogaloo', cursiva;  text-align: center; font-size: 1.2rem;  border-left: 2px solid #000; border-right: 2px solid #000;"> ${todo[i].categoria}</td>
        <td style="font-family: 'Boogaloo', cursiva;  text-align: center; font-size: 1.2rem;"> ${todo[i].minutos} : ${todo[i].segundos} </td>       
        </tr>
        
        `
    }
    }