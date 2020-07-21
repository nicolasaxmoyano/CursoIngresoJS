function mostrar()
{
	var edad;
	var EstadoCivilUsuario;
	
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	EstadoCivilUsuario = estadoCivil.value;
	
	if(edad<18 && EstadoCivilUsuario == "Casado" || edad <18 && EstadoCivilUsuario == "Divorciado")
	{
		alert("Es muy pequeño para NO ser soltero")
	}



}