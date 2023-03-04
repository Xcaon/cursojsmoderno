




const nuevoElemento = document.createElement('div');

nuevoElemento.textContent = "Objetoooooooooooo";

const lista = document.querySelector(".lista");

lista.insertBefore( nuevoElemento, lista.children[1] );
