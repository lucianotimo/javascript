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


var Calculadora = {
  display: document.getElementById('display'),
  uno: document.getElementById('1'),
  dos: document.getElementById('2'),
  tres: document.getElementById('3'),
  cuatro: document.getElementById('4'),
  cinco: document.getElementById('5'),
  seis: document.getElementById('6'),
  siete: document.getElementById('7'),
  ocho: document.getElementById('8'),
  nueve: document.getElementById('9'),
  cero: document.getElementById('0'),
  on: document.getElementById('on'),
  sign: document.getElementById('sign'),
  mas: document.getElementById('mas'),
  menos: document.getElementById('menos'),
  por: document.getElementById('por'),
  dividido: document.getElementById('dividido'),
  igual: document.getElementById('igual'),
  punto: document.getElementById('punto'),
  tecla: document.querySelectorAll('.tecla'),
  aux: 0,
  operacion: "",
  init: function() {
    this.eventos()
  },
  eventos: function() {
    this.uno.addEventListener('click', function() {
      Calculadora.mostrar("1")
    })
    this.dos.addEventListener('click', function() {
      Calculadora.mostrar("2")
    })
    this.tres.addEventListener('click', function() {
      Calculadora.mostrar("3")
    })
    this.cuatro.addEventListener('click', function() {
      Calculadora.mostrar("4")
    })
    this.cinco.addEventListener('click', function() {
      Calculadora.mostrar("5")
    })
    this.seis.addEventListener('click', function() {
      Calculadora.mostrar("6")
    })
    this.siete.addEventListener('click', function() {
      Calculadora.mostrar("7")
    })
    this.ocho.addEventListener('click', function() {
      Calculadora.mostrar("8")
    })
    this.nueve.addEventListener('click', function() {
      Calculadora.mostrar("9")
    })
    this.nueve.addEventListener('mousedown', function() {
      this.style.transform="scale(0.9)"
    })
    this.nueve.addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    })
    this.cero.addEventListener('click', function() {
      Calculadora.mostrar("0")
    })
    this.on.addEventListener('click', function() {
      display.innerHTML = 0
    })
    this.sign.addEventListener('click', function() {
      maso = display.innerHTML
      maso = parseInt(maso)
      display.innerHTML *= -1
    })
    this.mas.addEventListener('click', function() {
      Calculadora.sumar()
    })
    this.menos.addEventListener('click', function() {
      Calculadora.restar()
    })
    this.por.addEventListener('click', function() {
      Calculadora.multiplicar()
    })
    this.dividido.addEventListener('click', function() {
      Calculadora.dividir()
    })
    this.punto.addEventListener('click', function() {
      Calculadora.validarPunto()
    })
    this.igual.addEventListener('click', function() {
      Calculadora.resultadoOperacion()
    })
  },
  validarPunto:function(){
    if(display.innerHTML.indexOf(".")==-1){
      display.innerHTML += "."
    }
  },
  mostrar: function(num) {
    if (display.innerHTML.substring(0) == "0") {
      display.innerHTML = display.innerHTML.substring(1)
    }
    display.innerHTML += num
    display.innerHTML = display.innerHTML.substring(0, 8)
  },
  sumar: function() {
    aux = display.innerHTML
    display.innerHTML = ""
    operacion = "+"
  },
  restar: function() {
    aux = display.innerHTML
    display.innerHTML = ""
    operacion = "-"
  },
  multiplicar: function() {
    aux = display.innerHTML
    display.innerHTML = ""
    operacion = "*"
  },
  dividir: function() {
    aux = display.innerHTML
    display.innerHTML = ""
    operacion = "/"
  },
  resultadoOperacion: function() {
    if (operacion=="+") {
      display.innerHTML=parseFloat(display.innerHTML)+parseFloat(aux);
      aux=display.innerHTML
    }else if (operacion=="-") {
      display.innerHTML=parseFloat(aux)-parseFloat(display.innerHTML);
      aux=display.innerHTML
    }else if (operacion=="*") {
      display.innerHTML=parseFloat(display.innerHTML)*parseFloat(aux);
      aux=display.innerHTML
    }else if (operacion=="/") {
      display.innerHTML=parseFloat(aux)/parseFloat(display.innerHTML);
      aux=display.innerHTML

    }
  }
}
Calculadora.init()
