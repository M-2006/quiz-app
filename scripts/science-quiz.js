// science-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "What is the chemical symbol for water?",
            answers: ["H2O", "CO2", "NaCl", "O2"],
            correct: "H2O"
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: ["Earth", "Mars", "Jupiter", "Venus"],
            correct: "Mars"
        },
        {
            question: "What gas do plants absorb from the atmosphere?",
            answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            correct: "Carbon Dioxide"
        },
        {
            question: "What is the speed of light?",
            answers: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
            correct: "300,000 km/s"
        },
        {
            question: "Which part of the cell contains the genetic material?",
            answers: ["Cytoplasm", "Nucleus", "Ribosome", "Mitochondria"],
            correct: "Nucleus"
        },
        {
            question: "What is the powerhouse of the cell?",
            answers: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"],
            correct: "Mitochondria"
        },
        {
            question: "What is the most abundant gas in the Earth's atmosphere?",
            answers: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
            correct: "Nitrogen"
        },
        {
            question: "What force keeps us on the ground?",
            answers: ["Magnetism", "Electricity", "Gravity", "Friction"],
            correct: "Gravity"
        },
        {
            question: "What is the smallest unit of life?",
            answers: ["Tissue", "Organ", "Cell", "Organism"],
            correct: "Cell"
        },
        {
            question: "What planet is known as the Earth's twin?",
            answers: ["Mars", "Venus", "Jupiter", "Saturn"],
            correct: "Venus"
        }
    ];

    const quizContainer = document.getElementById('quiz-container');
    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        if (currentQuestionIndex < quizData.length) {
            const currentQuestion = quizData[currentQuestionIndex];
            quizContainer.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${currentQuestion.question}</h5>
                        ${currentQuestion.answers.map((answer, index) => `
                            <button class="btn btn-outline-primary m-2" onclick="selectAnswer('${answer}')">${answer}</button>
                        `).join('')}
                    </div>
                </div>
            `;
        } else {
            quizContainer.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Quiz Completed!</h5>
                        <p class="card-text">Your score is: ${score} / ${quizData.length}</p>
                        <button class="btn btn-primary" onclick="restartQuiz()">Restart Quiz</button>
                    </div>
                </div>
            `;
            localStorage.setItem('scienceQuizScore', score);
        }
    }

    window.selectAnswer = function(answer) {
        if (answer === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        loadQuestion();
    }

    window.restartQuiz = function() {
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    }

    loadQuestion();
});
