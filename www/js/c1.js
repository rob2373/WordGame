var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
	//	A1  A2  A3  A4  A5  A6  A7  A8  A9  A10 A11 A12
var R1=["A","R","D","S","A","T","L","O","B","D","A","T"];
	//	B1  B2  B3  B4  B5  B6  B7  B8  B9  B10 B11 B12
var R2=["V","S","A","F","S","E","V","T","F","C","C","E"];
var R3=["E","R","R","T","D","I","L","G","D","B","V","R"];
var R4=["N","N","G","W","A","I","Ñ","U","N","A","L","M"];
var R5=["G","V","Z","U","D","V","S","E","A","J","O","I"];
var R6=["E","M","D","O","U","S","A","B","V","A","X","N"];
var R7=["R","J","Y","P","C","A","A","D","S","O","U","E"];
var R8=["S","O","F","H","K","I","C","L","C","I","E","I"];
var R9=["I","L","E","C","Q","U","X","O","Ñ","P","Q","T"];
var R10=["O","P","W","Z","X","I","C","N","D","A","R","O"];
var R11=["P","K","S","X","B","P","C","M","S","S","T","R"];
var R12=["R","A","L","E","T","S","E","R","E","T","N","I"];

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
    d1= document.getElementById("I1").title;
     d2=document.getElementById("J1").title; 
     d3=document.getElementById("K1").title;
    P1L1 = document.getElementById("A1").title; 
    P1L2 = document.getElementById("B1").title; 
    P1L3 = document.getElementById("C1").title; 
    P1L4 = document.getElementById("D1").title;
    P1L5 = document.getElementById("E1").title; 
    P1L6 = document.getElementById("F1").title;
    P1L7 = document.getElementById("G1").title; 
    P1L8 = document.getElementById("H1").title;
    P2L1 = document.getElementById("A12").title; 
    P2L2 = document.getElementById("B12").title; 
    P2L3 = document.getElementById("C12").title; 
    P2L4 = document.getElementById("D12").title;
    P2L5 = document.getElementById("E12").title; 
    P2L6 = document.getElementById("F12").title;
    P2L7 = document.getElementById("G12").title; 
    P2L8 = document.getElementById("H12").title;
    P2L9 = document.getElementById("I12").title;
    P2L10 = document.getElementById("J12").title;
    P2L11 = document.getElementById("K12").title;
    P3L1 = document.getElementById("A9").title;
    P3L2 = document.getElementById("A8").title;
    P3L3 = document.getElementById("A7").title;
    P3L4 = document.getElementById("A6").title;
    P4L1 = document.getElementById("L1").title; 
    P4L2 = document.getElementById("L2").title; 
    P4L3 = document.getElementById("L3").title; 
    P4L4 = document.getElementById("L4").title;
    P4L5 = document.getElementById("L5").title; 
    P4L6 = document.getElementById("L6").title;
    P4L7 = document.getElementById("L7").title; 
    P4L8 = document.getElementById("L8").title;
    P4L9 = document.getElementById("L9").title;
    P4L10 = document.getElementById("L10").title;
    P4L11 = document.getElementById("L11").title;
    P4L12 = document.getElementById("L12").title;
    P5L1 = document.getElementById("G10").title;
    P5L2 = document.getElementById("H9").title;
    P5L3 = document.getElementById("I8").title;
    P5L4 = document.getElementById("J7").title;
    P6L1 = document.getElementById("A2").title; 
    P6L2 = document.getElementById("B3").title; 
    P6L3 = document.getElementById("C4").title; 
    P6L4 = document.getElementById("D5").title;
    P6L5 = document.getElementById("E6").title; 
    P6L6 = document.getElementById("F7").title;

     if((P1L1 === "1")&& (P1L2 === "1")&& (P1L3 === "1" )&& (P1L4 === "1") && (P1L5 === "1") && (P1L6 === "1") && (P1L7 === "1" )&& (P1L8 === "1") && (P2L1 === "1") && (P2L2  === "1") && (P2L3  === "1") && (P2L4  === "1") && (P2L5  === "1" )&& (P2L6  === "1") && (P2L7  === "1" )&& (P2L8  === "1") && (P2L9  === "1") && (P2L10 === "1") && (P2L11 === "1") && (P5L1 === "1" )&& (P5L2 === "1") && (P5L3 === "1" )&& (P5L4 === "1" )&& (P6L1 === "1" )&& (P6L2 === "1" )&& (P6L3 === "1" )&& (P6L4 === "1" )&& (P6L5 === "1" )&& (P6L6 === "1" )&& (P4L1 === "1" )&& (P4L2 === "1" )&& (P4L3 === "1" )&&( P4L4 === "1" )&& (P4L5 === "1" )&& (P4L6 === "1" )&& (P4L7 === "1" )&& (P4L8 === "1" )&& (P4L9 === "1" )&& (P4L10 === "1" )&& (P4L11 === "1")&& (P4L12 === "1" )&& (P3L1 === "1" )&& (P3L2 === "1" )&& (P3L3 === "1" )&& (P3L4 === "1" )){
        if( (I1.title==="1") || (J1.title==="1") || (K1.title==="1") || (B2.title==="1") || (C2.title==="1") || (D2.title==="1") || (E2.title==="1") || (F2.title==="1") || (G2.title==="1") || (H2.title==="1") || (I2.title==="1") || (J2.title==="1") || (K2.title==="1") || (A3.title==="1") || (C3.title==="1") || (D3.title==="1") || (E3.title==="1") || (F3.title==="1") || (G3.title==="1") || (H3.title==="1") || (I3.title==="1") || (J3.title==="1") || (K3.title==="1") || (A4.title==="1") || (B4.title==="1") || (D4.title==="1") || (E4.title==="1") || (F4.title==="1") || (G4.title==="1") || (H4.title==="1") || (I4.title==="1") || (J4.title==="1") || (K4.title==="1") || (A5.title==="1") || (B5.title==="1") || (C5.title==="1") || (E5.title==="1") || (F5.title==="1") || (G5.title==="1") || (H5.title==="1") || (I5.title==="1") || (J5.title==="1") || (K5.title==="1") || (B6.title==="1") || (C6.title==="1") || (D6.title==="1") || (F6.title==="1") || (G6.title==="1") || (H6.title==="1") || (I6.title==="1") || (J6.title==="1") || (K6.title==="1") || (B7.title==="1") || (C7.title==="1") || (D7.title==="1") || (E7.title==="1") || (G7.title==="1") || (H7.title==="1") || (I7.title==="1") || (K7.title==="1") || (B8.title==="1") || (C8.title==="1") || (D8.title==="1") || (E8.title==="1") || (F8.title==="1") || (G8.title==="1") || (H8.title==="1") || (J8.title==="1") || (K8.title==="1") || (B9.title==="1") || (C9.title==="1") || (D9.title==="1") || (E9.title==="1") || (F9.title==="1") || (G9.title==="1") || (I9.title==="1") || (J9.title==="1") || (K9.title==="1")  || (A10.title==="1") || (B10.title==="1") || (C10.title==="1") || (D10.title==="1") || (E10.title==="1") || (F10.title==="1") || (H10.title==="1") || (I10.title==="1") || (J10.title==="1") || (K10.title==="1") || (A11.title==="1") || (B11.title==="1") || (C11.title==="1") || (D11.title==="1") || (E11.title==="1") || (F11.title==="1") || (G11.title==="1") || (H11.title==="1") || (I11.title==="1") || (J11.title==="1") || (K11.title==="1")){
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
            categoria: "Cine",
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