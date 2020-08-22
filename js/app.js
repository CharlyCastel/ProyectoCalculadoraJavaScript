var Calculadora = {

    init: function(){

      var display = document.getElementById("display");
      var on = document.getElementById("on");
      var sign = document.getElementById("sign");
      var divide = document.getElementById("dividido");
      var display = document.getElementById("display");
      var siete = document.getElementById("7");
      var ocho = document.getElementById("8");
      var nueve = document.getElementById("9");
      var multiplica = document.getElementById("por");
      var cuatro = document.getElementById("4");
      var cinco = document.getElementById("5");
      var seis = document.getElementById("6");
      var resta = document.getElementById("menos");
      var uno = document.getElementById("1");
      var dos = document.getElementById("2");
      var tres = document.getElementById("3");
      var cero = document.getElementById("0");
      var punto = document.getElementById("punto");
      var igual = document.getElementById("igual");
      var suma = document.getElementById("mas");
      var raiz = document.getElementById('raiz');
      var numero1 = 0;
      var numero2 = 0;
      var resultado = "";
      var ope = 0;
      var isSign = false;

        uno.addEventListener("mousedown",function(){
            uno.setAttribute("style","transform:scale(0.85,0.85)")
        })
        uno.addEventListener("mouseup",function(){
            uno.setAttribute("style","transform:scale(1,1)")
        })
        dos.addEventListener("mousedown",function(){
            dos.setAttribute("style","transform:scale(0.85,0.85)")
        })
        dos.addEventListener("mouseup",function(){
            dos.setAttribute("style","transform:scale(1,1)")
        })
        tres.addEventListener("mousedown",function(){
            tres.setAttribute("style","transform:scale(0.85,0.85)")
        })
        tres.addEventListener("mouseup",function(){
            tres.setAttribute("style","transform:scale(1,1)")
        })
        cuatro.addEventListener("mousedown",function(){
            cuatro.setAttribute("style","transform:scale(0.85,0.85)")
        })
        cuatro.addEventListener("mouseup",function(){
            cuatro.setAttribute("style","transform:scale(1,1)")
        })
        cinco.addEventListener("mousedown",function(){
            cinco.setAttribute("style","transform:scale(0.85,0.85)")
        })
        cinco.addEventListener("mouseup",function(){
            cinco.setAttribute("style","transform:scale(1,1)")
        })
        seis.addEventListener("mousedown",function(){
            seis.setAttribute("style","transform:scale(0.85,0.85)")
        })
        seis.addEventListener("mouseup",function(){
            seis.setAttribute("style","transform:scale(1,1)")
        })
        siete.addEventListener("mousedown",function(){
            siete.setAttribute("style","transform:scale(0.85,0.85)")
        })
        siete.addEventListener("mouseup",function(){
            siete.setAttribute("style","transform:scale(1,1)")
        })
        ocho.addEventListener("mousedown",function(){
            ocho.setAttribute("style","transform:scale(0.85,0.85)")
        })
        ocho.addEventListener("mouseup",function(){
            ocho.setAttribute("style","transform:scale(1,1)")
        })
        nueve.addEventListener("mousedown",function(){
            nueve.setAttribute("style","transform:scale(0.85,0.85)")
        })
        nueve.addEventListener("mouseup",function(){
            nueve.setAttribute("style","transform:scale(1,1)")
        })
        cero.addEventListener("mousedown",function(){
            cero.setAttribute("style","transform:scale(0.85,0.85)")
        })
        cero.addEventListener("mouseup",function(){
            cero.setAttribute("style","transform:scale(1,1)")
        })
        sign.addEventListener("mousedown",function(){
            sign.setAttribute("style","transform:scale(0.85,0.85)")
        })
        sign.addEventListener("mouseup",function(){
            sign.setAttribute("style","transform:scale(1,1)")
        })
        raiz.addEventListener("mousedown",function(){
            raiz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        raiz.addEventListener("mouseup",function(){
            raiz.setAttribute("style","transform:scale(1,1)")
        })
        divide.addEventListener("mousedown",function(){
            divide.setAttribute("style","transform:scale(0.85,0.85)")
        })
        divide.addEventListener("mouseup",function(){
            divide.setAttribute("style","transform:scale(1,1)")
        })
        multiplica.addEventListener("mousedown",function(){
            multiplica.setAttribute("style","transform:scale(0.85,0.85)")
        })
        multiplica.addEventListener("mouseup",function(){
            multiplica.setAttribute("style","transform:scale(1,1)")
        })
        punto.addEventListener("mousedown",function(){
            punto.setAttribute("style","transform:scale(0.85,0.85)")
        })
        punto.addEventListener("mouseup",function(){
            punto.setAttribute("style","transform:scale(1,1)")
        })
        resta.addEventListener("mousedown",function(){
            resta.setAttribute("style","transform:scale(0.85,0.85)")
        })
        resta.addEventListener("mouseup",function(){
            resta.setAttribute("style","transform:scale(1,1)")
        })
        igual.addEventListener("mousedown",function(){
            igual.setAttribute("style","transform:scale(0.85,0.85)")
        })
        igual.addEventListener("mouseup",function(){
            igual.setAttribute("style","transform:scale(1,1)")
        })
        suma.addEventListener("mousedown",function(){
            suma.setAttribute("style","transform:scale(0.85,0.85)")
        })
        suma.addEventListener("mouseup",function(){
            suma.setAttribute("style","transform:scale(1,1)")
        })
        on.addEventListener("mousedown",function(){
            on.setAttribute("style","transform:scale(0.85,0.85)")
        })
        on.addEventListener("mouseup",function(){
            on.setAttribute("style","transform:scale(1,1)")
        })

      punto.onclick = function(){
      if(display.textContent == 0) {
                display.textContent = '0.';
            } else if(display.textContent.indexOf('.') == -1) {
                display.textContent += '.';
            }
       }
      uno.onclick = function(){
        if (display.textContent=="0"){
          display.textContent = "";
        }
        if(display.textContent.length >= 8){
      }else {
        display.textContent = display.textContent + "1";
      }
      }
      dos.onclick = function(){
        if (display.textContent=="0"){
          display.textContent = "";
        }
        if(display.textContent.length >= 8){
      }else {
        display.textContent = display.textContent + "2";
      }
      }
      tres.onclick = function(){
        if (display.textContent=="0"){
          display.textContent = "";
        }
        if(display.textContent.length >= 8){
      }else {
        display.textContent = display.textContent + "3";
      }
      }
      cuatro.onclick = function(){
        if (display.textContent=="0"){
          display.textContent = "";
        }
        if(display.textContent.length >= 8){
      }else {
        display.textContent = display.textContent + "4";
      }
      }
      cinco.onclick = function(){
        if (display.textContent=="0"){
          display.textContent = "";
        }
        if(display.textContent.length >= 8){
      }else {
        display.textContent = display.textContent + "5";
      }
      }
      seis.onclick = function(){
        if (display.textContent=="0"){
          display.textContent = "";
        }
        if(display.textContent.length >= 8){
      }else {
        display.textContent = display.textContent + "6";
      }
      }
      siete.onclick = function(){
        if (display.textContent=="0"){
          display.textContent = "";
        }
        if(display.textContent.length >= 8){
      }else {
        display.textContent = display.textContent + "7";
      }
      }
      ocho.onclick = function(){
        if (display.textContent=="0"){
          display.textContent = "";
        }
        if(display.textContent.length >= 8){
      }else {
        display.textContent = display.textContent + "8";
      }
      }
      nueve.onclick = function(){
        if (display.textContent=="0"){
          display.textContent = "";
        }
        if(display.textContent.length >= 8){
      }else {
        display.textContent = display.textContent + "9";
      }
      }
      cero.onclick = function(){
        if (display.textContent == "0") display.textContent = "";
        if(display.textContent.length >= 8){
      }else {
        display.textContent = display.textContent + "0";
      }
      }
      sign.onclick = function(){
        isSign = !isSign;
        if(isSign && display.textContent!="0"){
          display.textContent = "-" + display.textContent;
        }else{
        display.textContent = display.textContent.slice(1);
        }
      }

      on.onclick = function(){
        reset();
      }
      suma.onclick = function(){
        numero1 = display.textContent;
        resultado = "+";
        clear();
      }
      resta.onclick = function(){
        numero1 = display.textContent;
        resultado = "-";
        clear();
      }
      multiplica.onclick = function(){
        numero1 = display.textContent;
        resultado = "*";
        clear();
      }
      divide.onclick = function(){
        numero1 = display.textContent;
        resultado = "/";
        clear();
      }
      igual.onclick = function(){
        numero2 = display.textContent;
        operacion();
        myFunction();
      }
      function clear() {
        display.textContent = "";
      }
      function reset() {
        display.textContent = "0";
        numero1 = 0;
        numero2 = 0;
        resultado = "";
      }
      function operacion() {

        switch (resultado) {
          case "+":
            ope = parseFloat(numero1) + parseFloat(numero2);
            break;
          case "-":
            ope = parseFloat(numero1) - parseFloat(numero2);
            break;
          case "*":
            ope = parseFloat(numero1) * parseFloat(numero2);
            break;
          case "/":
            ope = parseFloat(numero1) / parseFloat(numero2);
            break;
        }
        display.textContent = ope;
      }
      function myFunction() {
        var substr;
        var resultado = display.textContent;

        substr = resultado.substring(0, 8);

        document.getElementById("display").innerHTML = substr;
      }

    }


  }
  Calculadora.init();
