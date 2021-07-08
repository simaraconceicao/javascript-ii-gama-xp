class ContaCorrente {

    constructor(nomeConta,saldoAnterior){
        this._nomeConta = nomeConta;
        this._saldo = saldoAnterior;
    }

    getSaldo() {
        return this._saldo;
    }

    getNomeConta() {
        return this._nomeConta;
    }

    depositar(value) {
        this._saldo += value;
        console.log(`Depositado ${value}`)
    }

    sacar(value) {
        this._saldo -= value;
        console.log(`Sacado ${value}`)
    }

    consultarSaldo() {
        return this.getSaldo();
    }

}

let myAccount = new ContaCorrente("inter",100);

console.log(`Saldo anterior: ${myAccount.consultarSaldo()}`);

myAccount.depositar(1000);
console.log(`Saldo: ${myAccount.consultarSaldo()}`);

myAccount.depositar(732);
console.log(`Saldo: ${myAccount.consultarSaldo()}`);

myAccount.sacar(327);
console.log(`Saldo: ${myAccount.consultarSaldo()}`);

myAccount.depositar(500);
console.log(`Saldo: ${myAccount.consultarSaldo()}`);

myAccount.sacar(120);
console.log(`Saldo: ${myAccount.consultarSaldo()}`);


