/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */

function mostrar()
{
	var notaExamen;
	notaExamen = parseInt(notaExamen);
	notaExamen = Math.floor(Math.random() * 10) + 1;
	
	alert(notaExamen);

	if(notaExamen==9 || notaExamen==10)
	{
		alert("EXCELENTE");
	}
	else if(notaExamen>3 && notaExamen<9)
	{
		alert("APROBÓ");
	}
	else if(notaExamen>0 && notaExamen<4)
	{
		alert("Vamos, la proxima se puede");
	}
	
}//FIN DE LA FUNCIÓN