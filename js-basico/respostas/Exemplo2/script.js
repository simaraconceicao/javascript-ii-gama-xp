/* Concatenar x Interpolar
Vamos criar variaveis usando let, const e var, 
atribuir strings e vamos concatenar e interpolar.
*/
//Definindo as variáveis

let a;

{
    a=2;
    dummy = "Quando emagrecer, comprarei aquela calça.";
    yummy = "Como sorvete todo dia e não engordo. Sou uma anomalia termodinâmica!";
}

const mummy = `Eu gosto de Indiana Jones ${a}!`;

verificacao1 = ((dummy+'\n'+yummy)===(dummy.concat('\n',yummy)));
verificacao2 = ((mummy)===("Eu gosto de Indiana Jones "+a+'!'));

console.log(verificacao1);
console.log(verificacao2);

var dummy, yummy;