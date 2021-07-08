function valorPagar(preco, percDesconto) {
    console.log(`O desconto de ${percDesconto}% para ${preco} é de ${preco/100*percDesconto} e o saldo a pagar é de ${preco-(preco/100*percDesconto)}`);
}

valorPagar(1345,7);
