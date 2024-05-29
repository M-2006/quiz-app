// history-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "Who was the first President of the United States?",
            answers: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
            correct: "George Washington"
        },
        {
            question: "In what year did the Titanic sink?",
            answers: ["1905", "1912", "1918", "1923"],
            correct: "1912"
        },
        {
            question: "Which ancient civilization built the pyramids?",
            answers: ["Mayan", "Aztec", "Egyptian", "Roman"],
            correct: "Egyptian"
        },
        {
            question: "Who was the leader of the Soviet Union during World War II?",
            answers: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Mikhail Gorbachev"],
            correct: "Joseph Stalin"
        },
        {
            question: "The Wright brothers are credited with inventing what?",
            answers: ["Telephone", "Light Bulb", "Airplane", "Automobile"],
            correct: "Airplane"
        },
        {
            question: "What was the name of the ship on which the Pilgrims traveled to North America?",
            answers: ["Santa Maria", "Mayflower", "Endeavour", "Discovery"],
            correct: "Mayflower"
        },
        {
            question: "Who was the Queen of England during the Spanish Armada?",
            answers: ["Mary I", "Elizabeth I", "Victoria", "Anne"],
            correct: "Elizabeth I"
        },
        {
            question: "The Hundred Years' War was fought between which two countries?",
            answers: ["England and France", "Spain and Portugal", "Austria and Prussia", "Russia and Japan"],
            correct: "England and France"
        },
        {
            question: "In what year did World War I begin?",
            answers: ["1910", "1914", "1918", "1922"],
            correct: "1914"
        },
        {
            question: "Who wrote the Declaration of Independence?",
            answers: ["John Adams", "Benjamin Franklin", "Thomas Jefferson", "James Madison"],
            correct: "Thomas Jefferson"
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
            localStorage.setItem('historyQuizScore', score);
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
