function convertir() {

    let cm = parseFloat(document.getElementById("cm").value);

    let milimetros = cm * 10;
    let metros = cm / 100;
    let kilometros = cm / 100000;
    let pulgadas = cm / 2.54;

    document.getElementById("milimetros").innerHTML = 
    "Milímetros: " + milimetros;

    document.getElementById("metros").innerHTML = 
    "Metros: " + metros;

    document.getElementById("kilometros").innerHTML = 
    "Kilómetros: " + kilometros;

    document.getElementById("pulgadas").innerHTML = 
    "Pulgadas: " + pulgadas.toFixed(2);

}