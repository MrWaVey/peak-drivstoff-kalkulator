const beregnBtn = document.getElementById("beregnBtn");
beregnBtn.addEventListener("click", beregn);

function beregn() {
    let forbruk100 = parseFloat(document.getElementById("forbruk100").value);
    let avstand = parseFloat(document.getElementById("avstand").value);
    let pris = parseFloat(document.getElementById("pris").value);
    let fortjeneste = parseFloat(document.getElementById("fortjeneste").value);
    let antallPersoner = parseInt(document.getElementById("antallPersoner").value);

    // Validering
    if(isNaN(forbruk100) || isNaN(avstand) || isNaN(pris) || isNaN(fortjeneste) || isNaN(antallPersoner) || antallPersoner < 1){
        alert("Vennligst fyll inn alle feltene korrekt (antall personer må være minst 1).");
        return;
    }

    // Beregninger
    let literPerKm = forbruk100 / 100;
    let totalDrivstoff = literPerKm * avstand;
    let drivstoffPris = totalDrivstoff * pris;
    let sluttPris = drivstoffPris + fortjeneste;
    let prisPerPerson = sluttPris / antallPersoner;

    // Vis resultat
    document.getElementById("lpkm").innerText = literPerKm.toFixed(4);
    document.getElementById("drivstoff").innerText = totalDrivstoff.toFixed(2);
    document.getElementById("drivstoffPris").innerText = drivstoffPris.toFixed(2);
    document.getElementById("sluttPris").innerText = sluttPris.toFixed(2);
    document.getElementById("prisPerPerson").innerText = prisPerPerson.toFixed(2);
}