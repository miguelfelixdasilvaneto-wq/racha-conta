import fs from 'node:fs';
import pc from 'picocolors';

// ... a leitura e o reduce continuam iguais

const texto = fs.readFileSync('src/data/conta.json', 'utf-8');
const conta = JSON.parse(texto);

console.log('Racha-conta:', conta.restaurante);
console.log('Pessoas na mesa:', conta.pessoas);
console.log('Itens na conta:', conta.itens.length);
console.table(conta.itens);

const subtotal = conta.itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
console.log(pc.yellow('Racha-conta:'), conta.restaurante);

// ... os console.log continuam iguais

console.log('Subtotal: R$', subtotal.toFixed(2));
const x = conta.itens.reduce((total, item) => total + item.quantidade, 0);
console.log("Unidades pedidas:", x)
const y = conta.itens.filter(item => item.preco > 50).length; 

console.log("itens acima de R$ 50", y)
