# Lógica aplicada com Javascript - Gama Experience 🚀

<br>

## Javascript avançado
- Template string
- Operador ternário
- Arrow functions
- Arrays, Operador spread e métodos de iteração
- Objetos e Destructuring
- SPA, PWA e WebComponents
- Exercícios

---

* Hello World no terminal do vs code
* 3 formas de rodar um arquivo .js com node (direto no terminal, run em um arquivo e extensão code runner.)

---
## Ferramenta extra: Readline-sync
- Readline-sync é um pacote maravilhoso para pegar inputs no terminal, ou seja pegar entradas de dados no sistema. Se você veio de programação front-end isso equivale a pegar o value do input de um usuário num formulário.

 - Dentro da pasta de seu projetinho instale digitando o comando no terminal: npm install readline-sync

---

# 1. Template String
### Conceito
O ES6 trouxe uma nova forma de unir strings com expressões javascript, o Template String ou Template Literals.

Com ele podemos criar cadeias de caracteres, utilizando outra forma de interpolação que não seja o sinal de +. Em vez de aspas utilizamos crases e em vez do operador de soma interpolamos a expressão javascript utilizando ${}.

```
"Simara";
"Gama Academy";
let role = "transformadora"

console.log(`Simara é ${role} na Gama Academy`) // Simara é transformadora na Gama Academy.
```

# 2. Operador ternário
### Conceito
Você pode usar o operador ternário do JavaScript para tornar o seu código mais resumido.
Ele é uma alternativa ao if...else, entenda:

```
let x = 8

em vez de: 

if(x % 2 === 0) {
    return 'Par'
} else {
    retunr 'Impar'
}

use: 
x % 2 === 0 ? 'Par' : 'Impar'

```
Resumindo:
teste ? verdadeiro : falso

O operando teste é uma expressão que é avaliada como um valor booleano true ou false. Se a condição for verdadeira, o operador ternário retornará o operando verdadeiro, caso contrário, retornará o falso.

Os operandos verdadeiro e falso são expressões de qualquer tipo.

# 3. Arrow functions
### Conceito
O ES6 também trouxe uma forma menos verbosa de escrever funções. São as famosas Arrow Functions, por causa da sintaxe que lembra uma flecha: () =>.

Entenda:
```
em vez de: 
function soma(a,b) {
    return a + b
}

use: 
const soma = (a,b) => a + b
```

Arrow functions são excelentes para trabalharmos com funções anônimas e callbacks (são funções passadas como argumentos dentro de outras funções a fim de serem utilizadas em um momento posterior).

# 4. Arrays, Operador spread e métodos de iteração
### Conceito

Um array (ou lista) permite armazenar um conjunto de dados e atribuí-los a uma variável, sendo esta a estrutura de dados mais simples possível.

### Inicializando Arrays

Para criar um novo Array, podemos atribuir a uma variável uma lista de elementos entre colchetes e separados por vírgula. Também é possível utilizando a palavra reservada `new` e instanciando os valores que queremos atribuir ou apenas especificando o seu tamanho.

```javascript
const alunasGama = ['Paula', 'Estela', 'Mariana'];
```

```javascript
const alunasGama = new Array('Paula', 'Estela', 'Mariana');
```

### Acessando valores

Para acessar o valor de um Array, use a notação de colchetes e informe a posição que deseja acessar, lembrando que a contagem começa em zero.

```javascript
const alunasGama = ['Paula', 'Estela', 'Mariana'];

console.log(alunasGama[0]) // Paula
console.log(alunasGama[1]) // Estela
console.log(alunasGama[2]) // Mariana
```

### Spread Operator 

### Conceito
Ele é representado por três pontos. Spread significa espalhar, ou seja, este operador é usado para ‘espalhar’ os elementos de um array quando interpretado em tempo de execução.

Ou seja, esses 3 pontinhos serve para copiarmos arrays.
```
let numeros = [0, 1, 2];
let novoNumero = 12;
numberStore = [...numeros, novoNumero];
```

Você pode também transformar uma string em array utilizando o spread:
```
var string = "hello";
var array = [...string];
console.log(array); // ['h', 'e',' l',' l', 'o']
```

### Métodos de iteração

- `filter` retorna um novo array com os elementos filtrados.
- `find` retorna o primeiro elemento que achar igual ao elemento passado por parâmetro.
- `map` retorna um novo array sem alterar o array original, criando uma cópia com as alterações que desejamos.
- `sort` ordena o array.
- `reduce` reduz o array para um único valor mediante a uma operação matemática.

