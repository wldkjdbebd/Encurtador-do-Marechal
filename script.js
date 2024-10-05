let currentQuestion = 1;

function answerQuestion(questionNumber, answer) {
    console.log(`Pergunta ${questionNumber}: Resposta - ${answer}`);
    document.getElementById(`question${questionNumber}`).style.display = 'none';
    currentQuestion++;
    if (currentQuestion <= 3) {
        document.getElementById(`question${currentQuestion}`).style.display = 'block';
    } else {
        showJoke();
    }
}

function showJoke() {
    document.getElementById('joke').style.display = 'block';
    setTimeout(() => {
        document.getElementById('redirectButton').style.display = 'block';
    }, 3000);
}

