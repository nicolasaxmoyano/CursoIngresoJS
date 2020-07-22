/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */

function mostrar()
{
	var notaExamen;  // Al declarar la variable el valor es = undefined
	
	notaExamen = Math.floor(Math.random() * 10) + 1;
	
	alert(notaExamen);

	if(notaExamen > 8)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(notaExamen > 3)
		{
			alert("Aprobó");
		}
		else
		{
			alert("Vamos, la próxima se puede");
		}
	}
	
}