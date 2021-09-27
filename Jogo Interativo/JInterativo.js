var escolhas = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40];
let entradapc = Math.floor(Math.random() * 18);
let entradaPc = Math.floor(Math.random() * 8);
var danoPc = escolhas[entradapc];

var ataque1 = [10, 20, 30, 40, 50, 60, 70, 80];
var ataque2 = [80, 70, 60, 50, 40, 30, 20, 10];
var ataque3 = [30, 50, 70, 40, 60, 80, 20, 10];
var ataque4 = [20, 10, 80, 60, 40, 70, 50, 30];
var ataque5 = [40, 30, 60, 50, 80, 70, 10, 20];
var ataque6 = [20, 10, 70, 80, 50, 60, 30, 40];
var ataque7 = [10, 50, 70, 40, 80, 30, 60, 20];
var ataque8 = [60, 30,10, 80, 40, 70, 20, 50];
var ataque9 = [40,10, 70, 30, 20, 50, 80, 60];
var ataque10 = [60,20, 80, 50, 10, 30, 70, 40];


var apague = ataque1[entradaPc];
var incinerar = ataque2[entradaPc];
var espiralCismica = ataque3[entradaPc];
var choqueTrovao = ataque4[entradaPc];
var ventaniaCortante = ataque5[entradaPc];
var ciclone = ataque6[entradaPc];
var geizer = ataque7[entradaPc];
var furacao = ataque8[entradaPc];
var insonia = ataque9[entradaPc];
var monteLava = ataque10[entradaPc];

var jogador = prompt("Olá, jogador. Como devo te chamar?");

console.log(`
                    Olá, ${jogador}. Seja bem vindo á

                            Kazuma's Destiny

                           espero que goste!`);
console.log();
console.log("=========================================================================");
console.log();
console.log(`Nesse jogo você entrará em Kazuma. Uma cidade no norte que habita muitas pessoas, pode se dizer que é a maior e mais conhecida cidade no mundo. Há anos essa cidade viveu em paz, mas recentemente, devido a uma tentativa dos Piratas de tomar a cidade para eles, as pessoas ficaram agitadas e a paz foi interrompida. Os Guardas, guardiões da cidade, interviram em pró da cidade e das pessoas que lá habitam. Então, o Líder de cada lado se enfrentarão em uma batalha no meio da cidade e, quem vencer decididrá o que acontecerá com a cidade. E você ${jogador}, de que lado está? `);

console.log();
var aPergunta = prompt("Escolha um lado. Piratas ou Guardas?");
console.log();

if (aPergunta == "Piratas"){
  escolhaPirata();
} else if (aPergunta == "Guardas"){
  escolhaGuarda();
}


