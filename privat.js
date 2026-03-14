const beregnBtn = document.getElementById("beregnBtn");

beregnBtn.addEventListener("click", beregn);

function beregn() {
    let forbruk100 = parseFloat(document.getElementById("forbruk100").value);
    let avstand = parseFloat(document.getElementById("avstand").value);
    let pris = parseFloat(document.getElementById("pris").value);

    if(isNaN(forbruk100) || isNaN(avstand) || isNaN(pris)){
        alert("Vennligst fyll inn alle feltene korrekt.");
        return;
    }

    let literPerKm = forbruk100 / 100;
    let totalDrivstoff = literPerKm * avstand;
    let totalPris = totalDrivstoff * pris;

    document.getElementById("lpkm").innerText = literPerKm.toFixed(4);
    document.getElementById("drivstoff").innerText = totalDrivstoff.toFixed(2);
    document.getElementById("totalPris").innerText = totalPris.toFixed(2);
}