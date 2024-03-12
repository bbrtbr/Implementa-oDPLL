function dpll(simbolos, clausulas, atribuicao) {
  if (clausulas.every((c) => c.length === 0)) {
    return true; // Todas as cláusulas foram satisfeitas
  }

  if (clausulas.some((c) => c.length === 0)) {
    return false; // Alguma cláusula está vazia, a fórmula é insatisfatível
  }

  for (const simbolo of simbolos) {
    if (!(simbolo in atribuicao)) {
      const atribuicaoVerdadeira = { ...atribuicao, [simbolo]: true };
      const clausulasVerdadeiras = simplificar(clausulas, simbolo);
      
      if (dpll(simbolos, clausulasVerdadeiras, atribuicaoVerdadeira)) {
        return true;
      }

      const atribuicaoFalsa = { ...atribuicao, [simbolo]: false };
      const clausulasFalsas = simplificar(clausulas, -simbolo);

      if (dpll(simbolos, clausulasFalsas, atribuicaoFalsa)) {
        return true;
      }

      return false;
    }
  }
}

function simplificar(formula, literal) {
  return formula
    .map((clausula) => {
      const clausulaFiltrada = clausula.filter(
        (c) => c !== literal && c !== -literal
      );
      if (clausulaFiltrada.length === 0) {
        return [];
      }
      return clausulaFiltrada;
    })
    .filter((clausula) => clausula.length > 0);
}

function eSatisfativel(formula) {
  const simbolos = formula.flat(); //array com os simbolos fora das formulas
  const atribuicao = {};
  console.log("Formulas organizadas:", formula);
  console.log("Simbolos das formulas em um array:", simbolos);

  return dpll(simbolos, formula, atribuicao);
}



const fs = require("fs"); //importando o módulo File System para trabalhar com operações do sistema de arquivos do Node

const linhas = fs.readFileSync("text.txt", "utf-8").split("0\n"); //Lê o arquivo de forma síncrona, e divide em um array de linhas usando 0\n
/**A leitura de maneira síncrona lê todo o arquivo antes de continuar, talvez seja mais interessante usar o metodo assincrono para não
 * ter bloqueios de execução durante a execução do progama
 */
let n = 0;
let m = 0;

for (const linha of linhas) {
  //pecorrendo cada linha do arquivo
  if (linha.startsWith("p")) {
    n = parseInt(linha.split(" ")[2]);
    m = parseInt(linha.split(" ")[3]);
  }
}

const formulas = linhas
  .filter((linha) => !(linha.startsWith("p") || linha.startsWith("c"))) //Remove as linhas que começam com 'p' (parâmetros) ou 'c' (comentários).
  .map((linha) =>
    linha
      .split(" ")
      .filter((l) => l.trim() && parseInt(l) !== 0)
      .map((l) => parseInt(l))
  ); //*Mapeando cada linha restante dividindo em partes usando o espaço para guiar. Em seguida, filtra os elementos que não são iguais a zero, e converte cada elemento para um número inteiro, resultando em um array de fórmulas.*/

if (eSatisfativel(formulas)) {
  console.log("Satisfatível");
} else {
  console.log("Insatisfatível");
}
