/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var importeTotal;
	var descuento;

    importe = txtIdImporte.value
	importe = parseInt(importe);
	
	descuento = parseInt(descuento);
	descuento = importe * 25 / 100;
	importeTotal = importe - descuento;
	
	txtIdResultado.value = importeTotal;
	alert("El decuento es: " + descuento);
	
    


}
