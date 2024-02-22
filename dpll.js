const fs = require('fs'); //importando o módulo File System para trabalhar com operações do sistema de arquivos do Node

const linhas = fs.readFileSync('text.txt', 'utf-8').split('0\n'); //Lê o arquivo de forma síncrona, e divide em um array de linhas usando 0\n
/**A leitura de maneira síncrona lê todo o arquivo antes de continuar, talvez seja mais interessante usar o metodo assincrono para não
 * ter bloqueios de execução durante a execução do progama
 */

let n = 0;
let m = 0;

for (const linha of linhas) { //pecorrendo cada linha do arquivo
    if (linha.startsWith('p')) {
        n = parseInt(linha.split(' ')[2]);
        m = parseInt(linha.split(' ')[3]);
    }
}

const formulas = linhas
    .filter(linha => !(linha.startsWith('p') || linha.startsWith('c'))) //Remove as linhas que começam com 'p' (parâmetros) ou 'c' (comentários).
    .map(linha => linha.split(' ').filter(l => l.trim() && parseInt(l) !== 0).map(l => parseInt(l))); //*Mapeando cada linha restante dividindo em partes usando o espaço para guiar. Em seguida, filtra os elementos que não são iguais a zero, e converte cada elemento para um número inteiro, resultando em um array de fórmulas.*/



console.log(formulas);//imprimindo o array
