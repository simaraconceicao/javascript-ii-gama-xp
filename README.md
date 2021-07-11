# Revisão Javascript básico
- Tipos de dados
- Variáveis
- Operadores
- Estruturas condicionais
- Estruturas de repetição
- Funções e classes

### O que é JavaScript?

Segundo o livro "Estrutura de dados e algoritmos com javascript", de Loiane Groner: "Javascript é uma das linguagens de programação mais populares atualmente, é conhecida como a linguagem da internet porque os navegadores a entendem de modo nativo, sem a instalação de qualquer plugin."

Praticamente todos os sites e aplicações web usam javascript, até outras ferramentas que são usadas para web, no fim das contas vão precisar transformar o código em javascript para que o navegador entenda. 
 
Além disso, a linguagem javascript evoluiu muito e aparecem até em aplicativos mobile(com React Native), Softwares de interface gráfica para Desktop(electron) e até games, robótica e inteligência artificial. Além disso, tem o backend também utilizando o nodejs.

E tem uma lista imensa de empresas que usam Javascript ou alguma ferramenta que derivou dela, então o próprio netflix, uber, instagram, facebook, twitter entre outras. Usam o react que é uma outra ferramenta baseada em javascript.

Antes da gente encerrar essa parte eu quero fazer um combinado com você. Se você, é uma pessoa que já teve algum contato com o Javascript, preste bastante atenção a essas aulas, pois toda vez que você for criar soluções mais complexas, você vai precisar ter essa base de fundamentos bem sólida. 

| Pontos positivos | Pontos negativos |
| --- | --- |
| `uma ótima linguagem para um primeiro contato com a programação e, por consequência, para se estudar lógica de programação` | Pode conter brechas para a execução de ações maliciosas |
| `Sintaxe acessível` | Pode ser renderizada de maneiras diferentes pelos dispositivos compatíveis, causando problemas de desempenho. |
| `Grande comunidade ao redor do mundo fazendo a ferramenta evoluir` | Atualizações nem sempre compatíveis com todos os navegadores e sistemas existentes. |

### O que é NodeJS?

É um interpretador Javascript que não depende do navegador. Ele é formado pelo V8, motor interpretador de Javascript criado pelo Google, e pela libuv, uma biblioteca que deu características de linguagem back-end para o node.

Node.js revolucionou a forma de programar em Javascript, pois a linguagem evoluiu de uma forma de dar vida aos elementos no navegador para uma linguagem capaz de criar software para tratamento de dados no backend.

### Primeiros passos com Javascript

* Javascript no navegador, interação: console, alert e prompt
    **Console:**
    Esta função permite que você faça log no console do navegador moderno. Isso ajuda você a depurar seu código facilmente.

    **Alert:**
    Usar o alerta exibe uma caixa de diálogo com a mensagem fornecida. A próxima linha de código não será executada até que a caixa de diálogo seja fechada (clicando no botão OK)

    **Prompt:**
    O uso do prompt permitirá que você recupere as entradas do usuário.
    O primeiro parâmetro é o título da caixa de diálogo e o segundo (parâmetro opcional) é o valor padrão da caixa de texto.



### Lógica aplicada

#### 1. Tipos de dados:

JavaScript é uma linguagem dinamicamente tipada. 

Isso significa dizer que não é preciso especificar o tipo do dado quando formos declarar uma variavél. Além disso os tipos de dados são convertidos automaticamente conforme a necessidade de execução do nosso script. Mais pra frente você vai perceber isso melhor.

Aprender tipos de dados é um super poder para resolver problemas com estrutura de dados e algoritmos lá no futuro.

Vamos aprender os tipos de dados primitivos em javascript:

##### String

É uma cadeia de caracteres. A gente identifica o dado do tipo string quando caracteres formam palavras ou frases entre aspas simples ou duplas. 

