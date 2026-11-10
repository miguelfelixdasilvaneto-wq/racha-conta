export function paraCentavos(REAIS) {
    return Math.round(REAIS * 100);
}

export function calcularGorjeta(subtotal, percentual = 10) {
  return Math.round(subtotal * percentual / 100);
}

export function formatarReais(centavos){
    const REAIS =centavos/100
    return `R$ ${REAIS.toFixed(2)}`
}