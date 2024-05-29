// math-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "What is 5 + 3?",
            answers: ["5", "8", "9", "10"],
            correct: "8"
        },
        {
            question: "What is 12 - 4?",
            answers: ["8", "6", "7", "9"],
            correct: "8"
        },
        {
            question: "What is 7 * 2?",
            answers: ["12", "14", "16", "10"],
            correct: "14"
        },
        {
            question: "What is 15 / 3?",
            answers: ["3", "4", "5", "6"],
            correct: "5"
        },
        {
            question: "What is 9 + 6?",
            answers: ["14", "15", "16", "13"],
            correct: "15"
        },
        {
            question: "What is 20 - 9?",
            answers: ["10", "11", "12", "13"],
            correct: "11"
        },
        {
            question: "What is 6 * 6?",
            answers: ["30", "32", "36", "38"],
            correct: "36"
        },
        {
            question: "What is 16 / 4?",
            answers: ["3", "4", "5", "6"],
            correct: "4"
        },
        {
            question: "What is 11 + 2?",
            answers: ["12", "13", "14", "15"],
            correct: "13"
        },
        {
            question: "What is 18 - 7?",
            answers: ["9", "10", "11", "12"],
            correct: "11"
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
            localStorage.setItem('mathQuizScore', score);
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