---
#### map
> O método `map()` invoca a função `callback` passada por argumento para cada elemento do Array e devolve um novo Array como resultado. *Fonte: [MDN map](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)*

```js
function dobrar(item) {
  return item * 2
}

const numerosDobrados = numeros.map(dobrar)

console.log(numerosDobrados) // [18, 4, 10]
```

Deixando mais conciso:

```js
const numerosDobrados = numeros.map(function (item) {
  return item * 2
})

console.log(numerosDobrados) // [18, 4, 10]
```

Refatorando para JS moderno:

```js
const numerosDobrados = numeros.map(item => item * 2)

console.log(numerosDobrados) // [18, 4, 10]
```

Obs: o método `map` não alterar o array original. Ele retorna um array novo com o resultado do `map`.

---

#### find

> O método find executa a função callback uma vez para cada elemento presente no array até que encontre um onde callback  retorne o valor true. Se o elemento é encontrado, find retorna imediatamente o valor deste elemento. Caso contrário, find retorna undefined. *Fonte MDN: [find](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find)*

```js
function procuraCinco(item) {
  return item === 5
}

const achouCinco = numeros.find(procuraCinco)

console.log(achouCinco) // 5
```

---

#### filter

```js
function impar(item) {
  return item % 2 !== 0
}

const numerosImpares = numeros.filter(impar)
```

Deixando mais conciso:

```js
const numerosImpares = numeros.filter(function (item) {
  return item % 2 !== 0
})
```

Refatorando para JS moderno:

```js
const numerosImpares = numeros.filter(item => item % 2 !== 0)

console.log(numerosImpares) // [9, 5]
```

Obs: o método `filter` não altera o array original. Ele retorna um array novo com o resultado do `filter`.

MDN: [filter]()

---

#### sort
O método `sort` recebe uma função de callback opcional. Caso a função não seja fornecida, o array segue a ordenação dos caracteres Unicode.
> Se o parâmetro funcaoDeComparacao é fornecido, o array será ordenado de acordo com o valor de retorno da funcaoDeComparacao. Considerando que a e b são dois elementos sendo comparados, então:
>  - Se `funcaoDeComparacao(a, b)` for menor que 0, ordena `a` para um índice anterior a `b`, i.e. `a` vem primeiro.
>  - Se `funcaoDeComparacao(a, b)` retornar 0, deixa `a` e `b` inalterados em relação um ao outro, mas ordenado em relação a todos os outros elementos.
>  - Se `funcaoDeComparacao(a, b)` é maior que 0, ordena `b` para um índice anterior que `a`. `funcaoDeComparacao(a, b)` sempre deve retornar o mesmo valor dado um par específico de elementos `a` e `b` como seus dois parâmetros. Se resultados inconsistentes são retornados, então a ordenação é indefinida.
>
> *Fonte MDN: [sort](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)*


```js

let numeros = [ 5, 9, 2]
function funcaoDeComparacao(a, b) {
  
  if (a < b) {
    return -1 // ao retornar valor negativo, a ordem fica [a, b]
  } else if (a > b) {
    return 1 // ao retornar valor positivo, a ordem fica [b, a]
  } else {
    return 0 // ao retornar valor nulo, a ordem permanece [a, b]
  }
}

numeros.sort(funcaoDeComparacao)

console.log(numeros) // [2, 5, 9]
```

Deixando mais conciso:

```js
function funcaoDeComparacao(a, b) {
  return a - b
}

numeros.sort(funcaoDeComparacao)

console.log(numeros) // [2, 5, 9]
```

Refatorando para JS moderno:

```js
numeros.sort((a, b) => a - b)

console.log(numeros) // [2, 5, 9]
```

**Obs: o método `sort` altera o array original!**

---

#### reduce

O método `reduce` recebe uma função callback com alguns parâmetros e essa função é executada a cada elemento presente no array. O resultado é a redução do array a um valor só. Normalmente, utilizamos os dois primeiros parâmetros: `acumulador` e `itemAtual`.

Por exemplo, podemos executar a soma de todos os valores do array utilizando o método `reduce`:

```js
function somarTodos(acumulador, itemAtual) {
  return acumulador + itemAtual
}

const numerosSomados = numeros.reduce(somarTodos)

console.log(numerosSomados) // 16
```

Deixando mais conciso:

```js
const numerosSomados = numeros.reduce(function (acumulador, itemAtual) {
  return acumulador + itemAtual
})

console.log(numerosSomados) // 16
```

