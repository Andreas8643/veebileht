function getRandomNumber() {
    const randomSystem = Math.floor(Math.random() * 3); // 0, 1 või 2

    let value, system;
    switch (randomSystem) {
        case 0:
            value = Math.floor(Math.random() * 256).toString(2); // Juhuslik binaararv
            system = "Binaarsüsteem";
            break;
        case 1:
            value = Math.floor(Math.random() * 256).toString(16); // Juhuslik heksadetsimaalarv
            system = "Heksadetsimaalsüsteem";
            break;
        case 2:
            value = Math.floor(Math.random() * 256).toString(8); // Juhuslik oktaalarv
            system = "Oktaalsüsteem";
            break;
    }

    return {
        value: value,
        system: system
    };
}
// Muutuja, mis hoiab hetkel kehtivat küsimust.
let currentQuestion = getRandomNumber();

// Uuendab HTML-i, et näidata hetkel kehtivat küsimust.
document.getElementById("question").innerText = `${currentQuestion.value} (${currentQuestion.system})`;

// Funktsioon, mis genereerib uue küsimuse ja uuendab HTML-i vastavalt.
function generateQuestion() {
    currentQuestion = getRandomNumber();
    document.getElementById("question").innerText = `${currentQuestion.value} (${currentQuestion.system})`;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
}

// Funktsioon, mis kontrollib kasutaja vastust.
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value;
    const questionBox = document.getElementById("questionBox");
    // Teisendab õige vastuse (currentQuestion.value) täisarvuks,
    // arvestades kasutatavat arvsüsteemi.
    let correctAnswer;
    switch (currentQuestion.system) {
        case "Binaarsüsteem":
            correctAnswer = parseInt(currentQuestion.value, 2);
            break;
        case "Heksadetsimaalsüsteem":
            correctAnswer = parseInt(currentQuestion.value, 16);
            break;
        case "Oktaalsüsteem":
            correctAnswer = parseInt(currentQuestion.value, 8);
            break;
    }

    // Kontrollib, kas kasutaja vastus on õige ja paneb selle järgi tausta.
    const isCorrect = parseInt(userAnswer, 10) === correctAnswer;
    if (isCorrect) {
        questionBox.classList.remove("vale");
        questionBox.classList.add("oige");
    } else {
        questionBox.classList.remove("oige");
        questionBox.classList.add("vale");
    }

    // Uuendab tulemuse paragrahvi vastavalt kas vastus oli õige või vale.
    document.getElementById("result").innerText = isCorrect ? "Õige! Hästi tehtud." : "Vale. Proovi uuesti.";
}

// Funktsioon, mis kuulab klahvivajutusi ja kutsub välja checkAnswer(),
// kui vajutatakse "Enter" klahvi.
function handleKeyPress(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
}
// Kontrollib, kas on jõulud, kui on siis jõulu theme
function checkTheme() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    const jõuludT = document.getElementById('jõuludT');
    const tavaT = document.getElementById('tavaT');

    if (currentMonth === 11) {
        jõuludT.removeAttribute('disabled');
        tavaT.setAttribute('disabled', 'true');
    } else {
        jõuludT.setAttribute('disabled', 'true');
        tavaT.removeAttribute('disabled');
    }
}

// Kontrolli teemat lehe laadimisel
window.addEventListener('load', checkTheme);
