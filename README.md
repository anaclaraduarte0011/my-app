## LINK: https://anaclaraduarte0011.github.io/my-app/build/
# Pick Pet
### Créditos: Ana Clara Iannini de Resende Duarte

 Projeto criado baseado em um problema onde o usuário tinha 3 opções de petshop para levar seu cães para tomar banho, porém
cada um com distâncias e preços diferentes. 
 O projeto calcula os melhores preços, considerando as informaçõees sobre cada petshop, e mostra a melhor opção . 
 Caso os valores sejam iguais, ele mostra a melhor opção pela distância.

Primeira vez usando React e Node!

## Tecnologias:
#### - React
#### - Node
#### - JS
#### - CSS
#### - HTML
#### - GitHub Desktop

## Execução do Sistema:
 - Colocar as informações pedidas (data, quantidade de cachorrros pequenos para tomar banho, quantidade de cachorros grandes para tomar banho)
 - Apertar o botão "Ver"

## Lógica:
Lógica para calcular melhor PetShop foi feita em JavaScript.
  Primeiro foi criada a classe petshop com todos os seus atributos, depois foi calculado o valor total em dia de semana ou final de semana (depende do dado
colocado pelo usuário). Nesse caso alguns petshops cobram mais caro se for final de semana, por isso são dois mecanismos diferentes para calcular. No caso utilizei "Date" porque ele ja identifica se aquele dia cai num dia  útil ou não.
 Depois disso utilizei a estrutura de ordenação BubbleSort para ordenar da melhor opção
de petshop até a pior. 
 Então na tela aparece o resultado.

Obs:código foi comentado para melhor entendimento de cada parte
