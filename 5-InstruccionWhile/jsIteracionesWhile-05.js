/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		prompt("Sexo ingresado incorrecto, ingrese nuevamente");
	}



	txtIdSexo.value=sexoIngresado;
}