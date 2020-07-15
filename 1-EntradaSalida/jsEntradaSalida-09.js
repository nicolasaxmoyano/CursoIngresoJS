/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var sueldoTotal;
	var aumento;

	sueldo = txtIdSueldo.value
	sueldo = parseInt(sueldo);
	
	aumento = parseInt(aumento);
	aumento = sueldo * 10 / 100;
	sueldoTotal = aumento + sueldo;
	
	txtIdResultado.value = sueldoTotal;
	alert("El aumento es: " + aumento);


}
