// Funktsioon, mis teisendab kõik sisestatud kümnendsüsteemi arvud binaar-, heksa- ja oktaalarvudeks.
function convertAll() {
    const decimalInput = document.getElementById('decimalInput').value;
    document.getElementById('binaryInput').value = (+decimalInput).toString(2);
    document.getElementById('hexInput').value = (+decimalInput).toString(16).toUpperCase();
    document.getElementById('octalInput').value = (+decimalInput).toString(8);
}

// Funktsioon, mis teisendab sisestatud arvu vastavasse arvsüsteemi, võttes arvesse antud alust (2, 8, 16).
function convert(inputId, base) {
    const inputValue = document.getElementById(inputId).value;
    const decimalValue = parseInt(inputValue, base);
    
    // Kontrollib, kas sisestatud väärtus on arv ja teisendab selle kümnendsüsteemi.
    if (!isNaN(decimalValue)) {
        document.getElementById('decimalInput').value = decimalValue;
        convertAll(); // Kutsutakse välja funktsioon, mis teisendab kõik sisestatud väärtused.
    }
}

// Funktsioon, mis kontrollib, kas on jõulud ning muudab vastavalt teemat.
function checkTheme() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    const jõuludT = document.getElementById('jõuludT');
    const tavaT = document.getElementById('tavaT');

    // Kontrollib, kas hetkel on detsember (11 on detsembri kuu number).
    if (currentMonth === 11) {
        jõuludT.removeAttribute('disabled'); // Eemaldab jõuluteemaga seotud elemendi puude.
        tavaT.setAttribute('disabled', 'true'); // Lisab tavateemaga seotud elemendile puude.
    } else {
        jõuludT.setAttribute('disabled', 'true'); // Lisab jõuluteemaga seotud elemendile puude.
        tavaT.removeAttribute('disabled'); // Eemaldab tavateemaga seotud elemendi puude.
    }
}

// Kontrollib lehe laadimisel teemat.
window.addEventListener('load', checkTheme);
