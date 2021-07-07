// Vamos criar uma conta bancária com as 3 operações básicas?
// a) A conta deverá iniciar com o saldo de 100
// b) Deverá ser possível escolher uma operação em forma de string: 'depositar',
// 'sacar', 'consultar saldo'
// c) Deverá ser possível passar 1 valor para a operação escolhida
// d) Deverá retornar o resultado e imprimir no console o saldo atual

function contaBancaria (operacao, valor) {
    let saldoInicial = 100;
    if (operacao === 'depositar') {
        let saldoAtual = saldoInicial + valor;
        let resultado = 'Depósito';
        console.log(`Operação selecionada: ${resultado}`);
        console.log(`Saldo Atual = R$ ${saldoAtual.toFixed(2)}`)
    } else if (operacao === 'sacar' && valor <= 100) {
        let saldoAtual = saldoInicial - valor;
        let resultado = 'Saque';
        console.log(`Operação selecionada: ${resultado}`);
        console.log(`Saldo Atual = R$ ${saldoAtual.toFixed(2)}`)
    } else if (operacao === 'sacar' && valor > 100) {
        let resultado = 'Saque';
        console.log(`Operação selecionada: ${resultado}`);
        console.log('Valor não disponível!')
    } else {
        let saldoAtual = saldoInicial;
        let resultado = 'Consultar Saldo';
        console.log(`Operação selecionada: ${resultado}`);
        console.log(`Saldo Atual = R$ ${saldoAtual.toFixed(2)}`)
    }
}
contaBancaria('depositar', 100)
contaBancaria('sacar', 50)
contaBancaria('sacar', 120)
contaBancaria('consultar saldo')