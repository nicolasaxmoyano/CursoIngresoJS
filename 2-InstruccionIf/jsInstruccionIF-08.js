/* Si no es mayor y NO es soltero = no hacer nada.
Si es mayor y ES soltero = Mostrar "Es soltero y no es menor" */

function mostrar()
{
	var edad;                                   
	var estadoCivilUsuario;
	
	edad = txtIdEdad.value;
	estadoCivilUsuario = estadoCivil.value;
	edad = parseInt(edad);

	if(edad>17 && estadoCivilUsuario == "Soltero")
	{
		alert("Es soltero y no es menor");
	}
	
	
	


}//FIN DE LA FUNCIÓN