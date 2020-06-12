function identificacao() {
    var radios = document.getElementsByName("usuario");
    if (radios[0].checked == true) {
            window.location.href = "login.html";
        }
    if (radios[1].checked == true) {
            window.location.href = "cadastro.html";
        }
}

function logar() {
    var usu = document.getElementById( "user" ).value
	var sen = document.getElementById( "senhha" ).value
	
	if (usu=="admin" && sen=="1234"){
			window.location.href = "calculadora.html";
		}
}



function validar(){
	
	alert("Usuário e Senha Criados com Sucesso !");
	
}

function calcular(e){
	var operador = e.value;

   var num1 = parseFloat(document.getElementById("num1").value);
   var num2 = parseFloat(document.getElementById("num2").value);

   var resultado = eval(num1+operador+num2);

   if(!isNaN(resultado)){
      //alert(resultado);
	  document.getElementById("demo1").innerHTML = resultado;
   }
}

function pot() {
	
	var num3 = parseFloat(document.getElementById("num3").value);
	var num4 = parseFloat(document.getElementById("num4").value);
	
	document.getElementById("demo").innerHTML = Math.pow(num3, num4);
}

function rad() {
	
	var num3 = parseFloat(document.getElementById("num3").value);
	var num4 = parseFloat(document.getElementById("num4").value);
	
	var raiz = (num3 ** (1/num4));
	
	document.getElementById("demo").innerHTML = raiz;
}

function historico(){
	window.location.href = "historico.html";
}