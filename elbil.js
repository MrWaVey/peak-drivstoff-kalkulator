const beregnBtn = document.getElementById("beregnBtn");
beregnBtn.addEventListener("click", beregn);

function beregn() {
    let forbruk100 = parseFloat(document.getElementById("forbruk100").value);
    let avstand = parseFloat(document.getElementById("avstand").value);
    let pris = parseFloat(document.getElementById("pris").value);
    let fortjeneste = parseFloat(document.getElementById("fortjeneste").value);

    let kWhPerKm = forbruk100 / 100;
    let totalEnergi = kWhPerKm * avstand;
    let strømPris = totalEnergi * pris;
    let sluttPris = strømPris + fortjeneste;

    document.getElementById("kWhKm").innerText = kWhPerKm.toFixed(4);
    document.getElementById("energiBrukt").innerText = totalEnergi.toFixed(2);
    document.getElementById("strømPris").innerText = strømPris.toFixed(2);
    document.getElementById("sluttPris").innerText = sluttPris.toFixed(2);
}