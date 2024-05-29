// math-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "What is the square root of 144?",
            answers: ["10", "12", "14", "16"],
            correct: "12"
        },
        {
            question: "What is 25% of 200?",
            answers: ["40", "50", "45", "60"],
            correct: "50"
        },
        {
            question: "What is the result of 3^3?",
            answers: ["6", "9", "27", "18"],
            correct: "27"
        },
        {
            question: "Solve for x: 2x + 3 = 11",
            answers: ["2", "3", "4", "5"],
            correct: "4"
        },
        {
            question: "What is the value of π (pi) to 2 decimal places?",
            answers: ["3.12", "3.14", "3.16", "3.18"],
            correct: "3.14"
        },
        {
            question: "What is the derivative of x^2?",
            answers: ["1", "2x", "x", "x^2"],
            correct: "2x"
        },
        {
            question: "What is the sum of the interior angles of a hexagon?",
            answers: ["360°", "540°", "720°", "900°"],
            correct: "720°"
        },
        {
            question: "Solve for y: 3y - 4 = 2y + 5",
            answers: ["-1", "0", "1", "9"],
            correct: "9"
        },
        {
            question: "What is the least common multiple of 12 and 15?",
            answers: ["60", "30", "90", "45"],
            correct: "60"
        },
        {
            question: "What is 7 factorial (7!)?",
            answers: ["720", "5040", "362880", "120"],
            correct: "5040"
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
