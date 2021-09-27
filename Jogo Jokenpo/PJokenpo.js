do {
 var quantidadePartidas = +prompt("Quantas rodadas deseja jogar?");
 let pontosUser = 0;
 let pontosPc = 0;


  function rodada(){
     for ( let partidas = 0; partidas < quantidadePartidas; partidas++){

     var escolhas = ["pedra","papel","tesoura","pedra","papel","tesoura","pedra","papel","tesoura","pedra","papel","tesoura","pedra","papel","tesoura"];
     let entradapc = Math.floor(Math.random() * 15);
     var escolhapc = escolhas[entradapc];

     console.log();
     let resposta = prompt("Escolha entre Pedra, Papel ou Tesoura");

     console.log();
     console.log(`Sua escolha é: ${resposta}`);
     console.log(`Escolha do PC é: ${escolhapc}`);

     if (resposta == "pedra" && escolhapc == "papel"){
     pontosPc = pontosPc + 1;
     } else if (resposta == "pedra" && escolhapc == "tesoura"){
     pontosUser = pontosUser + 1;
     } else if (resposta == "tesoura" && escolhapc == "papel"){
     pontosUser = pontosUser + 1;
     } else if (resposta == "tesoura" && escolhapc == "pedra"){
     pontosPc = pontosPc + 1;
     } else if (resposta == "papel" && escolhapc == "pedra"){
     pontosUser = pontosUser + 1;
     } else if (resposta == "papel" && escolhapc == "tesoura"){
     pontosPc = pontosPc + 1;
     }
  
    }
  
   console.log();
   console.log(`O PC fez ${pontosPc} pontos.`);
   console.log(`Você fez ${pontosUser} pontos.`);
   console.log();
  
   if (pontosUser > pontosPc){
   console.log("Você é o grande vencedor!");
   } else if (pontosUser == pontosPc){
   console.log("O jogo empatou!");
   } else {
   console.log("Você perdeu.")
   }

  }
 rodada();

 console.log();
 var rodadaDois = prompt("Deseja jogar novamente? (Sim ou Não)");

 if (rodadaDois == "Sim"){
  console.log();
  var quantidadePartidas  = +prompt("Quantas rodadas deseja jogar?");
  console.log();
  rodada();
 } else {
  console.log("Obrigada por jogar!!");
 }

} while (rodadaDois == "Sim");