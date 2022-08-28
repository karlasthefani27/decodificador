var inputTexto = document.querySelector('.caixa-texto'); // "." indicando a classe
var mensagem = document.querySelector('.resultado');
//var botaoCopiar = document.querySelector('.copyButton');



	function btnEncriptar() {

		var textoEncryptado = encriptar(inputTexto.value);
		mensagem.value = textoEncryptado;
	
	}


	function encriptar(stringEncriptada) {

    	var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
   		stringEncriptada = stringEncriptada.toLowerCase();

			for(var i=0; i < matrizCodigo.length; i++) {

				if(stringEncriptada.includes(matrizCodigo[i][0])) {
				stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
			}
		}
			
			return stringEncriptada;					
	}
			

	function btnDesencriptar() {

		var textDesencrypt = desencriptar(inputTexto.value);
		mensagem.value = textDesencrypt;
	}



	function desencriptar(stringDesencriptada) {

		var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]] //conjuto de arrays

		stringDesencriptada = stringDesencriptada.toLowerCase();

			for(var i= 0; i < matrizCodigo.length; i++) {

				if(stringDesencriptada.includes(matrizCodigo[i][1])) {
				stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])	

			}
	
		}

		return stringDesencriptada;		
	}


	function btnCopy() {

			var mensagem = document.querySelector('.resultado');
			mensagem.select();

			navigator.clipboard.writeText(mensagem.value);
			mensagem.value = "";
	}