Quando queremos escrever textos em javascript é preciso usar uma das três formas abaixo. Elas não possuem diferenças, só ter atenção pois você não pode em uma única string começar com uma e terminar com a outra.
```
Aspas simples ' '
Aspas duplas " "
Template literals ``
```
Podemos também unir strings concatenando ou interpolando.

Os templates literals podemos usar quando queremos interpolar uma string com uma expressão de javascript.


Qual aspas usar?
Até onde eu aprendi é uma preferência da pessoa desenvolvedora ou acordo do time. Agora, o JSON só aceita aspas duplas.

````
'Hello'
"World"

//concatenando
console.log('Hello' + ' ' + "World")
// Vai imprimir Hello World

console.log('Hello' + "World")
//Vai imprimir sem espaço HelloWorld

myName = "Simara";
console.log('Hello' + " " + myName)
//Vai imprimir Hello Simara

//interpolando
myName = "Simara";
console.log(`Hello ${myName}`)
//Vai imprimir Hello Simara
````

#


##### Number

É o tipo de dado númerico no Javascript e podemos identificar, geralmente como números inteiros ou decimais, também conhecido como float. 
```
1

1.5 
```

#


##### Boolean

É o tipo de dado lógico e tem apenas dois valores. 
```
true 
false
```

#

##### Null x undefined

Null é um objeto vazio e undefined é o valor pra uma variável não definida, por exemplo.

#


##### Objeto, array e function
Um objeto do JavaScript é um mapeamento entre chaves e valores. Chaves são Strings e valores podem ser de qualquer tipo.

```
{ 
    name: "simara",
    age: 32,
    role: "dev",
    isTeacher: true
}
```
Arrays são objetos perfeitos para representação de listas e conjuntos.
```
["aila", "maria", "paula"]
```
Funções são objetos comuns com a capacidade adicional de serem chamados.
```
function soma (a,b) {
    return a + b
}

soma(2,5) // 7
```

#### Determimando tipos usando o operador typeof
O operador typeof pode te ajudar a encontrar o tipo de sua variavel.
```
typeof 32 //Number
var age = 32 
console.log(age) //Number

typeof "Simara" //string
var myName = "Simara" 
console.log(myName) //String

let lastName
console.log(typeof lastName) //undefined

let myObject = {
    "name" : "Simara",
    "age": 32
}

console.log(typeof myObject) //object

let object = null
console.log(typeof object) //object

function subtrair(){}
console.log(typeof subtrair) //function

let alunas = []
console.log(typeof alunas) //object
```

#### 2. Variáveis:

"Variaveis armazemam dados que podem ser denfinidos, atualizados e recuperados sempre que necessário". 

Mas como declarar variaveis no JavaScript? 

A gente precisa usar uma palavra reservada do Javascript e um identificador. Além disso, a gente pode atribuir valores para essas variaveis.

É mais ou menos assim: 

A palavra reservada: var 
Identificador: myName
Atribuindo valor: "Simara"

Declarando uma variavel: var myName
Atribuindo valor: myName = Simara
Recuperando o dado que está guardado na variavel: myName


Aqui vão algumas dicas pra você ficar muito expert em declarar variaveis com Javascript

 - **O que pode?**
 Podem começar com letra, $ ou _
 É possível usar acento, símbolos e números


 - **O que não pode?**
 Não pode começar com número
 Não pode conter espaço
 Não podem ser palavras reservadas

 - **Qual o ideal?**
 Ter atenção, pois é case sensitive
 Use nomes coerentes

Além disso, é também importante saber que a linguagem Javascript evolui a cada ano. E desde 2015, tem havido uma nova versão lançada a cada ano que chamamos de ECMAScript. Então não se assuste se você esbarrar com frenquencia nesse conceito por aí. ECMA é uma organização que padroniza informações, e o JavaScript foi submetido à ECMA para que fosse padronizado daí nasceu o ECMAScript, o novo padrão da linguagem.

