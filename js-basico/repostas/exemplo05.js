// para rodar tem que ser no terminal direto usando node exemplo05.js

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("\nDigite um numero ", function(num1) {
    rl.question("\nDigite outro numero ", function(num2) {
        let soma = parseInt(num1) + parseInt(num2);
        console.log(`A soma é ${soma}.`);
        rl.close();
    });
});

rl.on("close", function() {
    process.exit(0);
});