Refatorando para JS moderno:

```js
const numerosSomados = numeros.reduce((acumulador, itemAtual) => acumulador + itemAtual)

console.log(numerosSomados) // 16
```


# 5. Objetos e Destructuring

### Conceito

Objeto é um tipo de dado que contém uma coleção de propriedades organizadas em pares de chave (ou nome) e valor, sendo o valor qualquer tipo de dado (número, texto, função ou até mesmo outro objeto).

### Inicializando objetos

Para criar um novo Objeto, podemos atribuir a uma variável uma lista de elementos entre chaves, separados por vírgula e com a notação de `chave : valor`. Também é possível utilizando a palavra reservada `new` ou a partir de uma função.

```javascript
const pessoa = {
  nome: 'Ariel',
  idade: 25,
  profissao: 'desenvolvedora',
};
```

```javascript
const pessoa = new Object();

pessoa.nome = 'Ariel';
pessoa.idade = 25;
pessoa.profissao = 'desenvolvedora';
```

### Acessando valores

Notação de ponto

```javascript
const pessoa = {
  nome: 'Ariel',
  idade: 25,
  profissao: 'desenvolvedora',
};

console.log(pessoa.nome); // Ariel
console.log(pessoa.idade); // 25
console.log(pessoa.profissao); // desenvolvedora
```

Notação de colchetes (ou índice)

```javascript
const pessoa = {
  nome: 'Ariel',
  idade: 25,
  profissao: 'desenvolvedora',
};

console.log(pessoa['nome']); // Ariel
console.log(pessoa['idade']); // 25
console.log(pessoa['profissao']); // desenvolvedora
```
Mais exemplos:


Declaração de objetos

```js
const objeto = new Object()
objeto.nome = 'cadeira'
objeto.tipo = 'madeira'
objeto.peso = 7

const pokemon = {
  nome: 'Pikachu',
  tipo: 'elétrico',
  altura: 40.6,
}
```

Acessando o valor de uma propriedade do objeto.

```js
console.log(pokemon.nome) // Pikachu
```

```js
const nome = pokemon.nome
const tipo = pokemon.tipo
const altura = pokemon.altura

console.log(nome) // Pikachu
console.log(tipo) // elétrico
console.log(altura) // 40.6
```

Alterando propriedades

```
pokemon.nome = 'Bulbasaur'
```

Adicionando propriedades

```
pokemon.peso = '6,9kg'
```

Deletando propriedades

```
delete = pokemon.peso
```


### Atribuição via desestruturação

```js
const { nome, tipo, altura } = pokemon

console.log(nome) // Pikachu
console.log(tipo) // elétrico
console.log(altura) // 40.6
```

MDN: [destructuring assignment](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao)


# 6. SPA, PWA e WebComponents

6.1 SPA

Single page applications são aplicações que concentram seu conteúdo em apenas uma página. O que isso quer dizer? Ela possui o super poder de atualizar apenas uma parte da página para renderizar novos dados, em vez de atualizar a página inteira.

O que usar para construir Single Page Applications?
No mercado diversas ferramentas como frameworks e bibliotecas facilitam a criação de SPA. Alguns dos mais conhecidos são: Angular, React e Vue. Eles são baseados em JavaScript e trabalham com o conceito de componentes.


6.2 PWA 

Progressive Web Apps são aplicações híbridas entre web e mobile. Ou seja, permite que ao acessar um site, a pessoa usuária possa ter uma versão instalada em seu celular com a mesma experiência da web, porém com as informações do browser removidas.

PWA são diferentes de aplicativos nativos, pois eles não podem ser encontrados nas lojas de aplicativos. E geralmente, são construídos com poucas alterações no código original: html, css e javascript. 

6.3 WebComponents

Os Web Components são uma forma de criar componentes reutilizáveis para a Web nativamente, utilizando apenas HTML, CSS e JavaScript. E carregam os benefícios de códigos menores, modulares e reutilizáveis.

Os Web Components possuem quatro fundamentos:
- Custom Elements: Permite a criação de novas tags HTML.
- Shadow DOM: Permite esconder elementos do DOM. Eles são renderizados pelo navegador e não são acessíveis pelas formas convencionais (document.querySelector).
- HTML Templates: Permite declarar fragmentos de HTML para serem utilizados como modelo. Eles não são renderizados pelo navegador.
- HTML Imports: Permite importar páginas HTML completas, incluindo o JavaScript e CSS embutidos nelas.

---
## Simara Conceição
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)