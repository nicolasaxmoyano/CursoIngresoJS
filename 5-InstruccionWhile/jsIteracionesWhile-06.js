function mostrar()
{
	// Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. // 
	
	var i;
	var acumulador;
	var numeroIngresado;

	i = 0;
	acumulador = 0;

	
	while(i<5)
	{
		numeroIngresado = prompt("Ingrese un número")
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		i = i + 1;
	}
	
	
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador / 5;
}