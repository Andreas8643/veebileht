// Funktsioon, mis genereerib juhusliku numbri (0 või 1) ja
// vastavalt sellele genereerib juhusliku binaar- või oktaalarvu.
function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 2); // 0 või 1

    switch (randomNumber) {
        case 0:
            return {
                value: Math.floor(Math.random() * 256).toString(2), // Juhuslik binaararv
                system: "Binaarsüsteem"
            };
        case 1:
            return {
                value: Math.floor(Math.random() * 256).toString(8), // Juhuslik oktaalarv
                system: "Oktaalsüsteem"
            };
    }
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

    // Teisendab õige vastuse (currentQuestion.value) täisarvuks,
    // arvestades kasutatavat arvsüsteemi (binaar või oktaal).
    const correctAnswer = parseInt(currentQuestion.value, currentQuestion.system === "Binaarsüsteem" ? 2 : 8);

    // Kontrollib, kas kasutaja vastus on õige.
    const isCorrect = parseInt(userAnswer, 10) === correctAnswer;

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
