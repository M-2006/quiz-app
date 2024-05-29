// science-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            "question": "What is the process by which plants make their food?",
            "answers": ["Photosynthesis", "Respiration", "Transpiration", "Pollination"],
            "correct": "Photosynthesis"
        },
        {
            "question": "Which of these is NOT a renewable energy source?",
            "answers": ["Solar", "Wind", "Coal", "Hydroelectric"],
            "correct": "Coal"
        },
        {
            "question": "What is the largest mammal on Earth?",
            "answers": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            "correct": "Blue Whale"
        },
        {
            "question": "Which scientist is known for the theory of general relativity?",
            "answers": ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
            "correct": "Albert Einstein"
        },
        {
            "question": "What is the main gas found in the air we breathe?",
            "answers": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            "correct": "Nitrogen"
        },
        {
            "question": "Which planet is known as the 'Morning Star' or 'Evening Star'?",
            "answers": ["Mars", "Venus", "Mercury", "Jupiter"],
            "correct": "Venus"
        },
        {
            "question": "What is the hardest natural substance on Earth?",
            "answers": ["Steel", "Diamond", "Iron", "Gold"],
            "correct": "Diamond"
        },
        {
            "question": "What is the study of earthquakes called?",
            "answers": ["Meteorology", "Seismology", "Geology", "Ecology"],
            "correct": "Seismology"
        },
        {
            "question": "What is the chemical symbol for table salt?",
            "answers": ["NaCl", "KCl", "HCl", "CaCl2"],
            "correct": "NaCl"
        },
        {
            "question": "What is the process by which plants lose water through their leaves?",
            "answers": ["Photosynthesis", "Respiration", "Transpiration", "Pollination"],
            "correct": "Transpiration"
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
            localStorage.setItem('scienceQuizScore', score);
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
