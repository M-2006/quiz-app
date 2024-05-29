// sports-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            "question": "Which country has won the most FIFA World Cup titles?",
            "answers": ["Brazil", "Germany", "Italy", "Argentina"],
            "correct": "Brazil"
        },
        {
            "question": "Which athlete has won the most Olympic gold medals?",
            "answers": ["Michael Phelps", "Usain Bolt", "Larisa Latynina", "Carl Lewis"],
            "correct": "Michael Phelps"
        },
        {
            "question": "Which city hosted the first modern Olympic Games in 1896?",
            "answers": ["Paris", "London", "Athens", "Rome"],
            "correct": "Athens"
        },
        {
            "question": "Which tennis player has won the most Grand Slam singles titles in history?",
            "answers": ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Margaret Court"],
            "correct": "Margaret Court"
        },
        {
            "question": "Who is the youngest player to score a goal in the history of the FIFA World Cup?",
            "answers": ["Pele", "Diego Maradona", "Kylian Mbappe", "Michael Owen"],
            "correct": "Pele"
        },
        {
            "question": "Which country has won the most medals in the history of the Summer Olympics?",
            "answers": ["United States", "Soviet Union", "China", "Great Britain"],
            "correct": "United States"
        },
        {
            "question": "Which sport is played on the largest field?",
            "answers": ["Cricket", "American football", "Soccer", "Rugby"],
            "correct": "Soccer"
        },
        {
            "question": "Which boxer was known as 'The Greatest' and 'The People's Champion'?",
            "answers": ["Muhammad Ali", "Mike Tyson", "Sugar Ray Robinson", "Joe Louis"],
            "correct": "Muhammad Ali"
        },
        {
            "question": "Which country won the first ever ICC Cricket World Cup in 1975?",
            "answers": ["Australia", "England", "West Indies", "India"],
            "correct": "West Indies"
        },
        {
            "question": "In which year did golf become an Olympic sport again after a hiatus of over 100 years?",
            "answers": ["2004", "2012", "2016", "2020"],
            "correct": "2016"
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
