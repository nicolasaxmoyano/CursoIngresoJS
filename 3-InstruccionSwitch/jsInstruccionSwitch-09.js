function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var precioBase;
	var porcentaje;
	var importeFinal;

	precioBase = 15000;


	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 1.2
					break;
				case "Cordoba":
				case "Cataratas":	
					porcentaje = 0.9
					break;
				case "Mar del plata":
					porcentaje = 0.8
					break;			
			}
		break;	
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 0.8
					break;
				case "Cordoba":
				case "Cataratas":
					porcentaje = 1.1
					break;
				case "Mar del plata":
					porcentaje = 1.2	
					break;		
					
			}
		break;	
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = 1.1
					break;
				default:
					porcentaje = 1;		
			}
		break;				
	}

	importeFinal = precioBase * porcentaje

	alert("El precio es " + importeFinal)
	

}