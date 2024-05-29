// math-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizDataVeryAdvanced = [
        {
            question: "Who was the last Emperor of Russia, whose abdication in 1917 led to the end of the Romanov dynasty?",
            answers: ["Nicholas II", "Alexander III", "Peter the Great", "Ivan the Terrible"],
            correct: "Nicholas II"
        },
        {
            question: "Which city served as the capital of the Byzantine Empire for over 1,000 years?",
            answers: ["Constantinople", "Rome", "Athens", "Alexandria"],
            correct: "Constantinople"
        },
        {
            question: "Who was the first President of the United States to be assassinated?",
            answers: ["Abraham Lincoln", "John F. Kennedy", "James A. Garfield", "William McKinley"],
            correct: "Abraham Lincoln"
        },
        {
            question: "Which ancient civilization built the city of Machu Picchu?",
            answers: ["Inca", "Aztec", "Maya", "Olmec"],
            correct: "Inca"
        },
        {
            question: "Which European country was the first to establish colonies in the Americas?",
            answers: ["Spain", "Portugal", "England", "France"],
            correct: "Spain"
        },
        {
            question: "Who was the founder of the Mongol Empire, the largest contiguous empire in history?",
            answers: ["Genghis Khan", "Kublai Khan", "Ogedei Khan", "Möngke Khan"],
            correct: "Genghis Khan"
        },
        {
            question: "Which battle in 732 AD is often considered the decisive turning point that halted the Muslim conquests of Europe?",
            answers: ["Battle of Tours", "Battle of Poitiers", "Battle of Vienna", "Battle of Constantinople"],
            correct: "Battle of Tours"
        },
        {
            question: "Who was the longest-reigning monarch in British history?",
            answers: ["Queen Victoria", "Queen Elizabeth II", "King George III", "King Henry III"],
            correct: "Queen Elizabeth II"
        },
        {
            question: "Which Russian ruler is known for modernizing Russia and expanding its territories, particularly into Siberia?",
            answers: ["Peter the Great", "Ivan the Terrible", "Catherine the Great", "Alexander II"],
            correct: "Peter the Great"
        },
        {
            question: "Who was the first female ruler of Egypt, known for her alliance with Julius Caesar and Mark Antony?",
            answers: ["Cleopatra VII", "Hatshepsut", "Nefertiti", "Arsinoe II"],
            correct: "Cleopatra VII"
        }
    ];
        

    const quizContainer = document.getElementById('quiz-container');
    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        if (currentQuestionIndex < quizDataVeryAdvanced.length) {
            const currentQuestion = quizDataVeryAdvanced[currentQuestionIndex];
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
                        <p class="card-text">Your score is: ${score} / ${quizDataVeryAdvanced.length}</p>
                        <button class="btn btn-primary" onclick="restartQuiz()">Restart Quiz</button>
                    </div>
                </div>
            `;
            localStorage.setItem('mathQuizScore', score);
        }
    }

    window.selectAnswer = function(answer) {
        if (answer === quizDataVeryAdvanced[currentQuestionIndex].correct) {
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
