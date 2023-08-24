/*
Exercício 2

Faça um algoritmo que imprime uma matriz A e sua transposta.
*/

// Função para calcular a matriz transposta
function matrizTransposta(matriz) {
    const linhas = matriz.length; // Obtém o número de linhas da matriz original
    const colunas = matriz[0].length; // Obtém o número de colunas da matriz original
    
    // Cria uma nova matriz vazia com as dimensões invertidas
    const matrizTransposta = new Array(colunas); // Cria um array para as colunas da matriz transposta
    for (let i = 0; i < colunas; i++) {
        matrizTransposta[i] = new Array(linhas); // Para cada coluna, cria um array para as linhas
    }
    
    // Preenche a matriz transposta com os elementos da matriz original nas posições corretas
    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            matrizTransposta[j][i] = matriz[i][j]; // Troca os índices para transpor os elementos
        }
    }
    
    return matrizTransposta; // Retorna a matriz transposta resultante
}

const matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log('Matriz original:');
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]); // Exibe cada linha da matriz original
}

const matrizTranspostaResultante = matrizTransposta(matriz); // Calcula a matriz transposta

console.log("Matriz transposta:");
for (let i = 0; i < matrizTranspostaResultante.length; i++) {
    console.log(matrizTranspostaResultante[i]); // Exibe cada linha da matriz transposta
}