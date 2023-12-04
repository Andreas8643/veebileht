function checkTheme() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    const jõuludT = document.getElementById('jõuludT');
    const lisastiil = document.getElementById('lisastiil'); // Uue lisastiili CSS-faili ID

    if (currentMonth === 11) { // Detsember
        jõuludT.removeAttribute('disabled');
        lisastiil.removeAttribute('disabled'); // Luba uus lisastiil detsembris
    } else {
        jõuludT.setAttribute('disabled', 'true');
        lisastiil.setAttribute('disabled', 'true'); // Keela uus lisastiil muul ajal
    }
}

// Kontrolli teemat lehe laadimisel
window.addEventListener('load', checkTheme);
