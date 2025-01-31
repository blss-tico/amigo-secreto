//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigoAdicionado;
let listaDeAmigos = [];

function adicionarAmigo() {
  amigoAdicionado = document.getElementById('amigo').value;
  if (!amigoAdicionado) { alert('Digite o nome do seu amigo para o sorteio'); }
  listaDeAmigos.push(amigoAdicionado);
}

