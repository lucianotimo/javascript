var punto = 0


//Reduccion de tamaño de teclas BOTON1
var boton1 = document.getElementById("1");

boton1.addEventListener("mousedown",function()
  {
  boton1.setAttribute("style","transform:scale(0.85,0.85)")
})

boton1.addEventListener("mouseup",function()
  {
  boton1.setAttribute("style","transform:scale(1,1)")
})

//Reduccion de tamaño de teclas BOTON2
var boton2 = document.getElementById("2");

boton2.addEventListener("mousedown",function()
  {
  boton2.setAttribute("style","transform:scale(0.85,0.85)")
})

boton2.addEventListener("mouseup",function()
  {
  boton2.setAttribute("style","transform:scale(1,1)")
})

//Reduccion de tamaño de teclas BOTON3
var boton3 = document.getElementById("3");

boton3.addEventListener("mousedown",function()
  {
  boton3.setAttribute("style","transform:scale(0.85,0.85)")
})

boton3.addEventListener("mouseup",function()
  {
  boton3.setAttribute("style","transform:scale(1,1)")
})

//Reduccion de tamaño de teclas BOTON4
var boton4 = document.getElementById("4");

boton4.addEventListener("mousedown",function()
  {
  boton4.setAttribute("style","transform:scale(0.85,0.85)")
})

boton4.addEventListener("mouseup",function()
  {
  boton4.setAttribute("style","transform:scale(1,1)")
})

//Reduccion de tamaño de teclas BOTON5
var boton5 = document.getElementById("5");

boton5.addEventListener("mousedown",function()
  {
  boton5.setAttribute("style","transform:scale(0.85,0.85)")
})

boton5.addEventListener("mouseup",function()
  {
  boton5.setAttribute("style","transform:scale(1,1)")
})

//Reduccion de tamaño de teclas BOTON6
var boton6 = document.getElementById("6");

boton6.addEventListener("mousedown",function()
  {
  boton6.setAttribute("style","transform:scale(0.85,0.85)")
})

boton6.addEventListener("mouseup",function()
  {
  boton6.setAttribute("style","transform:scale(1,1)")
})

//Reduccion de tamaño de teclas BOTON7
var boton7 = document.getElementById("7");

boton7.addEventListener("mousedown",function()
  {
  boton7.setAttribute("style","transform:scale(0.85,0.85)")
})

boton7.addEventListener("mouseup",function()
  {
  boton7.setAttribute("style","transform:scale(1,1)")
})

//Reduccion de tamaño de teclas BOTON8
var boton8 = document.getElementById("8");

boton8.addEventListener("mousedown",function()
  {
  boton8.setAttribute("style","transform:scale(0.85,0.85)")
})

boton8.addEventListener("mouseup",function()
  {
  boton8.setAttribute("style","transform:scale(1,1)")
})

//Reduccion de tamaño de teclas BOTON9
var boton9 = document.getElementById("9");

boton9.addEventListener("mousedown",function()
  {
  boton9.setAttribute("style","transform:scale(0.85,0.85)")
})

boton9.addEventListener("mouseup",function()
  {
  boton9.setAttribute("style","transform:scale(1,1)")
})

//Reduccion de tamaño de teclas BOTON0
var boton0 = document.getElementById("0");

boton0.addEventListener("mousedown",function()
  {
  boton0.setAttribute("style","transform:scale(0.85,0.85)")
})

boton0.addEventListener("mouseup",function()
  {
  boton0.setAttribute("style","transform:scale(1,1)")
})


//Reduccion de tamaño de teclas BOTONPUNTO
var botonpunto = document.getElementById("punto");

botonpunto.addEventListener("mousedown",function()
  {
  botonpunto.setAttribute("style","transform:scale(0.85,0.85)")
})

botonpunto.addEventListener("mouseup",function()
  {
  botonpunto.setAttribute("style","transform:scale(1,1)")
})

//Reduccion de tamaño de teclas BOTON
var botonsigno = document.getElementById("sign");

botonsigno.addEventListener("mousedown",function()
  {
  botonsigno.setAttribute("style","transform:scale(0.85,0.85)")
})

botonsigno.addEventListener("mouseup",function()
  {
  botonsigno.setAttribute("style","transform:scale(1,1)")
})

//Reduccion de tamaño de teclas BOTON
var botonraiz = document.getElementById("raiz");

botonraiz.addEventListener("mousedown",function()
  {
  botonraiz.setAttribute("style","transform:scale(0.85,0.85)")
})

botonraiz.addEventListener("mouseup",function()
  {
  botonraiz.setAttribute("style","transform:scale(1,1)")
})

