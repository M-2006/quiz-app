document.addEventListener('DOMContentLoaded', function() {
    const proQuizData = [
        {
            question: "Which country has the most UNESCO World Heritage Sites?",
            answers: ["Italy", "China", "Spain", "Germany"],
            correct: "Italy"
        },
        {
            question: "What is the deepest oceanic trench in the world?",
            answers: ["Java Trench", "Tonga Trench", "Mariana Trench", "Puerto Rico Trench"],
            correct: "Mariana Trench"
        },
        {
            question: "Which city is known as the 'City of Canals'?",
            answers: ["Amsterdam", "Venice", "Bangkok", "Bruges"],
            correct: "Venice"
        },
        {
            question: "What is the name of the longest mountain range in the world?",
            answers: ["Rocky Mountains", "Andes", "Himalayas", "Alps"],
            correct: "Andes"
        },
        {
            question: "Which desert is known as the 'Empty Quarter'?",
            answers: ["Gobi", "Kalahari", "Sahara", "Rub' al Khali"],
            correct: "Rub' al Khali"
        },
        {
            question: "Which river flows through the Grand Canyon?",
            answers: ["Colorado River", "Mississippi River", "Rio Grande", "Columbia River"],
            correct: "Colorado River"
        },
        {
            question: "What is the official language of Brazil?",
            answers: ["Spanish", "Portuguese", "French", "English"],
            correct: "Portuguese"
        },
        {
            question: "Which country is the largest producer of coffee in the world?",
            answers: ["Colombia", "Vietnam", "Ethiopia", "Brazil"],
            correct: "Brazil"
        },
        {
            question: "What is the smallest independent country on Earth?",
            answers: ["Monaco", "Nauru", "Vatican City", "San Marino"],
            correct: "Vatican City"
        },
        {
            question: "Which U.S. state has the longest coastline?",
            answers: ["California", "Florida", "Alaska", "Texas"],
            correct: "Alaska"
        }
    ];
    
    const quizContainer = document.getElementById('quiz-container');
    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        if (currentQuestionIndex < proQuizData.length) {
            const currentQuestion = proQuizData[currentQuestionIndex];
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
                        <p class="card-text">Your score is: ${score} / ${proQuizData.length}</p>
                        <button class="btn btn-primary" onclick="restartQuiz()">Restart Quiz</button>
                    </div>
                </div>
            `;
            localStorage.setItem('geographyQuizScore', score);
        }
    }

    window.selectAnswer = function(answer) {
        if (answer === proQuizData[currentQuestionIndex].correct) {
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
