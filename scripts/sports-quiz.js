// sports-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "Which country won the first ever World Cup in 1930?",
            answers: ["Brazil", "Uruguay", "Argentina", "Italy"],
            correct: "Uruguay"
        },
        {
            question: "In which sport would you perform a slam dunk?",
            answers: ["Basketball", "Football", "Tennis", "Baseball"],
            correct: "Basketball"
        },
        {
            question: "Who holds the record for the most Grand Slam titles in tennis?",
            answers: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
            correct: "Novak Djokovic"
        },
        {
            question: "Which country hosts the annual Tour de France cycling race?",
            answers: ["Italy", "Spain", "France", "Germany"],
            correct: "France"
        },
        {
            question: "What is the maximum score in a single game of ten-pin bowling?",
            answers: ["200", "250", "300", "350"],
            correct: "300"
        },
        {
            question: "Which sport is known as 'The Beautiful Game'?",
            answers: ["Basketball", "Football", "Tennis", "Cricket"],
            correct: "Football"
        },
        {
            question: "Who won the FIFA Women's World Cup in 2019?",
            answers: ["Germany", "Japan", "USA", "France"],
            correct: "USA"
        },
        {
            question: "In which sport can you score a 'try'?",
            answers: ["Rugby", "Basketball", "Baseball", "Football"],
            correct: "Rugby"
        },
        {
            question: "Who is considered the greatest sprinter of all time?",
            answers: ["Usain Bolt", "Carl Lewis", "Maurice Greene", "Asafa Powell"],
            correct: "Usain Bolt"
        },
        {
            question: "Which country has won the most Olympic gold medals in swimming?",
            answers: ["Australia", "China", "USA", "Russia"],
            correct: "USA"
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
            localStorage.setItem('sportsQuizScore', score);
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
