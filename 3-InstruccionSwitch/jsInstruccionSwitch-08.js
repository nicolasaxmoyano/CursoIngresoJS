function mostrar()
{
	var destinoIngresado = txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frío")
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("Hace calor")
			break;		
	}

}