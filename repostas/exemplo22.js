/* Vamos criar uma conta bancária com as 3 operações básicas? rs
    a) A conta deverá iniciar com o saldo de 100
    b) Deverá ser possível escolher uma operação em forma de string: 'depositar', 'sacar', 'consultar saldo'
    c) Deverá ser possível passar 1 valor para a operação escolhida
    d) Deverá retornar o resultado e imprimir no console o saldo atual */



class ContaBancaria {
    constructor(saldo, numConta, titular) {
        this.saldo = saldo;
        this.numConta = numConta;
        this.titular = titular;
    }
    efetuar(transacao, valor) {
        if (transacao === 'sacar') {
            return this.saldo = this.saldo - valor;       
        }
        if (transacao == 'depositar'){
        return this.saldo += valor;
        }
    }
    consultar(consultarSaldo) {
        if (consultarSaldo == 'consultar saldo') {
            return this.saldo;
        }
    }
}

let conta = new ContaBancaria(100, 1, "Ricardo Mateus da Costa");
console.log(conta);
console.log("Escolha uma transação 'sacar', 'depositar");

conta.efetuar('depositar', 50) // Escolha a operação que deseja efetuar trocando 'sacar' para 'depositar' e vice-versa. 
console.log("Seu saldo atual é: " + conta.consultar('consultar saldo'));