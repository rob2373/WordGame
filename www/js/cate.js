var cine=["sopaC1.html","sopaC2.html","sopaC3.html","sopaC4.html","sopaC5.html"];
var historia=["sopaH1.html","sopaH2.html","sopaH3.html","sopaH4.html","sopaH5.html"];
var geografia=["sopaG1.html","sopaG2.html","sopaG3.html","sopaG4.html","sopaG5.html"];



function Scine(){
ranC=Math.floor(Math.random() * cine.length);
document.getElementById("Lcine").href=`${cine[ranC]}`;
}

function Shistoria(){
ranH=Math.floor(Math.random() * historia.length);
document.getElementById("Lhis").href=`${historia[ranH]}`;


}

function Sgeografia(){
ranG=Math.floor(Math.random() * geografia.length);
document.getElementById("Lgeo").href=`${geografia[ranG]}`;

}