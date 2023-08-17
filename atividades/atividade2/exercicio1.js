/*
Exercício 2

Faça um algoritmo que imprime uma matriz A e sua transposta.
*/


function matrizTransposta(matriz) {//função para transpor a matriz com o parâmetro matriz   
    const linhas = matriz.length;//obtém o número de linhas da matriz
    const colunas = matriz[0].length;//obtém o número de colunas da matriz
    
    for (let i = 0; i < linhas; i++) {//acessa as linhas da matriz
        for (let j = i + 1; j < colunas; j++) { //acessa as colunas da matriz (j = i + 1 para acessar os valores acima da diagonal principal)
            //troca os elementos para realizar a transposição, seguindo a seguinte lógica:
            const temp = matriz[i][j];//variável temporária para armazenar o valor da matriz
            matriz[i][j] = matriz[j][i];//atribui o valor [i][j] a [j][i]
            matriz[j][i] = temp;//atribui o valor [j][i] para a variável temporária
        }
    }
}

const matriz = [//declara a matriz que será transposta
    [1, 2],
    [3, 4],
    [5, 6]
];

matrizTransposta(matriz);//"chama" a função

console.log("Matriz transposta: ");

for (let i = 0; i < matriz.length; i++) { //acessa e exibe a matriz já transportada
    console.log(matriz[i]);
}