A mudança mais significativa na linguagem ocorreu em 2015 e é conhecida com ECMAScript 6 ou ES6, ela surgiu pra linguagem ficar mais flexivel no uso com o paradigma orientado a objeto. E aqui nas variáveis surgiram as palavras reservadas let e const.

Então agora você pode declarar variaveis das seguintes formas: 
```
let language = "Javascript"
const padrão = "ECMAcript"
```
Vem entender melhor quando usar cada uma.

- **Diferenças entre let, const e var:**

1- var são declarações de escopo global ou de escopo de funções, enquanto let e const são de escopo bloqueado.

2- var podem ser atualizadas ou reatribuídas nestes escopos

3- let podem ser atualizadas, mas const não podem ser atualizadas ou reatribuídas

4- Enquanto var e let podem ser declaradas sem inicializar, const precisa ser inicializada durante a declaração

5- var sofrem hoisting de escopo


Ficou por fora quando eu falei de escopo e de hoisting?  Esses conceitos são mais faceis de entender com a mão no código.

Escopo se refere ao local em que podemos acessar a variavel no algoritmo ou em uma função. E as variaveis podem ser locais ou globais.

Para entender local e global:

```
{
    var age = 32;
}

console.log(age)

//Depois trocar para let

{
    let age = 32;
}

console.log(age)
```
Para entender hoisting: 
```
console.log(name)
let name = "Simara"; //vai dar erro

console.log(myLastName)
var myLastName = "Conceição";

var name // por debaixo dos panos é isso que acontece, a declaração sofre hoisting, esse fenomeno de elevação que 
leva a declaração da variavel lá pra cima do escopo. 
name = "Simara";
```
A boa prática é: sempre que possível, evite usar variaveis globais em javaScript, pois elas são prejudiciais para a qualidade do seu cógigo.


#### 3. Operadores:

Precisamos de operadores para realizar qualquer operação em uma linguagem de programação. O javascript também tem seus operadores aritméticos, de atribuição, lógicos entre outros.

**Aritméticos:**

| Operador | Descrição |
| --- | --- |
| `+` | Adição |
| `-` | Subtração |
| `*` | Multiplicação |
| `/` | Divisão |
| `%` | Módulo ou resto da divisão |
| `++` | Incremento|
| `--` | Decremento|

<br>

**Atribuição:**

| Operador | Descrição |
| --- | --- |
| `=` | Atribuição |
| `+=` | Atribuição de soma |
| `-=` | Atribuição de subtração |
| `*=` | Atribuição de multiplicação |
| `/=` | Atribuição de divisão |
| `%=` | Atribuição de resto |
<br>

**Comparação:**

| Operador | Descrição |
| --- | --- |
| `==` | Igual a |
| `===` | Igual a (tanto o valor quanto o tipo) |
| `!=` | Diferente de  |
| `>` | Maior que |
| `>=` | Maior ou igual a |
| `<` | Menor que |
| `<=` | Menor ou igual a |
<br>

**Lógicos:**

| Operador | Descrição |
| --- | --- |
| `&&` | E |
| `||` | Ou |
| `!` | Negação |



<br>

#### 4. Condicionais:
São instruções de controle que podemos usar ao construir nossos códigos. Vamos estudar estudar 2 estruturas condicionais: if...else e switch.

- Podemos usar **if** se quisermos executar um bloco de código somente se a condição ou verificação lógica for verdadeira.

```
let num = 1
if (num ===1) {
    console.log('num é igual a 1')
}
```

- Podemos usar **if...else** se quisermos executar um bloco de código somente se a condição ou verificação lógica for verdadeira. Ou outro bloco de código, somente caso a condição seja falsa.

```
let number = 0
if (number ===1) {
    console.log('number é igual a 1')
} else {
    console.log(`number não é igual a 1, o valor de number é ${number}`)
}
```

- Além disso para diferentes condições podemos usar vários **if...else** se quisermos executar vários blocos de códigos diferentes.

