
function formulas(){
	let capListados = document.getElementById("listattos");
	let listados = capListados.value;

	let peso = Number(document.getElementById("peso").value);

	
	let dosisHierro=document.getElementById("dosishierro");
	let ttogd =document.getElementById("ttogd");

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
		//var res2 = parseInt(res);

		dosisHierro.value = res;	
		ttogd.value = res;

	}else if (listados=="tto2") {
		var res = peso * 3
		dosisHierro.value = res;
		ttogd.value = res;	
	}
}