//Reduccion de tamaño de teclas BOTON
var botondividido = document.getElementById("dividido");

botondividido.addEventListener("mousedown",function()
  {
  botondividido.setAttribute("style","transform:scale(0.85,0.85)")
})

botondividido.addEventListener("mouseup",function()
  {
  botondividido.setAttribute("style","transform:scale(1,1)")
})


//Reduccion de tamaño de teclas BOTON
var botonpor = document.getElementById("por");

botonpor.addEventListener("mousedown",function()
  {
  botonpor.setAttribute("style","transform:scale(0.85,0.85)")
})

botonpor.addEventListener("mouseup",function()
  {
  botonpor.setAttribute("style","transform:scale(1,1)")
})


//Reduccion de tamaño de teclas BOTON
var botonmenos = document.getElementById("menos");

botonmenos.addEventListener("mousedown",function()
  {
  botonmenos.setAttribute("style","transform:scale(0.85,0.85)")
})

botonmenos.addEventListener("mouseup",function()
  {
  botonmenos.setAttribute("style","transform:scale(1,1)")
})


//Reduccion de tamaño de teclas BOTON
var botonmas = document.getElementById("mas");

botonmas.addEventListener("mousedown",function()
  {
  botonmas.setAttribute("style","transform:scale(0.85,0.85)")
})

botonmas.addEventListener("mouseup",function()
  {
  botonmas.setAttribute("style","transform:scale(1,1)")
})


//Reduccion de tamaño de teclas BOTON
var botonigual = document.getElementById("igual");

botonigual.addEventListener("mousedown",function()
  {
  botonigual.setAttribute("style","transform:scale(0.85,0.85)")
})

botonigual.addEventListener("mouseup",function()
  {
  botonigual.setAttribute("style","transform:scale(1,1)")
})





//Reduccion de tamaño de teclas BOTON-ON
var botonon = document.getElementById("on");

botonon.addEventListener("mousedown",function()
  {
  botonon.setAttribute("style","transform:scale(0.85,0.85)")
})

botonon.addEventListener("mouseup",function()
  {
  botonon.setAttribute("style","transform:scale(1,1)")
})



//boton ON borra contenido
botonon.addEventListener("click",function()
{
document.getElementById("display").textContent = "0";
})












boton1.addEventListener("click",function()
{
escribir(1);
})

boton2.addEventListener("click",function()
{
escribir(2);
})

boton3.addEventListener("click",function()
{
escribir(3);
})

boton4.addEventListener("click",function()
{
escribir(4);
})

boton5.addEventListener("click",function()
{
escribir(5);
})

boton6.addEventListener("click",function()
{
escribir(6);
})

boton7.addEventListener("click",function()
{
escribir(7);
})

boton8.addEventListener("click",function()
{
escribir(8);
})

boton9.addEventListener("click",function()
{
escribir(9);
})

var contcero = 0

//boton 0
boton0.addEventListener("click",function()
{
  if (display.textContent == 0 && contcero == 0) {
    escribir(0);
    contcero = 1
  }
  else if (display.textContent !=0) {
    escribir(0);
  }
})

//boton punto
botonpunto.addEventListener("click",function()
{
if (display.textContent == 0 && punto == 0) {
  escribir('.')
  punto = 1;
}
else if (display.textContent != 0 && punto == 0)
{
  escribir (".")
  punto=1;
}
})



//funcion para el 0
function escribir(numero){
  if(display.textContent != 0){
    display.textContent +=numero;
}
else if (display.textContent == 0) {
  display.textContent =numero;
}
else if (display.textContent <= 0)
  {
    display.textContent +=numero;
  }
  display.innerHTML = display.innerHTML.substring(0, 8)
}

var numero="";


//MODIFICAR PARA QUE FUNCIONE CON RESULTADOS ANTERIORES
//Funcion para el signo +/-
botonsigno.addEventListener("click",function()
{
operando1 = display.innerHTML;
if (display.textContent != 0) {

}
display.innerHTML = Number(operando1) * Number(-1);
})







var num="display";

var operando1 = 0;
var operando2 = 0;
var operando3 = 0;
var contador = 0;
var suma = 0;
var resta = 0;
var por = 0;
var div = 0;


//boton ON/C vuelve contador a 0
botonon.addEventListener("click",function()
{
contador = 0 ;
operando1 = 0;
operando2 = 0;
operando3 = 0;
contador = 0;
suma = 0;
resta = 0;
por = 0;
div = 0;
punto = 0;
contigual = 0;
})





