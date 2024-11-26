var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
	// 	A1   A2   A3  A4  A5  A6  A7  A8  A9  A10 A11 A12}
var R1= ["C","A","B","S","O","L","U","T","I","S","M","O"];
	//  B1  B2  B3   B4  B5  B6  B7  B8  B9  B10 |B11 B12
var R2= ["O","S","A","O","S","E","V","T","F","E","A","J"];
	//  C1 {C2  C3   C4  C5  C6  C7  C8}  C9 |C10|C11 C12
var R3= ["S","A","I","C","N","E","I","C","D","I","I","P"];
	//  D1  D2  D3   D4  D5  D6  D7  D8 |D9  D10|D11 D12
var R4= ["T","N","G","L","I","A","Ñ","U","G","A","T","I"];
	//  E1  E2  E3   E4  E5  E6  E7  |E8  E9 E10|E11 E12
var R5= ["F","V","Z","E","H","R","O","O","C","E","S","T"];
    //  F1  F2  F3   F4  F5  F6  |F7  F8  F9 F10 |F11 F12
var R6= ["A","M","D","I","U","C","L","B","V","S","A","A"];
    //  G1  G2  G3   G4  G5  |G6  G7  G8  G9 |G10 |G11 G12
var R7= ["U","J","S","E","P","O","S","E","E","R","N","L"];
    //  H1  H2  H3   H4  |H5  H6  H7  H8 |H9 H10 |H11 H12
var R8= ["A","O","F","R","E","I","C","L","T","R","I","I"];
    //	I1  I2   I3  |I4  I5  I6  I7 |I8  I9  I10|I11 I12
var R9= ["O","L","R","U","P","U","X","E","I","A","D","S"];
    //	J1   J2  |J3  J4  J5  J6  J7  J8  J9 J10 J11 J12
var R10=["S","O","Q","E","D","A","N","A","E","R","G","M"];
    //	 K1  |K2  K3  {K4  K5  K6  K7  K8  K9  K10 K11 K12}
var R11=["B","R","Z","A","T","S","I","U","Q","N","O","C"];
    //	 |L1   L2  L3  L4  L5  L6  L7 L8  L9  L10 L11 L12
var R12=["A","S","O","V","A","L","C","S","E","I","N","I"];

const tiempo=[];
var todo=[];

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
    }
    });





window.addEventListener('load',() =>{
    llenar();
})

function llenar(){
 for (let i = 0; i < 12; i++) {

    id= i+1;
    document.getElementById(`A${id}`).textContent=R1[i]; 
    document.getElementById(`B${id}`).textContent=R2[i];
    document.getElementById(`C${id}`).textContent=R3[i];
    document.getElementById(`D${id}`).textContent=R4[i];
    document.getElementById(`E${id}`).textContent=R5[i];
    document.getElementById(`F${id}`).textContent=R6[i];
    document.getElementById(`G${id}`).textContent=R7[i];
    document.getElementById(`H${id}`).textContent=R8[i];
    document.getElementById(`I${id}`).textContent=R9[i];
    document.getElementById(`J${id}`).textContent=R10[i];
    document.getElementById(`K${id}`).textContent=R11[i];
    document.getElementById(`L${id}`).textContent=R12[i];


    
 }
}
function inicio () {
	control = setInterval(cronometro,10);
	
}
function parar () {
	clearInterval(control);
	
}
function reinicio () {
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
	document.getElementById("inicio").disabled = false;
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = true;
}
function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ": "+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ""+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;

		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
}
window.onload = inicio();
var color=["FFA2D0","A5EC5A","A4FAE9"];
ran=Math.floor(Math.random()* color.length);

function prueba(info){
    sA1 = document.getElementById(info).title; 
    console.log(info);
    if (sA1 === "0"){   
        document.getElementById(info).style.backgroundColor=`#${color[ran]}`;     
        sA1 = document.getElementById(info).title="1"; 
        
    }
else if( sA1 === "1"){
    document.getElementById(info).style.backgroundColor="#D9D9D9";     
    sA1 = document.getElementById(info).title="0"; 
    
}
}

