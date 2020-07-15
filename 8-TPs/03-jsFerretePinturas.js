/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaFahrenheit; // La formula es: °C = (°F - 32) × 5/9 //
    var temperaturaCelsius;
    var conversion;
    
    temperaturaFahrenheit = txtIdTemperatura.value;
    temperaturaFahrenheit = parseInt(temperaturaFahrenheit);
    temperaturaCelsius = parseInt(temperaturaCelsius);
    conversion = (temperaturaFahrenheit - 32) * 5/9;
    alert(temperaturaFahrenheit  + " Fahrenheit son "+ conversion + " centígrados");
}

function CentigradosFahrenheit () 
{
	var temperaturaFahrenheit; // La formula es ºF = (ºC · 1,8) + 32 // 
    var temperaturaCelsius;
    var conversion;

    temperaturaCelsius = txtIdTemperatura.value;
    temperaturaCelsius = parseInt(temperaturaCelsius);
    temperaturaFahrenheit = parseInt(temperaturaFahrenheit);
    conversion =  (temperaturaCelsius * 1.8) + 32;
    alert(temperaturaCelsius + " centígrados son " + conversion + " Fahrenheit");
}
