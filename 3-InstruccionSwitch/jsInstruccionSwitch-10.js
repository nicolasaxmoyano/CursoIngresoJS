function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
			case "Bariloche":
				alert("Se viaja");
				break;
			case "Mar del plata":
			case "Cataratas":
			case "Cordoba":
				alert("No se viaja")
				break;

			}
		break;	
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cordoba":
					alert("No se viaja")
					break;
				case "Cataratas":
				case "Mar del plata":
					alert("Se viaja");
					break;


			}
		break;	
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cordoba":
				case "Cataratas":
					alert("Se viaja")
					break;
				case "Bariloche":
					alert("No se viaja");
					break;
			}	
		break;	
		default:
			switch(destinoIngresado)
			{
				default:
					alert("Se viaja")
			}	
	}

}