```
let mes = 'setembro'
if (mes === 'fevereiro) {
    console.log('tem carnaval')
} else if (mes === 'junho'){
    console.log('tem são joão')
} else if (mes === 'dezembro'){
    console.log('tem natal')
} else {
    console.log(`${mes} não é um mês festivo.`)
}
```

- Agora, se a condição que estivermos avaliando for a mesma que a anterior, porém com valores diferentes, podemos usar a instrução **switch**:

```
let diaDaSemana = 'segunda'
switch (diaDaSemana) {
    case 'domingo':
        console.log('Domingou')
        break
    case 'sábado':
        console.log('Sabadou')
        break
    case 'sexta':
        console.log('Sextou')
        break
    default: 
        `${diaDaSemana} não é um dia festivo.`
}
```

Atenção para as palavras reservadas case, break e default. 

#### 5. Funções

5.1. O que são funções?

    "São ações executadas assim que são chamadas ou em decorrência de algum evento."
    "Uma função pode receber parâmetros e retornar um resultado."

    Na oficina, a gente colocou no html uma chamada pra ação que ocorria quando o botão de calcular era clicado. No arquivo js criamos a função abaixo:

```
    function clicar() {
        resposta.innerHTML = input.value
    }
```
- chamada -> no evento de clique
- parâmetros -> nao recebiamos 
- ação -> Pegar o valor digitadi do input e fazer aparecer na tela no elemento resposta
- retorno -> texto na tela com sucesso

A verdade é que na vida real, todas nós temos também tarefas e rotinas que seguem alguns critérios.

Exemplo jogar o lixo. Todas as segundas, quartas e sextas, eu posso jogar lixo organico.
Todas as tercas e quintas, eu posso jogar o lixo reciclável.

- chamada -> nos dias referentes 
- parâmetros -> dia
- ação -> separar o lixo, amarrar o saco, levar até ao local destinado
- retorno -> dia informando qual lixo jogar

E trazendo isso para o mundo do javascript, podemos criar um programa que me lembra de jogar o lixo corretamente. Vamos lá?

```  
function jogarLixo(dia) {
    if(dia === 'segunda'|| dia === 'quarta' || dia ==='sexta'){
        console.log('lixo organico') 
        } else if (dia === 'terca'|| dia === 'quinta') {
            console.log('lixo reciclavel')
        } else {
            console.log('nao pode jogar lixo')
        }  
        return dia 
}

let qualTipoJogarHoje = jogarLixo('sabado')
console.log(qualTipoJogarHoje)
```

5.2. Por que e como utilizar?
Quando precisamos de uma instrução, uma ação que pode ser executada em diferentes momentos no nosso código.

Declaração
- Usamos a palavra reservada function
- Podemos dar um nome ou deixá-la anônima
- não esequecer de usar os parenteses, nele podemos passar parametros ou nao
- e dentro das chaves colocamos as instruções que podem ter um retorno ou não

Parâmetros
São informacões que se comportam como variaveis dentro daquela função e que podem ser usadas nas instruções

Retorno
Usando a palavra reservada return podemos, instruir nosso código a retornar algo.

Nomeando funções
- Sempre prefira usar verbos que descrevem exatamente o que a sua função irá fazer. 
- Não se preocupe se os nomes ficarem grandes, desde que sejam descritivos o suficiente.
- Use também o camelcase, quando usamos a segunda palavra com a primeira letra maiuscula.


5.3. Escopo

1. Conceito
Refere-se ao lugar em seu algoritmo ou função.

2. Escopo Global
Refere-se ao arquivo atual do js.

3. Escopo Local ou de Bloco
Refere-se à função ou aquele bloco de código.

Lembrete: Var não respeita escopo de bloco

4. Escopo Léxico

Um variavel recebe um indetificador único (nome) e o trecho de código que retorna quando ela é recuperada é o escopo léxico.

#### 6. Estrutura de repetição
Loop, laço, iteração ou estrutura de repetição. 

A gente faz diariamente atividades com repetição, por exemplo num exercicío físico. Digamos que nosso personal nos mandou fazer uma série de 10 pulos de corda. 

