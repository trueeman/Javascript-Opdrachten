function keer() { 
    let getal1 = parseInt(document.getElementById('nummer').value);
    let getal2 = parseInt(document.getElementById('nummers').value);
    document.getElementById('antwoord').innerHTML = getal1 * getal2
}

function minus() { 
    let getal1 = parseInt(document.getElementById('nummer').value);
    let getal2 = parseInt(document.getElementById('nummers').value);
    document.getElementById('antwoord').innerHTML = getal1 - getal2
}

function plus() { 
    let getal1 = parseInt(document.getElementById('nummer').value);
    let getal2 = parseInt(document.getElementById('nummers').value);
    document.getElementById('antwoord').innerHTML = getal1 + getal2
}

function deel() { 
    let getal1 = parseInt(document.getElementById('nummer').value);
    let getal2 = parseInt(document.getElementById('nummers').value);
    document.getElementById('antwoord').innerHTML = getal1 / getal2
}