function escolhaPirata (){
  var pirata = {
  nome: "Lucas Sorgen",
  vida: 100
 };

  var novato = prompt(`     Você aparece em um navio grande. Perto do leme tem uma pessoa. Você se aproxima e chama ela.

    'Eae, você deve ser o novato né? Eu sou a Fernanda, uma integrante dos Piratas, a melhor se me permite, e agora que você é um de nós, irei te levar para conhecer o nosso líder. Ele é um amor com novatos. Boa sorte!'
    
    Você segue a Fernanda até uma cabine onde tem um cara sentado na mesa de centro. Sim, ele está em cima da mesa. Ele começa a falar com você, sem nem mesmo te olhar.

   'Novato, né? É, da para notar. Como vai querer ser chamado?'`
   );

  var novatoStatus = {
    nome: novato,
    vida: 100
  }

  console.log(` 'Bom, ${novato}, você parece bem forte para alguém que decidiu entrar aqui. E você deve imaginar que, como líder, preciso ter certeza que posso confiar em você. Entou te botarei em um teste. Se passar, você será oficialmente um Pirata. Se não, bom, não precisamos falar disso agora não é mesmo. Enfim, você deve ter conhecimento de uma batalha que vai acontecer amanhã entre os Piratas e os Guardas, né? Eu lutaria mas, digamos que eu não esteja a fim. E é por isso que você está aqui, lutará no meu lugar e, se vencer, se tornará um de nós. Se perder, nada sobrará de ti além de cinzas, não que eu me importe. 
  
    Poder ir agora, e, até amanhã ${novato}.'`);

  console.log(`        NO DIA SEGUINTE`);

  console.log(` Acordo já ansioso. Uma batalha me esperava, bom saber que o líder claramente liga para o meu estado. Não posso culpa-lo, nem me conhece direito. Preciso vencer, preciso mostrar meu valor e fazer parte dos Piratas. Treinei anos para isso, eu consigo!
  
    Levanto e vou de encontro ao líder em sua cabine. Lá reconheço a Fernanda e mais dois atrás dela.
    
    'Acabou que ontem nem me apresentei, eu sou Lucas Sorgen, o líder dos Piratas. A Fernanda você já conhece, é a minha melhor capanga. Os outros dois ali, incopetentes, irrelevantes. Enfim, vamos.'
    
    Ficamos vijando no navio por umas 2h antes de, finalmente, atracarmos na cidade. Não posso negar, admirado é pouco para o que senti quando pisei naquele porto. Kazuma é enorme. 
    
    Esta um silencio grandioso na cidade, unica coisa que se houve são as folhas das arvores e alguns passaros.
    
    No centro havia um amontoado de pessoas com roupas combinando, os Guardos eu acredito. Não pareciam com medo de nós, muito pelo contrário. Lucas foi ao meio do centro e conversou com alguém, acredito ser o líder dos Guardas. Uns minutos se passaram e Lucas voltou para o grupo, caminhando direto na minha direção.
    
    'Bom, aquele ali é o Brayan Cartes, líder dos Guardas. Você irá lutar contra ele, relaxa que ele é mamão com açucar. Enfim, boa sorte novato.'`);

  
  console.log();
  console.log(`Agora você irá lutar contra o líder dos Guardas, Brayan Carter. Como um pirata, você pode luta usando magia. Tanto você como seu oponente possuem 100 de vida.  Escolha um ataque e de dano até que a vida dele zere. Boa sorte, ${jogador}`);
  console.log();
  console.log("Você lançará o primeiro ataque! Escolha entre:");


 function contagem (){
  let p = +prompt(`
  1 - Insonia
  2 - Ventania Cortante
  3 - Geizer
  4 - Choque do trovão
  5 - Incinerar
  6 - Monte de Lava`);

  console.log();
  if ( p == 1){
    vidaP = pirata.vida - insonia
    console.log(`Você movimentos seus braços na diagonal e soltou o Insonia, dando ${insonia} de dano. A vida de Brayan cai para: ${vidaP}.`);
  } else if ( p == 3){
    vidaP = pirata.vida - geizer
    console.log(`Você mexe seus pulsos na direção do lago e depois para cima, convocando o Geizer e dando ${geizer} de dano. A vida de Brayan cai para: ${vidaP}.`);
  } else if ( p == 2){
    vidaP = pirata.vida - ventaniaCortante
    console.log(`Você pula e enxe o pulmão de ar, soltando logo em seguida e dando ${ventaniaCortante} de dano. A vida de Brayan cai para: ${vidaP}.`);
  } else if ( p == 4 ){
    vidaP = pirata.vida - choqueTrovao
    console.log(`Você movimenta seus dedos na direção do céu, e em seguida para ele causando ${choqueTrovao} de dano. A vida de Brayan cai para: ${vidaP}.`);
  } else if ( p == 5 ){
    vidaP = pirata.vida - incinerar
    console.log(`Você movimenta seus braços como estivesse prestes a atirar uma flecha, e acerta ele dando ${incinerar} de dano. A vida de Brayan cai para: ${vidaP}.`);
  } else if ( p == 6 ){
    vidaP = pirata.vida - monteLava
    console.log(`Você junta seus cotovelos e empurra junto ao chão causando ${monteLava} de dano. A vida do Brayan cai para: ${vidaP}.`);
  }

  console.log();
  console.log(`Agora é a vez de Brayan atacar!`);
  vidaN = novatoStatus.vida - danoPc
  console.log(`Brayan te deu ${danoPc} de dano. A sua vida cai para: ${vidaN}`);
  console.log();

  pirata.vida = vidaP
  novatoStatus.vida = vidaN

  if (pirata.vida <= 1 ){
   console.log(`Você ganhou do líder dos Guardas!
   
   E agora, os Piratas reinam em Kazuma. Com você ao lado de Lucas, o líder mais forte do mundo, nada pode para-los. 
   
   ======================================
   
   Obrigada por jogar!`);
  } else if (novatoStatus.vida <= 1){
    console.log("Você perdeu a luta contra o líder dos Guardas. Mas tudo bem, tente novamente!");
    console.log();
    console.log("Vamos começar mais uma vez! Escolha seu ataque.");
    contagem();
 } else {
    contagem();
 }
 }

 contagem();

}

