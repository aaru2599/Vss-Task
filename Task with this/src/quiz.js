const correctAnswer = "Ankit Bhai";
const choiceButtons = document.getElementsByClassName("option");

function checkAnswer() {
    const selectedAns = this.textContent;
    if (selectedAns === correctAnswer) {
        document.getElementById("answer").textContent = "Correct Answer";
    } else {
        document.getElementById("answer").textContent = "Wrong Answer";
    }
}

for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener("click", checkAnswer);
}
