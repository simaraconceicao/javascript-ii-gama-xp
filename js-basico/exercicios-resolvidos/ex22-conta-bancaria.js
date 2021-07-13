// Exercício 22 - Conta bancária
// Vamos criar uma conta bancária com as 3 operações básicas? rs
// a) A conta deverá iniciar com o saldo de 100
// b) Deverá ser possível escolher uma operação em forma de string: 'depositar', 'sacar', 'consultar saldo'
// c) Deverá ser possível passar 1 valor para a operação escolhida
// d) Deverá retornar o resultado e imprimir no console o saldo atual
console.log("\n\n\nExercício 22 - Conta bancária");
class contaBancaria {
    constructor() {
        this.saldo = 100;
    }

    depositar(value) {
        this.saldo += value;
        return `Saldo atual: ${this.saldo}.`;
    }

    sacar(value) {
        if(this.saldo >= value) {
            this.saldo -= value;
            return `Saldo atual: ${this.saldo}.`;
        }
        else return "Saldo insuficiente, consulte seu saldo atual.";
    }

    consultarSaldo() {
        return `Saldo atual: ${this.saldo}.`;
    }
}

let minhaConta = new contaBancaria();

console.log(minhaConta.sacar(20));
console.log(minhaConta.depositar(150));
console.log(minhaConta.sacar(300));
console.log(minhaConta.consultarSaldo());