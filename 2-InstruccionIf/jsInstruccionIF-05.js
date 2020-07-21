// Al ingresar una edad solo debemos informar si la persona NO es adolescente //

function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad<13 || edad>17)
	{
		alert("No es adolescente");
	}



	/* Otra forma de hacerlo ;

	if(edad<12)
	{
	   alert("No es adolescente");
	}
	
	if(edad>17)
	{
		alert("No es adolescente");
	}

	Tener en cuenta que no es la mas optima */
}