function listo(){

     //Arte
    P1L1 = document.getElementById("F11").title; 
    P1L2 = document.getElementById("G10").title; 
    P1L3 = document.getElementById("H9").title; 
    P1L4 = document.getElementById("I8").title;

    // arqueología
    P2L1 = document.getElementById("B11").title; 
    P2L2 = document.getElementById("C10").title; 
    P2L3 = document.getElementById("D9").title;
    P2L4 = document.getElementById("E8").title; 
    P2L5 = document.getElementById("F7").title;
    P2L6 = document.getElementById("G6").title; 
    P2L7 = document.getElementById("H5").title;
    P2L8 = document.getElementById("I4").title;
    P2L9 = document.getElementById("J3").title;
    P2L10 = document.getElementById("K2").title;
    P2L11 = document.getElementById("L1").title;
    //Cinecia
    P3L1 = document.getElementById("C2").title;
    P3L2 = document.getElementById("C3").title;
    P3L3 = document.getElementById("C4").title;
    P3L4 = document.getElementById("C5").title;
    P3L5 = document.getElementById("C6").title;
    P3L6 = document.getElementById("C7").title;
    P3L7 = document.getElementById("C8").title;
    //Absolutismo
    P4L1 = document.getElementById("A2").title; 
    P4L2 = document.getElementById("A3").title; 
    P4L3 = document.getElementById("A4").title; 
    P4L4 = document.getElementById("A5").title;
    P4L5 = document.getElementById("A6").title; 
    P4L6 = document.getElementById("A7").title;
    P4L7 = document.getElementById("A8").title; 
    P4L8 = document.getElementById("A9").title;
    P4L9 = document.getElementById("A10").title;
    P4L10 = document.getElementById("A11").title;
    P4L11 = document.getElementById("A12").title;
    //Conquista
    P5L1 = document.getElementById("K4").title;
    P5L2 = document.getElementById("K5").title;
    P5L3 = document.getElementById("K6").title;
    P5L4 = document.getElementById("K7").title;
    P5L5 = document.getElementById("K8").title;
    P5L6 = document.getElementById("K9").title;
    P5L7 = document.getElementById("K10").title;
    P5L8 = document.getElementById("K11").title;
    P5L9 = document.getElementById("K12").title;

    //Dinastia
    P6L1 = document.getElementById("I11").title; 
    P6L2 = document.getElementById("H11").title; 
    P6L3 = document.getElementById("G11").title; 
    P6L4 = document.getElementById("F11").title; 
    P6L5 = document.getElementById("E11").title;
    P6L6 = document.getElementById("D11").title; 
    P6L7 = document.getElementById("C11").title;
    P6L8 = document.getElementById("B11").title;

     if((P1L1 === "1")&& (P1L2 === "1")&& (P1L3 === "1" )&& (P1L4 === "1") && (P2L1 === "1") && (P2L2  === "1") && (P2L3  === "1") && (P2L4  === "1") && (P2L5  === "1" )&& (P2L6  === "1") && (P2L7  === "1" ) && (P2L8  === "1") && (P2L9  === "1") && (P2L10  === "1" ) && (P2L11  === "1") && (P5L1 === "1" )&& (P5L2 === "1") && (P5L3 === "1" )&& (P5L4 === "1" ) && (P5L5 === "1" )&& (P5L6 === "1") && (P5L7 === "1" )&& (P5L8 === "1" )&& (P5L9 === "1") && (P6L1 === "1" )&& (P6L2 === "1" )&& (P6L3 === "1" )&& (P6L4 === "1" )&& (P6L5 === "1" )&& (P6L6 === "1" ) && (P6L7 == "1") && (P6L8 == "1") && (P4L1 === "1" )&& (P4L2 === "1" )&& (P4L3 === "1" )&&( P4L4 === "1" )&& (P4L5 === "1" ) && (P4L6 === "1" ) && (P4L7 === "1" ) && (P4L8 === "1" ) && (P4L9 === "1" ) && (P4L10 === "1" ) && (P4L11 === "1" ) && (P3L1 === "1" )&& (P3L2 === "1" )&& (P3L3 === "1" ) && (P3L4 === "1" ) && (P3L5 === "1" )&& (P3L6 === "1" )&& (P3L7 === "1" )){
                    if((A1.title==="1") || (B1.title==="1") || (B2.title==="1") || (B3.title==="1") || (B4.title==="1") || (B5.title==="1") || (B6.title==="1") || (B7.title==="1") || (B8.title==="1") || (B9.title==="1") || (B10.title==="1") || (C1.title==="1") || (C9.title==="1") || (D1.title==="1") || (D2.title==="1") || (D3.title==="1") || (D4.title==="1") || (D5.title==="1") || (D6.title==="1") || (D7.title==="1") || (D8.title==="1") || (D10.title==="1") || (E1.title==="1") || (E2.title==="1") || (E3.title==="1") || (E4.title==="1") || (E5.title==="1") || (E6.title==="1") || (E7.title==="1") || (E9.title==="1") || (E10.title==="1") || (F1.title==="1") || (F2.title==="1") || (F3.title==="1") || (F4.title==="1") || (F5.title==="1") || (F6.title==="1") || (F8.title==="1") || (F9.title==="1") || (F10.title==="1") || (G1.title==="1") || (G2.title==="1") || (G3.title==="1") || (G4.title==="1") || (G5.title==="1") || (G7.title==="1") || (G8.title==="1") || (G9.title==="1") || (G9.title==="1") || (G12.title==="1") || (B12.title==="1") || (C12.title==="1") || (D12.title==="1") || (E12.title==="1") || (F12.title==="1") || (H1.title==="1") || (H2.title==="1") || (H3.title==="1") || (H4.title==="1") || (H6.title==="1") || (H7.title==="1") || (H8.title==="1") || (H12.title==="1") || (H10.title==="1") || (I1.title==="1") || (I2.title==="1") || (I3.title==="1") || (I5.title==="1") || (I6.title==="1") || (I7.title==="1") || (I9.title==="1") || (I10.title==="1") || (I12.title==="1") || (J1.title==="1") || (J2.title==="1") || (J4.title==="1") || (J5.title==="1") || (J6.title==="1") || (J7.title==="1") || (J8.title==="1") || (J9.title==="1") || (J10.title==="1") || (J11.title==="1") || (J12.title==="1") || (K1.title==="1") || (K3.title==="1") || (L2.title==="1") || (L3.title==="1") || (L4.title==="1") || (L5.title==="1") || (L6.title==="1") || (L7.title==="1") || (L8.title==="1") || (L9.title==="1") || (L10.title==="1") || (L11.title==="1")|| (L12.title==="1")){
        console.log("celdas de más");
       correcto=0;

        }
        else{
           correcto=1;


            console.log("correcto");
        
        }  
    }
    else{
       correcto=0;
        console.log("incorrecto");
       
       
    }
    

    if(correcto == 0){
        document.getElementById("error").style.display="block";
        document.getElementById("correcto").style.display="none";
        document.getElementById("record").style.display="none";
  }
      else if(correcto == 1){
//captura tiempo y localstorage
parar();
seg = segundos;
tiempo.push(seg);
min = minutos;
tiempo.unshift(min);
console.log(tiempo);
 nombreU = document.getElementById("use").textContent; 
var recor={
    nombre: nombreU,
    categoria: "Historia",
    minutos: min,
    segundos: seg
}

todo.push(recor);
console.log(todo.length)
localStorage.setItem('records', JSON.stringify(todo));
//enlaces
document.getElementById("correcto").style.display="block";
document.getElementById("record").style.display="block";
document.getElementById("error").style.display="none";
document.getElementById("exit").href="categorias.html";
document.getElementById("puntaje").href="record.html";
document.getElementById("Lrecord").href="record.html";
      } 
  
}