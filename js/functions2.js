function formulas(){
	let capListados = document.getElementById("listattos");
	let listados = capListados.value;

	let peso = Number(document.getElementById("peso").value);

	
	let dosisHierro=document.getElementById("dosishierro");
	let ttogd =document.getElementById("ttogd");
	let ttomd= document.getElementById("ttomd");
	let gotasmg= document.getElementById("gotasmg");
	let gotasml= document.getElementById("gotasml");

	if (listados=="") {
		Swal.fire({
			icon: 'error',
			title: '::Essalud::',
			text: 'Seleccionar el Tipo de Tratamiento',
			//footer: '<a href="">Why do I have this issue?</a>'
		  });
	}else if (peso=="") {
		
		Swal.fire({
			icon: 'error',
			title: '::Essalud::',
			text: 'Colocar Peso',
			//footer: '<a href="">Why do I have this issue?</a>'
		  });
	}else if (listados=="tto1") {
		var res = peso * 2;
		var res2 = parseInt(Math.round(res * 20 / 25));
		var res3 = parseInt(Math.round(res * 5 / 15));
		var res4 = parseInt(Math.round(res2 * 30 / 400));
		var res5 = parseInt(Math.round(res3 * 30 / 180));

		dosisHierro.value = res;	
		ttogd.value = res2;
		ttomd.value = res3;
	    gotasmg.value = res4;
		gotasml.value = res5;

	}else if (listados=="tto2") {
		var res = peso * 3
		var res2 = parseInt(Math.round(res * 20 / 25));
		var res3 = parseInt(Math.round(res * 5 / 15));
		var res4 = parseInt(Math.round(res2 * 30 / 400));
		var res5 = parseInt(Math.round(res3 * 30 / 180));

		dosisHierro.value = res;
		ttogd.value = res2;	
		ttomd.value = res3;
		gotasmg.value = res4;
		gotasml.value = res5;
	}
}