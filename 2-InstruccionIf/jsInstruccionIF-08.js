/* Si no es mayor y NO es soltero = no hacer nada.
Si es mayor y ES soltero = Mostrar "Es soltero y no es menor" */

function mostrar()
{
	var edad;                                   
	var EstadoCivilUsuario;
	
	edad = txtIdEdad.value;
	EstadoCivilUsuario = estadoCivil.value;
	edad = parseInt(edad);

	if(edad>17 && EstadoCivilUsuario == "Soltero")
	{
		alert("Es soltero y no es menor");
	}
	
	
	


}//FIN DE LA FUNCIÓN