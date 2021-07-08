console.log(calculaIMC(1.72, 86.3)+" kg/m2")

function calculaIMC(altura, peso) {
    return (peso / (altura*altura));
}