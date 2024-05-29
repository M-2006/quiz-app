// math-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "What is the integral of 2x dx?",
            answers: ["x^2 + C", "2x + C", "x + C", "2x^2 + C"],
            correct: "x^2 + C"
        },
        {
            question: "What is the solution to the differential equation dy/dx = 3y?",
            answers: ["y = 3e^x", "y = 3x", "y = Ce^(3x)", "y = 3e^(-x)"],
            correct: "y = Ce^(3x)"
        },
        {
            question: "What is the determinant of the matrix [[1, 2], [3, 4]]?",
            answers: ["-2", "2", "1", "-1"],
            correct: "-2"
        },
        {
            question: "If f(x) = x^3 - 3x + 2, what is f'(x)?",
            answers: ["3x^2 - 3", "3x^2 + 3", "3x^2 - 1", "3x^2 + 1"],
            correct: "3x^2 - 3"
        },
        {
            question: "Solve for x: e^x = 5",
            answers: ["ln(5)", "5ln(e)", "ln(5e)", "5/e"],
            correct: "ln(5)"
        },
        {
            question: "What is the limit of (2x^2 + 3x)/(x^2 + x) as x approaches infinity?",
            answers: ["2", "3", "5", "∞"],
            correct: "2"
        },
        {
            question: "What is the eigenvalue of the matrix [[2, 0], [0, 3]]?",
            answers: ["2 and 3", "0", "5", "None of the above"],
            correct: "2 and 3"
        },
        {
            question: "What is the radius of convergence for the series ∑ (x^n)/n?",
            answers: ["1", "e", "0", "∞"],
            correct: "1"
        },
        {
            question: "What is the Taylor series expansion of sin(x) around x = 0?",
            answers: ["x - x^3/3! + x^5/5! - ...", "x + x^2/2! + x^3/3! + ...", "1 + x + x^2/2! + ...", "None of the above"],
            correct: "x - x^3/3! + x^5/5! - ..."
        },
        {
            question: "What is the solution to the system of equations: 2x + y = 5 and x - y = 1?",
            answers: ["x = 2, y = 1", "x = 1, y = 3", "x = 3, y = 2", "x = 2, y = 3"],
            correct: "x = 2, y = 1"
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
