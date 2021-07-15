/* conta bancária
Vamos criar uma conta bancária com as 3 operações básicas?
a) A conta deverá iniciar com o saldo de 100
b) Deverá ser possível escolher uma operação em forma de string: 'depositar', 'sacar', 'consultar saldo'
c) Deverá ser possível passar 1 valor para a operação escolhida
d) Deverá retornar o resultado e imprimir no console o saldo atual
*/

let conta=100,valor,op;

while(1){
    op=prompt("Insira a operação:")
    switch (op){
        case "depositar":
            valor=parseInt(prompt("Insira o valor a ser depositado:"));
            conta+=valor;
            alert("Seu dinheiro foi depositado.");
            break;
        case "sacar":
            valor=parseInt(prompt("Insira o valor a ser sacado:"));
            conta-=valor;
            alert("O dinheiro pode ser sacado.");
            break;
        case "consultar saldo":
            alert(`Seu saldo é de ${conta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`)
            //console.log(`Seu saldo é de ${conta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`)
    }

}