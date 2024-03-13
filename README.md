# RELATÓRIO: Algoritmo DPLL para satisfatibilidade booleana.

Este é um código JavaScript que implementa o algoritmo DPLL (Davis-Putnam-Logemann-Loveland) para resolver o problema da satisfatibilidade booleana (SAT). O algoritmo busca determinar se existe uma atribuição de valores verdadeiro ou falso para as variáveis de uma fórmula booleana na forma CNF (forma normal conjuntiva) que torne a fórmula verdadeira.

# FUNÇÕES

**1 - dpll(simbolos, clausulas, atribuicao):** Esta é a função principal que implementa o algoritmo DPLL, ela recebe três argumentos, que consistem em um array contendos os síbolos booleanos, um array de arrays representando as cláusulas da fórmula booleana na forma CNF e umm objeto que representa uma atribuição parcial das variáveis. A função verifica se todas as cláusulas foram satisfeitas ou se alguma cláusula está vazia, indicando a satisfatibilidade da fórmula. Em seguida, itera sobre os símbolos não atribuídos e tenta atribuir valores verdadeiros e falsos a eles, simplificando as cláusulas e chamando recursivamente a função dpll com as novas atribuições parciais. Se uma atribuição satisfatória for encontrada, a função retorna true, caso contrário, retorna false.

**2 - simplificar(formula, literal):** Esta função recebe uma fórmula na forma CNF e um literal, e retorna a fórmula simplificada após atribuir um valor ao literal fornecido.

**3 - eSatisfativel(formula):** Esta função verifica se uma fórmula booleana na forma CNF é satisfatível. Ela extrai os símbolos da fórmula, inicia com uma atribuição vazia e chama a função principal dpll para determinar a satisfatibilidade da fórmula, retornando true se satisfatível e false caso contrário.

# FUNCIONAMENTO 
O código lê como entrada um arquivo de texto que contém uma fórmula booleana na forma CNF. Em seguida, ele lê uma fórmula a partir do arquivo, extrai os símbolos e as cláusulas, e determina se é possível atribuir valores verdadeiro/falso às variáveis para tornar a fórmula verdadeira. O resultado "Satisfatível" ou "Insatisfatível" é impresso no console.

# COMO USAR

O código em JavaScript pode ser usado para verificar se uma fórmula booleana na forma CNF é satisfatível. Basta escrever a fórmula em um arquivo de texto e executar o código com Node.js. O resultado será impresso no console.

