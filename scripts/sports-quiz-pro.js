// sports-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            "question": "Who is the all-time leading scorer in NBA history?",
            "answers": ["LeBron James", "Kobe Bryant", "Kareem Abdul-Jabbar", "Michael Jordan"],
            "correct": "Kareem Abdul-Jabbar"
        },
        {
            "question": "Which NFL team has won the most Super Bowl championships?",
            "answers": ["Dallas Cowboys", "Pittsburgh Steelers", "New England Patriots", "San Francisco 49ers"],
            "correct": "Pittsburgh Steelers"
        },
        {
            "question": "Who holds the record for the most career goals in NHL history?",
            "answers": ["Wayne Gretzky", "Gordie Howe", "Jaromir Jagr", "Mario Lemieux"],
            "correct": "Wayne Gretzky"
        },
        {
            "question": "Which MLB team has won the most World Series titles?",
            "answers": ["New York Yankees", "Los Angeles Dodgers", "St. Louis Cardinals", "Boston Red Sox"],
            "correct": "New York Yankees"
        },
        {
            "question": "Who is the only player to win five FIFA Ballon d'Or awards?",
            "answers": ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Ronaldinho"],
            "correct": "Lionel Messi"
        },
        {
            "question": "Which female tennis player has won the most Grand Slam singles titles in the Open Era?",
            "answers": ["Serena Williams", "Steffi Graf", "Martina Navratilova", "Margaret Court"],
            "correct": "Serena Williams"
        },
        {
            "question": "Which boxer holds the record for the longest unbeaten streak in professional boxing?",
            "answers": ["Floyd Mayweather Jr.", "Rocky Marciano", "Sugar Ray Robinson", "Muhammad Ali"],
            "correct": "Floyd Mayweather Jr."
        },
        {
            "question": "Who was the first quarterback to win five Super Bowl championships?",
            "answers": ["Tom Brady", "Joe Montana", "Terry Bradshaw", "Peyton Manning"],
            "correct": "Tom Brady"
        },
        {
            "question": "Which golfer has spent the most consecutive weeks ranked number one in the world?",
            "answers": ["Tiger Woods", "Rory McIlroy", "Greg Norman", "Dustin Johnson"],
            "correct": "Tiger Woods"
        },
        {
            "question": "Who is the only player to have won the FIFA World Cup, UEFA Champions League, and Ballon d'Or in the same year?",
            "answers": ["Lionel Messi", "Cristiano Ronaldo", "Zinedine Zidane", "Ronaldinho"],
            "correct": "Cristiano Ronaldo"
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
