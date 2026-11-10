import fs from 'node:fs';
import { paraCentavos,calcularGorjeta, formatarReais } from '../regras/conta.js';
import pc from 'picocolors';
import { format } from 'node:path';

// ... a leitura e o reduce continuam iguais

const texto = fs.readFileSync('src/data/conta.json', 'utf-8');
const conta = JSON.parse(texto);

console.log('Racha-conta:', conta.restaurante);
console.log('Pessoas na mesa:', conta.pessoas);
console.log('Itens na conta:', conta.itens.length);
console.table(conta.itens);

const subtotal = conta.itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
console.log(pc.yellow('Racha-conta:'), conta.restaurante);

const x = conta.itens.reduce((total, item) => total + item.quantidade, 0);
console.log("Unidades pedidas:", x)
const y = conta.itens.filter(item => item.preco > 50).length;
const subtotalCentavos = paraCentavos(subtotal)
const gorjetaCentavos= calcularGorjeta(subtotalCentavos, conta.gorjeta);
const totalCentavos = subtotalCentavos + gorjetaCentavos;
console.log("itens acima de R$ 50", y)
const restaurante = 'cantina bella nonna';
const pessoas = 4;

console.log('mesa de', pessoas, 'na', restaurante);
console.log('mesa de ${pessoas} na ${restaurante}');

console.log(`Subtotal: R$ ${(subtotalCentavos / 100).toFixed(2)}`);
console.log(`Gorjeta (${conta.gorjeta}%): R$ ${(gorjetaCentavos / 100).toFixed(2)}`);
console.log(`Total: R$ ${(totalCentavos / 100).toFixed(2)}`);

console.log(Math.floor(totalCentavos / pessoas) / 100)
console.log(Math.floor(totalCentavos % pessoas))

function saudar() {
  console.log('boa noite! mesa para quanto?')
}
function linha() {
  console.log('======================================================================')
}
linha()
saudar()
saudar()
linha()
function totalDoItem(preco, quantidade) {
  return preco * quantidade;
}
function mostrarTotalDoItem(preco, quantidade) {
  console.log(preco * quantidade);
}

const a = totalDoItem(14.5, 2);
const b = mostrarTotalDoItem(14.5, 2);
console.log(a, b);


const refri = totalDoItem(14.5, 2);
console.log(refri);
console.log(totalDoItem(72.9, 1) + totalDoItem(14.5, 2));
console.log(`Refrigerantes: R$ ${totalDoItem(14.5, 2).toFixed(2)}`);

export function calularGorjeta(subtotal, percentual = 10) {
  return Math.round9(SUBTOTAL * PERCENTUAL / 100);
}

console.log (formatarReais(100)) 

const caro = (item) => item.preco > 50;
