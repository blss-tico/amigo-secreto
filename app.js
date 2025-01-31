//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigoAdicionado;
let amigos = [];
let inputAdicionarAmigo = document.getElementById('amigo');
let listaDeAmigosHtml = document.getElementById('listaAmigos');
let listaDeResultadoHtml = document.getElementById('resultado');

// função para adicionar um amigo na lista de amigos
// checa se input do form tem nome do amigo, adiciona amigo na lista, limpa o input do form e o coloca o foco no input
function adicionarAmigo() {
  amigoAdicionado = inputAdicionarAmigo.value;
  if (!amigoAdicionado) { 
    alert('Por favor, insira um nome.'); 
    return;
  }

  amigos.push(amigoAdicionado);
  atualizaListaDeAmigos();

  inputAdicionarAmigo.value = '';
  inputAdicionarAmigo.focus();
}

// função para atualizar a lista de amigos no HTML
function atualizaListaDeAmigos() {
  listaDeAmigosHtml.innerHTML = "";

  amigos.forEach(amigo => {
    let li = document.createElement('li');
    li.textContent = amigo;
    listaDeAmigosHtml.appendChild(li);
  });
}

// função para sortear um amigo
// checa se há amigos para sortear, sorteia amigo aleatório, retira amigo sorteado da lista
function sortearAmigo() {
  if (amigos.length <= 0) {
    alert('Não há amigos para sortear');
    listaDeResultadoHtml.innerHTML = "";
    return;
  }

  let numeroSorteio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[numeroSorteio];
  
  listaDeResultadoHtml.innerHTML = "";
  listaDeResultadoHtml.innerHTML = `<li>${amigoSorteado}<li/>`;
  retiraAmigoSortadoDaLista(amigoSorteado);
}

function retiraAmigoSortadoDaLista(amigoSorteado) {
  let index = amigos.indexOf(amigoSorteado);
  if (index > -1) { amigos.splice(index, 1); }
  atualizaListaDeAmigos();
}
