/*
Exercício 3

Faça um algoritmo de multiplicação matrizes: AxB = C;

É primordial que o número de colunas da primeira matriz seja igual
ao número de linhas da segunda matriz. Se for diferente, o
algoritmo deve informar “Não é possível calcular”;
 */
// Definindo a matriz A
const A = [
    [1, 3],
    [2, 5]
];

// Definindo a matriz B
const B = [
    [2, 2],
    [0, 1]
];

// Função para multiplicar duas matrizes
function multiplicarMatrizes(matriz1, matriz2) {
    // Obtendo as dimensões das matrizes de entrada
    const linhasMatriz1 = matriz1.length;           // Número de linhas na matriz A
    const colunasMatriz1 = matriz1[0].length;       // Número de colunas na matriz A
    const colunasMatriz2 = matriz2[0].length;       // Número de colunas na matriz B

    // Criando uma matriz vazia para armazenar o resultado da multiplicação
    const matrizResultado = [];

    // Loop para percorrer as linhas da matriz A
    for (let i = 0; i < linhasMatriz1; i++) {
        matrizResultado[i] = [];  // Criando uma nova linha na matriz resultado

        // Loop para percorrer as colunas da matriz B
        for (let j = 0; j < colunasMatriz2; j++) {
            matrizResultado[i][j] = 0;  // Inicializando o elemento [i][j] da matriz resultado

            // Loop para realizar a multiplicação e soma dos produtos
            for (let k = 0; k < colunasMatriz1; k++) {
                matrizResultado[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    }

    // Retornando a matriz resultado
    return matrizResultado;
}

// Chamando a função multiplicarMatrizes com as duas matrizes de entrada A e B
const C = multiplicarMatrizes(A, B);

// Imprimindo a matriz resultado C
console.log("Matriz C:");
for (let i = 0; i < C.length; i++) {
    console.log(C[i]);
}
