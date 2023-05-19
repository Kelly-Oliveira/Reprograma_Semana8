const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');
const marcarTodas = document.querySelector('#marcar-todos');
const limparTodos = document.querySelector('#limpar');

function marcarTarefaComoFeita(evento){
  let tarefaClicada = evento.target;
  tarefaClicada.classList.toggle('feito');
}

function marcarTodasTarefas( ){
  let todasTarefas = document.querySelectorAll('li');
  for (const marcarTodosItens of todasTarefas){
    marcarTodosItens.classList.add('feito')
  }
}

function limparTarefas( ){
  let limpar = document.querySelector('ul');
  limpar.innerHTML = '';
}

function cadastrarTarefa(evento) {
  console.log(evento);
  evento.preventDefault();
  let valorInput = inputTarefa.value;
  let itemLista = document.createElement('li');
  itemLista.innerHTML = valorInput;
  itemLista.addEventListener('click', marcarTarefaComoFeita)

  let botaoDeletar = document.createElement('button');
  itemLista.appendChild(botaoDeletar)

  let lista = document.querySelector('ul');
  lista.appendChild(itemLista);
  inputTarefa.value= '';
}

limparTodos.addEventListener('click', limparTarefas);

marcarTodas.addEventListener('click', marcarTodasTarefas);

formulario.addEventListener('submit', cadastrarTarefa);