function escolhaGuarda (){
  var guarda = {
  nome: "Brayan Carter",
  vida: 100
}

console.log(`Você aparece dentro de uma catedral. E antes que pudesse pensar qualquer coisa sobre o lugar, um garoto se aproxima de você.

'Eae, você deve ser o novo integrante né? Prazer, sou o Fernando. Também faço parte dos Guardas, tem pouco tempo que entrei mas sou bem esforçado. Vem comigo, vou levar você ao Brayan, é o nosso líder.'

Você adentra a catedral e nota como ela é ainda mais bonita por dentro. Seguindo ele por um corredor grande, você ve uma grande porta dourada. Ele acena um "Vai ficar tudo bem" e vai embora. Eu empuro a porta (pesada) e entro lá. Onde, na cadeira, há alguem sentado. Ele me olha e começa a falar.`);

let novato1 = prompt('Qual é o seu nome, garoto?');


var novatostatus = {
    nome: novato1,
    vida: 100
  }

console.log(`'Olá, é ${novato1} né?. É um prazer, eu sou o Brayan, o líder dos Guardas. Eu dei uma olhada no seu histórico antes de chegar aqui e, devo dizer, estou muito impressionado e ansioso com o que tem a oferecer ao nosso grupo. Gostaria de te por a teste, e irei obviamente. Amanhã os Guardas lutarão contra os Piratas, acredito que ja saiba disso. De qualquer forma, você meu rapaz, irá lutar contra o líder deles e assim poderá fazer parte do nosso grupo. Amanhã te chamarei, boa sorte ${novato1}'`);

console.log(`Acordei com as batidas na porta do meu alojamento, eu sabia o que aquilo significava. Eu estava ansioso e pronto!

Ele não falou nada quando me acompanhou do meu alojamento até o centro da cidade. Não tinha o que falar, nem sei se eu queria ouvir algo áquele ponto. Os piratas demoraram um pouco, mas quando chegaram foi bem rápido. O Brayan foi falar com o líder deles, Lucas alguma coisa, e quando voltou apenas disse. 

'Boa sorte.' E eu só...fui.`);

console.log(`Agora você irá lutar contra o líder dos Piratas, Lucas Sorgen. Como um guarda, você luta com golpes de espadas. Tanto você como seu oponente possuem 100 de vida.  Escolha um ataque e de dano até que a vida dele zere. Boa sorte, ${novato1}`);


 function contagem (){
  let p = +prompt(`Você lançará o primeiro ataque! Escolha entre:
  1 - Ripostar
  2 - Fenda Esperitual
  3 - Tempestade de Aço
  4 - Ponto Cruz
  5 - Espada Meteórica
  6 - Estocada`);

  if ( p == 1){
    vidaG = guarda.vida - insonia
    console.log(`Você saca sua espada e golpeia a sua frente, acertando ele e causando ${insonia} de dano. A vida de Lucas cai para: ${vidag}.`);
  } else if ( p == 3){
    vidaG = guarda.vida - geizer
    console.log(`Você movimenta sua espada em um circulo e com um golpe lança pedaços de aço nele causando: ${geizer} de dano. A vida de Lucas cai para: ${vidaG}.`);
  } else if ( p == 2){
    vidaG = guarda.vida - ventaniaCortante
    console.log(`Você golpeia o vento ao seu lado, mas um pequeno portal se abre atrás de Lucas e ele é pego em cheio, sofrendo ${ventaniaCortante} de dano. A vida de Lucas cai para: ${vidaG}.`);
  } else if ( p == 4 ){
    vidaG = guarda.vida - choqueTrovao
    console.log(`Você desenha um cruz em sua frente e atravessando ela teleporta atrás de Lucas, golpeando e causando: ${choqueTrovao} de dano. A vida de Lucas ${vidaG}.`);
  } else if ( p == 5 ){
    vidaG = guarda.vida - incinerar
    console.log(`Você joga sua espada para cima, e com um movimento faz ela ser lançada em Lucas, fazendo ele tomar ${incinerar} de dano. A vida de Lucas ${vidaG}.`);
  } else if ( p == 6 ){
    vidaG = guarda.vida - monteLava
    console.log(`Você se aproxima de Lucas rapidamente e acerta ele com um golpe liso no ar, causando ${monteLava} de dano. A vida de Lucas cai para: ${vidaG}.`);
  }

   console.log(`Agora é a vez de Lucas atacar!`);
  vidaN = novatostatus.vida - danoPc
  console.log(`Lucas te deu ${danoPc} de dano. A sua vida cai para: ${vidaN}`);

  guarda.vida = vidaG
  novatostatus.vida = vidaN

  if (guarda.vida <= 1 ){
   console.log(`Você ganhou do líder dos Guardas!
   
   Agora, com você junto dos Guardas, tomam o controle de Kazuma de volta e mantenham a paz que não deveria ter sido pertubada!
   
   =======================================
   
   Obrigada por jogar!`);
  } else if (novatostatus.vida <= 1){
    console.log("Você perdeu a luta contra o líder dos Piratas. Mas tudo bem, tente novamente!");
    console.log("Vamos começar mais uma vez! Escolha seu ataque.");
    contagem();
 } else {
    contagem();
 }
 }

 contagem();

}