function seleccionarLenguaje(){

    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let suma = n1 + n2;
    let resta = n1 - n2;
    let mult = n1 * n2;
    let div = n1/n2;

    let cbxLenguajes = document.getElementById('lista');
    let lenguaje = cbxLenguajes.value;

    if (lenguaje == "suma") {
        document.getElementById('result').innerText = `Ud. ha seleccionado el lenguaje ${lenguaje}. resultado es:  ${suma} ` ;    
    }else if(lenguaje=="resta"){
        document.getElementById('result').innerText = `Ud. ha seleccionado el lenguaje ${lenguaje}. resultado es:  ${resta} ` ;
    }else if(lenguaje=="mult"){
        document.getElementById('result').innerText = `Ud. ha seleccionado el lenguaje ${lenguaje}. resultado es:  ${mult} ` ;
    }else if(lenguaje=="div"){
        document.getElementById('result').innerText = `Ud. ha seleccionado el lenguaje ${lenguaje}. resultado es:  ${div} ` ; 
    }else{
        document.getElementById('result').innerText = `Ud. ha seleccionado el lenguaje ${lenguaje}. resultado es:  Error ` ; 
    }
    
}