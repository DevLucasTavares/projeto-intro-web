//1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.

const genres = ["Ação e Aventura","Fantasia","Mundo Aberto","RPG","Quebra-cabeça"]
const platforms = ["N64","3DS","Wii U","Switch"]
const series = ["The Legend of Zelda"]
const titles = ["Ocarina of Time","Majora's Mask","Breath of the Wild"]

const series1 = series[0]
const title1 = titles[0]
const genre1 = `${genres[0]}, ${genres[1]}, ${genres[4]}`
const sinopse1 = "Link é um jovem da floresta que vê seu lar em perigo e parte em uma jornada para deter um rei maligno e salvar o reino de Hyrule! Para completar sua missão, ele terá que encontrar a princesa Zelda e ajudar outros povos para reunir a Triforce e restabelecer o equilíbrio do mundo!"
const releaseDate1 = 1998
const criticReview1 = 9.9
const publicReview1 = 9.1
const availablePlataform1 = `${platforms[0]}, ${platforms[1]}`
const temEmBr1 = false
const remasterOrRemake1 = true
const sequel1 = false

//Recomendamos, pensando no futuro, que você também pense em dados que podem receber múltiplos valores de uma só vez. Não vamos usar estes dados até mais pra frente, mas é legal já ter uma ideia.

//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

const series2 = series[0]
const title2 = titles[2]
const genre2 = `${genres[0,2,3]}, ${genres[2]}, ${genres[3]}`
const sinopse2 = "A história começa com Link, que acorda em uma Hyrule devastada após cem anos de sono e agora precisa partir em uma aventura para recuperar suas memórias e derrotar todo o mal causado por Calamity Ganon."
const releaseDate2 = 2017
const criticReview2 = 9.7
const publicReview2 = 8.7
const availablePlataform2 = `${platforms[2]}, ${platforms[3]}`
const temEmBr2 = false
const remasterOrRemake2 = false
const sequel2 = false

///////////////////////////////////////////////////////////////////////

const series3 = series[0]
const title3 = titles[1]
const genre3 = `${genres[1]}, ${genres[4]}`
const sinopse3 = "Jogado em um mundo paralelo, Link encontra uma terra em grave perigo. O poder sombrio de uma relíquia chamada Máscara de Majora causou estragos nos cidadãos da cidade de Termina, mas seu problema mais urgente é a lua caindo em direção ao mundo! Link tem apenas 3 dias, apenas 72 horas para encontrar uma maneira de parar sua descida."
const releaseDate3 = 2000
const criticReview3 = 9.5
const publicReview3 = 9.1
const availablePlataform3 = `${platforms[0]}, ${platforms[1]}`
const temEmBr3 = false
const remasterOrRemake3 = true
const sequel3 = true

//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const averageCriticReview = +((criticReview1 + criticReview2 + criticReview3) / 3).toFixed(1)
const averagePublicReview = +((publicReview1 + publicReview2 + publicReview3) / 3).toFixed(1)
console.log (`${series[0]} Series
A média de avaliação dos críticos é de: ${averageCriticReview}
Já a média de avaliação do público é de: ${averagePublicReview}`)

//4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

let checkLanguage = (temEmBr1 && temEmBr2 && temEmBr3)
let informLanguage
//console.log (checkLanguage)
//console.log (informLanguage)
    if (checkLanguage){
        informLanguage =
    (`Todos os jogos da série "${series[0]}" são traduzidos para PT-BR`)
    }else{
        informLanguage =
    (`Infelizmente nem todos os jogos da série "${series[0]}" são traduzidos para PT-BR`)
    }
console.log (informLanguage)

//5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

///////////////////////////////////////////////////////////////////////
// Deixei lá em cima pq ele precisa ser apresentado antes de fazer as impressões para não dar erro de leitura.
///////////////////////////////////////////////////////////////////////

//6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui

console.log(`\n--- Jogos da série ${series[0]} ---`)

console.log (`Título: ${series1} - ${title1}\n
Gênero: ${genre1}\n
Sinopse: "${sinopse1}"\n
Ano de lançamento: ${releaseDate1}\n
Plataformas disponíveis: ${availablePlataform1}\n
Nota dos críticos: ${criticReview1}\n
Nota do público: ${publicReview1}\n
Tem em PT-BR? ${temEmBr1}
Tem remaster ou remake? ${remasterOrRemake1}
É uma sequência? ${sequel1}
`)
console.log("///////////////////////////////////////////////////////////////////")
console.log (`Título: ${series1} - ${title2}\n
Gênero: ${genre2}\n
Sinopse: "${sinopse2}"\n
Ano de lançamento: ${releaseDate2}\n
Plataformas disponíveis: ${availablePlataform2}\n
Nota dos críticos: ${criticReview2}\n
Nota do público: ${publicReview2}\n
Tem em PT-BR? ${temEmBr2}
Tem remaster ou remake? ${remasterOrRemake2}
É uma sequência? ${sequel2}
`)

console.log("///////////////////////////////////////////////////////////////////")
console.log (`Título: ${series1} - ${title3}\n
Gênero: ${genre3}\n
Sinopse: "${sinopse3}"\n
Ano de lançamento: ${releaseDate3}\n
Plataformas disponíveis: ${availablePlataform3}\n
Nota dos críticos: ${criticReview3}\n
Nota do público: ${publicReview3}\n
Tem em PT-BR? ${temEmBr3}
Tem remaster ou remake? ${remasterOrRemake3}
É uma sequência? ${sequel3}
`)