const quizData = [
    {
        question: "Which celebrity is known for their role as Iron Man?",
        answers: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
        correctAnswer: "Robert Downey Jr."
    },
    {
        question: "Which singer is known as the 'Queen of Pop'?",
        answers: ["Madonna", "Beyoncé", "Lady Gaga", "Rihanna"],
        correctAnswer: "Madonna"
    },
    {
        question: "Which actor played the character of Jack in the movie Titanic?",
        answers: ["Tom Cruise", "Brad Pitt", "Leonardo DiCaprio", "Johnny Depp"],
        correctAnswer: "Leonardo DiCaprio"
    }
];

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => selectAnswer(answer));
        answersElement.appendChild(button);
    });
}

function selectAnswer(selectedAnswer) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = "Quiz Complete!";
    answersElement.innerHTML = `<p>Your final score is ${score} out of ${quizData.length}.</p>`;
    scoreElement.style.display = "none";
}

loadQuestion();
