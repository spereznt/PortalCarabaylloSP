function seleccionarLenguaje(){

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    
    let suma = n1 + n2;
    let resta = n1 - n2;
    let mult = n1 * n2;
    let div = n1/n2;
    let result = document.getElementById("result2");
    //let caja = $("#result")

    let cbxLenguajes = document.getElementById('lista');
    let lenguaje = cbxLenguajes.value;

    if (lenguaje == "suma") {
        document.getElementById('result').innerText = `Ud. ha seleccionado el lenguaje ${lenguaje}. resultado es:  ${suma} ` ; 
        result.value = suma ;   
    }else if(lenguaje=="resta"){
        document.getElementById('result').innerText = `Ud. ha seleccionado el lenguaje ${lenguaje}. resultado es:  ${resta} ` ;
        document.getElementById('result2').innerText = `Ud. ha seleccionado el lenguaje ${lenguaje}. resultado es:  ${resta} ` ;
    }else if(lenguaje=="mult"){
        document.getElementById('result').innerText = `Ud. ha seleccionado el lenguaje ${lenguaje}. resultado es:  ${mult} ` ;
        document.getElementById('result2').innerText = `Ud. ha seleccionado el lenguaje ${lenguaje}. resultado es:  ${mult} ` ;
    }else if(lenguaje=="div"){
        document.getElementById('result').innerText = `Ud. ha seleccionado el lenguaje ${lenguaje}. resultado es:  ${div} ` ; 
        document.getElementById('result2').innerText = `Ud. ha seleccionado el lenguaje ${lenguaje}. resultado es:  ${div} ` ; 
    }else{
        document.getElementById('result').innerText = `Ud. ha seleccionado el lenguaje ${lenguaje}. resultado es:  Error ` ; 
    }
    
}