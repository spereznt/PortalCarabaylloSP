<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script type="text/javascript" src="js/functions.js"></script>
	<title>Prueba</title>
</head>
<body>
	<form name="fdatos" method="post">
		<select id="lista">
			 <option selected>Seleccionar</option>
			 <option value="suma">Suma</option>
			 <option value="resta">Resta</option>
			 <option value="mult">Multiplicacion</option>
		 	 <option value="div">Division</option>
		 </select>
		 <br>
		 Introduce número 1: <input type="text" size="10" id = "num1" name="entrada"/><br><br>
		 Introduce número 2: <input type="text" size="10" id = "num2" name="entrada"/><br>

			<br>
		<button type="button" onclick="seleccionarLenguaje()">Calcular</button><br><br>
		<span type="text" name="result" id="result"></span><br><br>
		<input type="number" name="result2" id="result2" />
		
	</form>
</body>
</html>