A gente pode criar uma função pulaCorda() e quando ela for chamada, dentro dela irá executar 10 vezes o console.log com a string pulei a corda e o valor da repetição digitado manualmente. 

Agora se o professor mudar a série para 100 vezes, vai ficar chato digitar 100 consoles, certo? É aí que as estruturas de repetição podem nos ajudar, temos um ponto de partida e um ponto de chegada para nosso sistema, vamos começar do pulo 1 e vamos até o pulo 100 e queremos mostrar isso no console. 

Podemos fazer isso com for, while e também com o do...while.

```
function pulaCorda() {
    console.log('Pulei a corda com function 1')
    console.log('Pulei a corda com function 2')
    console.log('Pulei a corda com function 3')
    console.log('Pulei a corda com function 4')
    console.log('Pulei a corda com function 5')
    console.log('Pulei a corda com function 6')
    console.log('Pulei a corda com function 7')
    console.log('Pulei a corda com function 8')
    console.log('Pulei a corda com function 9')
    console.log('Pulei a corda com function 10')
}

pulaCorda();
```
```
console.log('inicio')
for(let i = 1; i <=3; i++) {
    console.log(`Pulei a corda com for ${i}`)
}
console.log('fim')
```
```
console.log('inicio')
let i = 1;
while(i <=3) {
    console.log(`Pulei a corda com while ${i}`)
    i++
}
console.log('fim')
```
```
console.log('inicio')
let index = 1;
do{
    console.log(`Pulei a corda com do...while ${index}`) 
    index++
}while(index<=3)
console.log('fim')
```
6.1. Conceito
for é a estrutura de repetição com variavél de controle, a gente usa quando sabe exatamente qual são os nossos pontos de partida e de chegada.

while faz o teste lógico no início e sendo verdadeiro ele executa o bloco de código

do...while primeiro executa o bloco e depois faz o teste lógico, garantindo que a instrução será executada pelo menos 1 vez. 


6.2. Comandos especiais
    1. break: podemos encerrar uma instrução

    2. continue: podemos pular uma instrução

```
for(let i = 10; i > 0; i--) {

  console.log(i);

  if(i === 5) {
    break;
  }  
}

console.log("Deu o break");
```

```
let x = 10;

while(x < 100) {

  x += 10;
  
  if(x === 60 || x === 90) {
    console.log("CONTINUE");
    continue;
  }

  console.log("Testando continue " + x);

}
```
Vamos debugar para perceber como funciona?

**Extra: ferramenta debug do VSCode**
- clica no besouro
- criar launch do debug
- define a variavel no watch
- marca o breakpoint
- dá o play e vai apertando f10


#### 7. POO com Javascript Introdução

### class x function 

*O que é a programação orientada a objetos? 

*É um paradigma de desenvolvimento, uma forma de construir e analisar a nossa lógica,além disso é utilizado muito na maioria dos sistemas atuais* 

*Tudo o que fazemos na POO é trabalhar com objetos.Ela foi criada para tentarmos representar objetos do mundo real nos códigos, com estados e comportamentos.*

*Os 4 pilares da programação orientada a objeto:*

*herança: podemos extender propriedades e metodos de uma classe mae para uma classe filha.Isso serve para replicar as caracteristicas de um objeto para outro. Isso nos ajuda a escrever códigos sem repetir tanto as mesmas linhas de código.*

*encapsulamento: conceito simples e poderoso, pois guarda a lógica da nossa classe, deixando nossos atributos de forma privada e só podemos acessar utilizando os metodos de get e set.*

*polimorfismo: a capacidade de objetos compativeis, se passar por outro em certas ocaciões. Podemos dessa forma herdar metodos, e reescrever todos os comportamentos. "Podemos brincar a vontade com o DNA do nosso sistema".*

