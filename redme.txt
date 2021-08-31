Desafio Hall To Code que consistiu em criar função para o jogo Jumping on the Clouds

Disponível em: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

A função criada é responsável por retornar a menor quantidade de pulos necessários para chegar na última nuvem.
Não pode-se pular em nuvens de tempestade.
O jogador pode pular na nuvem com número da nuvem atual mais 1 ou 2.

A função em questão sempre tenta pular inicialmente na nuvem i+2 (nuvem mais distante possível da posição atual que é permitido saltar)
Se não for possível a posição i+2 (por ser uma posição com nuvem de tempestade), o salto será feito na posição i+1.