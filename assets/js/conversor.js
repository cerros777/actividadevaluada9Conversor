const monto = document.getElementById('monto');
const toBit = document.getElementById('toBit');
const toCol = document.getElementById('toCol');
let btcRate = 0;

document.addEventListener('DOMContentLoaded', fetchBtcRate);
monto.addEventListener('input', convierteDesdeDolares);
toBit.addEventListener('input', convierteDesdeBtc);
toCol.addEventListener('input', convierteDesdeColones);

function fetchBtcRate() {
    fetch('https://blockchain.info/ticker')
        .then(response => response.json())
        .then(data => btcRate = data.USD.last);
}

function convierteDesdeDolares() {
    if (monto.value <= 0) {
        console.log();("Ingrese un monto válido a convertir");
        return;
    }
    const dollars = parseFloat(monto.value);
    toCol.value = (dollars * 8.75).toFixed(2);
    toBit.value = (dollars / btcRate).toFixed(7);
}

function convierteDesdeBtc() {
    if (toBit.value <= 0) {
        console.log();("Ingrese un monto válido a convertir");
        return;
    }
    const btcAmount = parseFloat(toBit.value);
    const dollars = btcAmount * btcRate;
    monto.value = dollars.toFixed(2);
    toCol.value = (dollars * 8.75).toFixed(2);
}

function convierteDesdeColones() {
    if (toCol.value <= 0) {
        console.log();("Ingrese un monto válido a convertir");
        return;
    }
    const colAmount = parseFloat(toCol.value);
    const dollars = colAmount / 8.75;
    monto.value = dollars.toFixed(2);
    toBit.value = (dollars / btcRate).toFixed(7);
}