*abstração: não é um conceito concreto, chega ser redundante. O super poder é criarmos a classe mãe o mais abstrata possível, ela recebe o nome de template, identidade ou superclasse. Não pode ser criado um onjeto diretamente dessa classe, mas sim das classes filhas que herdam as caracteristicas e comportamentos da classe mae.*

*Se você começou agora, vai perceber com o tempo a importancia desses 4 pilares, pois eles são as bases de técnicas e ferramentas que nos ajudam desde a concepção do projeto até codificação dele. Uma dessas técnicas é o design patterns que nos ajudar a manter um padrão de qualidade em nossos códigos. Além disso, muitas linguagens utilizam esse paradigma: java, python, .Net, Javascript e muitas outras.*

* Como entender classes no JS.

*Classes são como formas/moldes que definem os métodos e as propriedades para instanciarmos um objeto. Dentro dela não definimos nenhum dado ou informação é apenas a forma de como nosso objeto irá se parecer. Já objetos são as versões instanciadas dessas classes, essencialmente uma versão especifica dessa classe com os valores para as propriedades. Por exemplo se criarmos uma class Parede que recebe a propriedade cor, ela não diz qual cor será pintada essa parede, apenas diz que quando for criado um objeto nova parede ela irá receber um valor para cor.*

* E a palavra reservada this?

*Antes de 2015 as classes eram escritas como funções, após o es6 usamos a sintaxe class e a palavra reservada this é usada para internamente da classe associarmos um valor.*


* Qual a função do constructor nas classes?

*As classes em JavaScript têm um método constructor que permite definir campos quando o objeto é instanciado com uma class, ou seja, é esse método que faz a contrução do objeto quando a gente cria uma intância dessa classe usando a palavra reservada new. Cada classe pode ter apenas um constructor. Se houver mais de um, SyntaxError será lançado. O constructor também pode chamar o método super para chamar o constructor de outra classe se a classe estender uma classe mãe. Configurando assim a herança na POO.*

* Quais seriam as situações que seria mais lógico usar classe ao invés de uma função?

*O mais importante a lembrar: as classes são apenas funções JavaScript normais e antes eram declaradas sem o uso da class sintaxe. Que somente foi adicionado ao ES6(2015) para tornar mais fácil declarar e herdar objetos complexos.*

*A principal diferença entre a sintaxe class e function é que function sofre hoisting, enquanto class não. Isso significa que um objeto nunca pode ser instanciado executando uma classe que foi declarada posteriormente. Enquanto é possível executar uma funçao antes e declarar depois. Pois o interpretador do javascript eleva a função para o topo da página.*

*Agora para decidir quando usar class ou function, é muito importante lembrar dos conceitos da programação orientada a objeto. Por exemplo quando nós encapsulamos a lógica em uma class, o código fica muito mais limpo e de fácil entendimento em vez de criarmos várias funções.*

*Geralmente usamos classes para construir diferentes objetos com as mesmas propriedades. Exemplo conta bancária. Usamos também em algumas bibliotecas e supersets (class components no React e typescript nos types e interfaces)*
```
function Person(name) { this._name = name; }

var person = new Person('Simara');

console.log(person)


class House { constructor(color) { this.color = color; }

getFurniture() {
    return 'sofa';
}
}

const houseObject = new House('red'); const houseObject2 = new House('pink');

console.log(houseObject); console.log(houseObject.getFurniture());

console.log(houseObject2); console.log(houseObject2.getFurniture());

class Calculator { constructor(num1, num2) { this.num1 = num1; this.num2 = num2; }

sum() {
    return this.num1 + this.num2;
}

sub() {
    return this.num1 - this.num2;
}

mult() {
    return this.num1 * this.num2;
}

div() {
    return this.num1 / this.num2;
}
}


const calculator = new Calculator(5, 6);

console.log(calculator.sum()); 
console.log(calculator.sub()); 
console.log(calculator.mult()); 
console.log(calculator.div());

function calculadora(num1, num2) { 
    return num1 + num2 
}

console.log(calculadora(1,2))
```