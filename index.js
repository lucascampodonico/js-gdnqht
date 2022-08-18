// Import stylesheets
import './style.css';

var res = [
  {
    id: 3,
    lista_id: 1,
    dep_id: 1,
    precio: 700,
    nombre: 'Art c',
    stock: 10,
  },
  {
    id: 3,
    lista_id: 1,
    dep_id: 2,
    precio: 700,
    nombre: 'Art c',
    stock: 15,
  },
  {
    id: 3,
    lista_id: 2,
    dep_id: 1,
    precio: 200,
    nombre: 'Art c',
    stock: 10,
  },
  {
    id: 3,
    lista_id: 2,
    dep_id: 2,
    precio: 200,
    nombre: 'Art c',
    stock: 15,
  },
  {
    id: 1,
    lista_id: 1,
    dep_id: 1,
    precio: 500,
    nombre: 'Art A',
    stock: 10,
  },
  {
    id: 1,
    lista_id: 1,
    dep_id: 2,
    precio: 500,
    nombre: 'Art A',
    stock: 15,
  },
  {
    id: 1,
    lista_id: 2,
    dep_id: 1,
    precio: 300,
    nombre: 'Art A',
    stock: 10,
  },
  {
    id: 1,
    lista_id: 2,
    dep_id: 2,
    precio: 300,
    nombre: 'Art A',
    stock: 15,
  },
  {
    id: 2,
    lista_id: 1,
    dep_id: 2,
    precio: 200,
    nombre: 'Art B',
    stock: 15,
  },
  {
    id: 2,
    lista_id: 1,
    dep_id: 1,
    precio: 200,
    nombre: 'Art B',
    stock: 15,
  },
];

const listacliente = res.filter((item) => item.lista_id === 2);
const listabase = res.filter((item) => item.lista_id === 1);
const dep1_lista2 = listacliente.filter((item) => item.dep_id === 1);
const dep2_lista2 = listacliente.filter((item) => item.dep_id === 2);
const dep1_lista1 = listabase.filter((item) => item.dep_id === 1);
const dep2_lista1 = listabase.filter((item) => item.dep_id === 2);

var array = [];
dep2_lista2.forEach((eb) => {
  const i = dep1_lista2.findIndex((e) => e.id === eb.id);
  if (i > -1) {
    var obj = {
      id: eb.id,
      lista_id: eb.lista_id,
      nombre: eb.nombre,
      precio: eb.precio,
      stock_total: dep1_lista2[i].stock + eb.stock
    }
    array.push(obj)
  }
});
var array2 = [];
dep2_lista1.forEach((eb) => {
  const i = dep1_lista1.findIndex((e) => e.id === eb.id);
  if (i > -1) {
    var obj = {
      id: eb.id,
      lista_id: eb.lista_id,
      nombre: eb.nombre,
      precio: eb.precio,
      stock_total: dep1_lista1[i].stock + eb.stock
    }
    array2.push(obj)
  }
});

array2.forEach((eb) => {
  const i = array.findIndex((e) => e.id === eb.id);
  if (i === -1) {
    array.push(eb)
  }
})

var arr = JSON.stringify(array, undefined, 2)

const appDiv = document.getElementById('app');
appDiv.innerHTML = `${arr}`;

console.log(array)