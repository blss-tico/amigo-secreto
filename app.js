//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigoAdicionado;
let listaDeAmigos = [];
let inputAdicionarAmigo = document.getElementById('amigo');
let listaDeAmigosHtml = document.getElementById('listaAmigos');

function atualizaListaDeAmigosTela(amigo) {
  let li = document.createElement('li');
  li.textContent = amigo;
  listaDeAmigosHtml.appendChild(li);
}

function adicionarAmigo() {
  amigoAdicionado = inputAdicionarAmigo.value;
  if (!amigoAdicionado) { 
    alert('Digite o nome do seu amigo para o sorteio'); 
    return;
  }

  listaDeAmigos.push(amigoAdicionado);
  atualizaListaDeAmigosTela(amigoAdicionado);
  inputAdicionarAmigo.value = '';
}
