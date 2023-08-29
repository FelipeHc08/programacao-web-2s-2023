# Resumo: Arrow Functions em JavaScript

[MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions) 

## Introdução às Arrow Functions

Possuem sintaxe mais curta em relação a function expression e não tem seu próprio `this`, `arguments`, `super` ou `new.target`.

## Sintaxe Básica

A sintaxe de uma Arrow Function é a seguinte:

```javascript
const funcaoArrow = (parametro1, parametro2) => expressao;
```

Uma Arrow Function geralmente consiste em parâmetros entre parênteses, seguidos por uma seta (=>) e uma expressão que é avaliada e retornada como resultado da função.

## VANTAGENS DA ARROW FUNCTION

1. __Sintaxe Concisa__: Torna o código mais limpo e legível.
2. __Valor this__: As Arrow Functions não têm seu próprio this. Elas herdam o valor this do contexto circundante, o que pode ser útil em certas situações.
3. __Sem arguments__: As Arrow Functions não possuem a variável implícita arguments.

## LIMITAÇÕES

1. __Sem arguments e super__: As Arrow Functions não têm acesso à variável arguments e não podem ser usadas como construtoras.
2. __Não são adequadas para métodos de objetos__: Devido à vinculação de `this`, Arrow Functions geralmente não são recomendadas para definição de métodos de objetos.

## EXEMPLOS DE USO

Sintaxe básica: 

```javascript
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalente a: => { return expression; }

// Parênteses são opcionais quando só há um nome de parâmetro:
(singleParam) => { statements }
singleParam => { statements }

// A lista de parâmetros para uma função sem parâmetros deve ser escrita com um par de parênteses.
() => { statements }
```
Sintaxe avançada:

```javascript
// Envolva o corpo da função em parênteses para retornar uma expressão literal de objeto:
params => ({foo: bar})

// Parâmetros rest (rest parameters) e parâmetros padrões (default parameters) são suportados
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }

// Desestruturação (destructuring) dentro da lista de parâmetros também é suportado
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f(); // 6
```
