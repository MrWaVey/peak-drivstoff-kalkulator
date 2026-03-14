function beregn(){

    let forbruk100 = parseFloat(document.getElementById("forbruk100").value);
    let avstand = parseFloat(document.getElementById("avstand").value);
    let pris = parseFloat(document.getElementById("pris").value);
    
    /* steg 1: liter per km */
    let literPerKm = forbruk100 / 100;
    
    /* steg 2: total drivstoff */
    let totalDrivstoff = literPerKm * avstand;
    
    /* steg 3: total pris */
    let totalPris = totalDrivstoff * pris;
    
    /* vis resultat */
    document.getElementById("lpkm").innerText = literPerKm.toFixed(4);
    document.getElementById("drivstoff").innerText = totalDrivstoff.toFixed(2);
    document.getElementById("totalPris").innerText = totalPris.toFixed(2);
    
    }