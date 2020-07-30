/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	// Declaro las variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoBrutoIngresado;
	var legajoIngresado;
	var nacionalidadIngresada;


	// Empiezo a validar los datos //

	// A.	Edad, entre 18 y 90 años inclusive. //
	
	edadIngresada = prompt("Ingrese la edad");
	edadIngresada = parseInt(edadIngresada);
	
	while(edadIngresada < 18 ||	edadIngresada > 90)
	{
		edadIngresada = prompt("Error, ingrese el dato nuevamente");
		edadIngresada = parseInt(edadIngresada);	
	}
	txtIdEdad.value = edadIngresada;
	
	// B. Sexo, “M” para masculino y “F” para femenino //
	
	sexoIngresado = prompt("Ingrese su sexo");
	
	while(sexoIngresado != "M" && sexoIngresado != "F")
	{
		sexoIngresado = prompt("Error, ingrese el dato nuevamente");
	}
	
	// Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos //
	
	txtIdSexo.value = sexoIngresado;

	estadoCivilIngresado = prompt("Ingrese su estado civil");
	
	while(estadoCivilIngresado<1 || estadoCivilIngresado>4)
	{
		prompt("Error, ingrese el dato nuevamente");
	}
	switch(estadoCivilIngresado)
	{
		case "1":
			estadoCivilIngresado = "Soltero"
			break;
		case "2":
			estadoCivilIngresado = "Casado"
			break;
		case "3":
			estadoCivilIngresado = "Divorciado"
			break;
		case "4": 
			estadoCivilIngresado = "Viudo"		
			break;	
	}
	
	txtIdEstadoCivil.value = estadoCivilIngresado;
	
	// D. Sueldo bruto, no menor a 8000. // 

	sueldoBrutoIngresado = prompt("Ingrese su sueldo bruto");
	sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
	
	while(sueldoBrutoIngresado<8000)
	{
		prompt("Error, ingrese el dato nuevamente");
		sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
	}

	

	txtIdSueldo.value = sueldoBrutoIngresado;
	
	// E. Número de legajo, numérico de 4 cifras, sin ceros a la izquierda. // 
	
	legajoIngresado = prompt("Ingrese su número de legajo");
	legajoIngresado = parseInt(legajoIngresado);
	
	while(legajoIngresado<1000 || legajoIngresado>9999)
	{
		prompt("Error, ingrese el dato nuevamente");
		legajoIngresado = parseInt(legajoIngresado);
	}

	txtIdLegajo.value = legajoIngresado;
	
	// F. Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados. //
	
	nacionalidadIngresada = prompt("Ingrese su nacionalidad");

	while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N")
	{
		prompt("Error, ingrese el dato nuevamente");
	}
	switch(nacionalidadIngresada)
	{
		case "A":
			nacionalidadIngresada = "Argentino"
			break;
		case "E":
			nacionalidadIngresada = "Extranjero"
			break;
		case "N": 
			nacionalidadIngresada = "Nacionalizado" 
			break;		
	}
	
	txtIdNacionalidad.value = nacionalidadIngresada;
	


}
