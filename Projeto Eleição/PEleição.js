var candidato1 = 0;
var candidato2 = 0;
var candidato3 = 0;
var votoNulo = 0;
var votoBranco = 0;

do {

  let anoNascimento = prompt("Qual é a sua idade");
 if (anoNascimento <= 16){
         console.log("Negado. Você não pode votar.");
        break; 
        } else if (anoNascimento <= 18){
         console.log(resposta = prompt("Seu voto é: Opcional. Deseja votar? (Sim ou Não)"));
         if (resposta != "Sim"){
           break;
          };
        } else if (anoNascimento >= 19) {
          console.log("Seu voto é: Obrigatório");
        }

  console.log();
  var opcoesVoto = prompt("Escolha em quem vai votar. Candidato 1 (Digite 1), Candidato 2 (Digite 2), Candidato 3 (Digite 3), Voto nulo (Digite 4) ou Voto em branco (Digite 5)");
  console.log();


  if (opcoesVoto == 1){
    candidato1++;
   } else if (opcoesVoto == 2){
    candidato2++;
   } else if (opcoesVoto == 3){
    candidato3++;
   } else if (opcoesVoto == 4){
   votoNulo++;
  } else if (opcoesVoto == 5){ 
   votoBranco++;
   }

 console.log();
 var pg = prompt(`Deseja votar novamente?`);

} while (pg !== "Não");

exibirResultado = function (){
 
  console.log(`O Candidato 1 recebeu ${candidato1} votos. O Candidato 2 recebeu ${candidato2} votos. O Candidato 3 recebeu ${candidato3} votos. Teve ${votoNulo} votos nulos. Teve ${votoBranco} votos em branco.`);
};

exibirResultado();

/// não consegui mostrar o ganhador :(