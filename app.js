//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigoAdicionado;
let listaDeAmigos = [];
let inputAdicionarAmigo = document.getElementById('amigo');
let listaDeAmigosHtml = document.getElementById('listaAmigos');
let listaDeResultadoHtml = document.getElementById('resultado');

// função para adicionar um amigo na lista de amigos
// após a adição o form é limpo e o foco permanece no form
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

// função para atualizar uma lista no HTML baseado no id do elemento lista(ul)
function atualizaListaPeloIdNoHtml(dado, listaHtml) {
  let li = document.createElement('li');
  li.textContent = dado;
  listaHtml.appendChild(li);
}

// função para sortear um amigo
// após o sorteio aleatório, o amigo é retirado da lista para um novo sorteio
function sortearAmigo() {
  if (listaDeAmigos.length <= 0) {
    alert('Não há amigos para sortear');
    return;
  }

  let numeroSorteio = parseInt(Math.random() * listaDeAmigos.length);
  let amigoSorteado = listaDeAmigos[numeroSorteio];
  
  atualizaListaPeloIdNoHtml(amigoSorteado, listaDeResultadoHtml);
  retiraAmigoSortadoDaLista(amigoSorteado);  
}

function retiraAmigoSortadoDaLista(amigoSorteado) {
  let index = listaDeAmigos.indexOf(amigoSorteado);
  if (index > -1) { listaDeAmigos.splice(index, 1); }
}