//boton MAS
botonmas.addEventListener("click",function()
{if (contigual == 0 && suma == 0) {
  suma ++;
  resta = 0;
  por = 0;
  div = 0;
  punto = 0;
  operando1 = display.innerHTML;
  display.innerHTML = "";
}
else if (suma > 0 || contigual > 0) {
  suma ++;
  resta = 0;
  por = 0;
  div = 0;
  punto = 0;
  operando3 = display.innerHTML;
  display.innerHTML = "";
}
else if (suma == 1 && contigual !=0 ) {
  suma ++;
  resta = 0;
  por = 0;
  div = 0;
  punto = 0;
  operando1 = display.innerHTML;
  display.innerHTML = "";
}
})



//boton MENOS
botonmenos.addEventListener("click",function()
{if (contigual == 0 && resta == 0) {
resta ++;
suma = 0;
por = 0;
div = 0;
punto = 0;
operando1 = display.innerHTML;
display.innerHTML = "";
}
else if (resta > 0 || contigual > 0) {
  suma = 0;
  resta ++;
  por = 0;
  div = 0;
  punto = 0;
  operando3 = display.innerHTML;
  display.innerHTML = "";
}
else if (resta == 1 && contigual != 0) {
  suma = 0;
  resta ++;
  por = 0;
  div = 0;
  punto = 0;
  operando1 = display.innerHTML;
  display.innerHTML = "";
}
})

//boton POR
botonpor.addEventListener("click",function()
{if (contigual == 0 && por == 0) {
por ++;
resta = 0;
suma = 0;
div = 0;
punto = 0;
operando1 = display.innerHTML;
display.innerHTML = "";
}
else if (por > 0 || contigual > 0) {
  suma = 0;
  resta = 0;
  por ++;
  div = 0;
  punto = 0;
  operando3 = display.innerHTML;
  display.innerHTML = "";
}
})

//boton DIV
botondividido.addEventListener("click",function()
{
div = 1;
resta = 0;
por = 0;
suma = 0;
punto = 0;
operando1 = display.innerHTML;
display.innerHTML = "";
})

/*
resultadoOperacion: function() {
if (operacion=="+") {
display.innerHTML=parseFloat(display.innerHTML)+parseFloat(aux);
aux=display.innerHTML
}
}
*/
var contigual = 0

//BOTON IGUAL
botonigual.addEventListener("click",function()
{if (contigual == 0) {
  {operando2 = display.innerHTML;
    if (suma > 0 )
    {
      display.innerHTML = Number(operando1) + Number(operando2);}

    else if (resta > 0 )
    {
      display.innerHTML = Number(operando1) - Number(operando2);}

    else if (por == 1) {
      display.innerHTML = Number(operando1) * Number(operando2);}

    else if (div == 1) {
      display.innerHTML = Number(operando1) / Number(operando2);}


  punto = 0
  display.innerHTML = display.innerHTML.substring(0, 8)

  operando3 = display.innerHTML
  contigual ++;
  }
}
else if (suma == 1 && contigual == 1) {
  operando3 = display.innerHTML;
  display.innerHTML = Number(operando2) + Number(operando3);
  display.innerHTML = display.innerHTML.substring(0, 8)
}
else if (suma > 0 && contigual > 0 ) {
  operando4 = display.innerHTML;
  display.innerHTML = Number(operando3) + Number(operando4);
  display.innerHTML = display.innerHTML.substring(0, 8)
}

else if (resta == 1 && contigual == 1) {
  operando3 = display.innerHTML;
  display.innerHTML = Number(operando3) - Number (operando2);
  display.innerHTML = display.innerHTML.substring(0, 8)
}
else if (resta > 0 && contigual > 0) {
  operando4 = display.innerHTML;
  display.innerHTML = Number(operando3) - Number (operando4);
  display.innerHTML = display.innerHTML.substring(0, 8)
}

else if (por == 1 && contigual == 1) {
  operando3 = display.innerHTML;
  display.innerHTML = Number(operando2) * Number (operando3);
  display.innerHTML = display.innerHTML.substring(0, 8)
}
else if (por > 0 && contigual > 0) {
  operando4 = display.innerHTML;
  display.innerHTML = Number(operando3) * Number (operando4);
  display.innerHTML = display.innerHTML.substring(0, 8)
}

else if (div == 1 && contigual == 1) {
  operando3 = display.innerHTML;
  display.innerHTML = Number(operando3) / Number (operando2);
  display.innerHTML = display.innerHTML.substring(0, 8)
}
else if (div > 0 && contigual > 0) {
  operando4 = display.innerHTML;
  display.innerHTML = Number(operando3) / Number (operando4);
  display.innerHTML = display.innerHTML.substring(0, 8)
}
}

)
