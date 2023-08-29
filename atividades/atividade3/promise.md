# Resumo: Classe Promise em JavaScript

O [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) oferece informações detalhadas sobre a classe `Promise` em JavaScript.

## Introdução às Promises

A classe `Promise` é uma parte fundamental do JavaScript assíncrono. Ela representa uma operação que pode estar pendente, ser cumprida com um valor ou ser rejeitada com um motivo. As Promises são amplamente utilizadas para lidar com tarefas assíncronas, como solicitações de rede, acesso a bancos de dados e outras operações demoradas.

## Sintaxe Básica

Uma Promise é criada com a seguinte sintaxe:

```javascript
const minhaPromise = new Promise((resolve, reject) => {
  // Código assíncrono
});
```

## Estados de uma Promise

Uma Promise pode estar em um de três estados:

1. __Pendente__: O estado inicial, onde a Promise está aguardando a conclusão ou rejeição da operação assíncrona.
2. __Cumprida (Resolved)__: A operação assíncrona foi concluída com sucesso e a Promise é cumprida, contendo um valor.
3. __Rejeitada (Rejected)__: A operação assíncrona falhou e a Promise é rejeitada, contendo um motivo do erro.

## Manipulando Promises

As Promises podem ser manipuladas usando os métodos `then()` e `.catch()`. O método .`then()` é usado para lidar com o caso de cumprimento da Promise, enquanto o método .`catch()` é usado para tratar erros.

```javascript
minhaPromise
  .then(resultado => {
    // Lidar com o resultado cumprido
  })
  .catch(erro => {
    // Lidar com o erro rejeitado
  });

```

## Encadeamento de Promises

Promises também podem ser encadeadas usando múltiplos .`then()` para executar operações sequenciais. Além disso, o método .`catch()` pode ser colocado no final da cadeia para lidar com erros em qualquer etapa.

## Conclusão

As Promises fornecem uma maneira elegante e poderosa de lidar com programação assíncrona em JavaScript. Elas simplificam o tratamento de operações demoradas e a gestão de erros, tornando o código mais legível e eficiente.