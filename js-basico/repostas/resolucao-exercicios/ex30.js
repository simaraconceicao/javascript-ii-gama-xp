// Crie um algoritmo que leia o valor de um jantar,
// calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

function jantar (valor) {
    let taxa = (valor*10)/100;
    let total = valor + taxa;

    console.log(`Taxa do garçom: R$ ${taxa.toFixed(2)}`);
    console.log(`Valor total à ser pago: R$ ${total.toFixed(2)}`);
}
jantar(150)