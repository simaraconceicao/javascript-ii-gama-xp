/* Variáveis
Vamos criar variaveis usando let, const e var, atribuir valores, 
identificar comportamentos e saídas quando tentarmos recuperar.
*/
//Definindo as variáveis
const mummy = 1000;

{
    dummy = 40;
    yummy = "lasanha";
}

for (let i in [dummy, yummy, mummy]){
    console.log(typeof i)
}

let frase = `Eu tinha uma manequim ${dummy} na sua idade.\n${yummy} é muito gostosa.\nNossa, ela é tão velha. Está acabada com ${mummy} de idade, parece uma múmia.` 

console.log(frase);

var dummy, yummy;

