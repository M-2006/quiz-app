// geography-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "What is the capital of Canada?",
            answers: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
            correct: "Ottawa"
        },
        {
            question: "Which is the longest river in Europe?",
            answers: ["Danube", "Volga", "Rhine", "Seine"],
            correct: "Volga"
        },
        {
            question: "Which country has the most natural lakes?",
            answers: ["USA", "Canada", "Russia", "Brazil"],
            correct: "Canada"
        },
        {
            question: "Which desert is the largest in the world?",
            answers: ["Gobi", "Kalahari", "Sahara", "Antarctic"],
            correct: "Antarctic"
        },
        {
            question: "What is the largest island in the Mediterranean Sea?",
            answers: ["Sicily", "Sardinia", "Cyprus", "Corsica"],
            correct: "Sicily"
        },
        {
            question: "Which is the smallest continent by land area?",
            answers: ["Europe", "Australia", "South America", "Antarctica"],
            correct: "Australia"
        },
        {
            question: "What is the capital of Kenya?",
            answers: ["Nairobi", "Mombasa", "Lagos", "Kampala"],
            correct: "Nairobi"
        },
        {
            question: "Which mountain range forms the border between Europe and Asia?",
            answers: ["Alps", "Rockies", "Himalayas", "Urals"],
            correct: "Urals"
        },
        {
            question: "Which country is the largest by land area?",
            answers: ["Canada", "USA", "Russia", "China"],
            correct: "Russia"
        },
        {
            question: "What is the capital city of Australia?",
            answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            correct: "Canberra"
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
