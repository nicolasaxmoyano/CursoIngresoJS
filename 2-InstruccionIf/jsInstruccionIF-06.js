/* Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */
function mostrar()
{
	var edad
	edad = txtIdEdad.value;  // Declaro la variable y parseo.	
	edad = parseInt(edad);

	/*
	if(edad<13)
	{
		alert("Es un niño");
	}
	else if(edad > 12 && edad<18)
	{
		alert("Es adolescente");
	}
	else if(edad>17)
	{
		alert("Es un adulto");
	} */

	
	if(edad>17)
	{
		alert("Es un adulto");
	}
	else
	{
		if(edad>12 && edad<18)
		{	
			alert("Es adolescente");
		}
		else 
		{
			alert("Es un niño");
		}
	}


	



}