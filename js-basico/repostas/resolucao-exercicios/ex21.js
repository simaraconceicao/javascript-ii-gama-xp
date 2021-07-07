// Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, 
// mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE".

let resultado;

for (let i = 20; i <= 100; i+=10) {
    resultado = i;
    if (resultado === 60 || resultado === 90){
        resultado = 'CONTINUE'
    }
    console.log(resultado);
}