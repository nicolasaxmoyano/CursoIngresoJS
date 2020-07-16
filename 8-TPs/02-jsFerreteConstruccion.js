/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ 
    var largoTerreno; 
    var anchoTerreno;   
    var alambreNecesario;

    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;
    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);
    alambreNecesario = parseInt(alambreNecesario);
    alambreNecesario = (largoTerreno * 2 + anchoTerreno * 2) * 3;
    alert("El alambre necesario es: " + alambreNecesario);

}
function Circulo () 
{
    var radioTerreno;
    var cantidadAlambre;

    radioTerreno = txtIdRadio.value;
    radioTerreno = parseFloat(radioTerreno);
    cantidadAlambre = (2 * Math.PI * radioTerreno) * 3;
    alert("La cantidad de alambre necesaria es: " + cantidadAlambre);
	
}
function Materiales () 
{
    var largoTerreno;
    var anchoTerreno;
    var bolsaCal;
    var bolsaCemento;
    var cantidadAlambre;
    var terrenoTotal;
    
    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;
    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);
    terrenoTotal = largoTerreno * anchoTerreno;
    bolsaCal = terrenoTotal * 3;
    bolsaCemento = terrenoTotal * 2;
    alert("Se necesitan " + bolsaCemento  + " bolsas de cemento" + " y " + bolsaCal + " bolsas de cal");




}