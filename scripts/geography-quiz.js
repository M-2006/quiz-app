// geography-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "What is the capital of France?",
            answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
            correct: "Paris"
        },
        {
            question: "Which continent is the Sahara Desert located on?",
            answers: ["Asia", "Africa", "Australia", "Europe"],
            correct: "Africa"
        },
        {
            question: "Which river is the longest in the world?",
            answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            correct: "Nile"
        },
        {
            question: "What is the smallest country in the world?",
            answers: ["Monaco", "Malta", "Vatican City", "San Marino"],
            correct: "Vatican City"
        },
        {
            question: "What is the highest mountain in the world?",
            answers: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
            correct: "Mount Everest"
        },
        {
            question: "Which ocean is the largest?",
            answers: ["Atlantic", "Indian", "Pacific", "Southern"],
            correct: "Pacific"
        },
        {
            question: "What is the capital of Japan?",
            answers: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
            correct: "Tokyo"
        },
        {
            question: "Which country has the largest population?",
            answers: ["India", "USA", "Indonesia", "China"],
            correct: "China"
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            answers: ["South Korea", "Japan", "Thailand", "Vietnam"],
            correct: "Japan"
        },
        {
            question: "Which continent has the most countries?",
            answers: ["Asia", "Africa", "Europe", "South America"],
            correct: "Africa"
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
            localStorage.setItem('geographyQuizScore', score);
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
