//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigoAdicionado;
let listaDeAmigos = [];
let inputAdicionarAmigo = document.getElementById('amigo');
let listaDeAmigosHtml = document.getElementById('listaAmigos');
let listaDeResultadoHtml = document.getElementById('resultado');

function adicionarAmigo() {
  amigoAdicionado = inputAdicionarAmigo.value;
  if (!amigoAdicionado) { 
    alert('Digite o nome do seu amigo para o sorteio'); 
    return;
  }

  listaDeAmigos.push(amigoAdicionado);
  atualizaListaPeloIdNoHtml(amigoAdicionado, listaDeAmigosHtml);
  inputAdicionarAmigo.value = '';
  inputAdicionarAmigo.focus();
}

function atualizaListaPeloIdNoHtml(dado, listaHtml) {
  let li = document.createElement('li');
  li.textContent = dado;
  listaHtml.appendChild(li);
}

function sortearAmigo() {
  if (listaDeAmigos.length <= 0) {
    alert('Não há amigos para sortear');
    return;
  }

  let numeroSorteio = parseInt(Math.random() * listaDeAmigos.length);
  atualizaListaPeloIdNoHtml(listaDeAmigos[numeroSorteio], listaDeResultadoHtml);
  
  let index = listaDeAmigos.indexOf(listaDeAmigos[numeroSorteio]);
  if (index > -1) { listaDeAmigos.splice(index, 1); }
}
