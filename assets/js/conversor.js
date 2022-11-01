const monto = document.getElementById('monto');
const convertir = document.getElementById('convertir');
const toBit = document.getElementById('toBit');
const toCol = document.getElementById('toCol');

convertir.addEventListener('click', () => {
    conviertecol();
    convierteBtc();
});

function conviertecol(){
    if(monto.value < 0 || monto.value == 0){alert("Ingrese un monto válido a convertir")}
    else{
        let montoa = monto.value
        let col = montoa * 8.75
        toCol.value = col.toLocaleString('en', {
            maximumFractionDigits: 2
        })
    }

}

function convierteBtc(){
   fetch('https://blockchain.info/ticker')
   .then(response => response.json())
   .then(data => displayData(data));
}

function displayData(data){
    if(monto.value < 0 || monto.value == 0)return
    let rate = data.USD.last;
    let montoa = monto.value;
    let totalBtc = montoa / rate;
    toBit.value = totalBtc.toFixed(7)
}

