// literature-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            answers: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
            correct: "Harper Lee"
        },
        {
            question: "In which Shakespeare play does the character 'Hamlet' appear?",
            answers: ["Macbeth", "Romeo and Juliet", "Othello", "Hamlet"],
            correct: "Hamlet"
        },
        {
            question: "What is the name of the protagonist in '1984' by George Orwell?",
            answers: ["Winston Smith", "Julia", "O'Brien", "Big Brother"],
            correct: "Winston Smith"
        },
        {
            question: "Who is the author of 'Pride and Prejudice'?",
            answers: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Mary Shelley"],
            correct: "Jane Austen"
        },
        {
            question: "What is the title of the first Harry Potter book?",
            answers: ["The Chamber of Secrets", "The Goblet of Fire", "The Sorcerer's Stone", "The Half-Blood Prince"],
            correct: "The Sorcerer's Stone"
        },
        {
            question: "Who wrote 'Moby-Dick'?",
            answers: ["Herman Melville", "Nathaniel Hawthorne", "Herman Hesse", "F. Scott Fitzgerald"],
            correct: "Herman Melville"
        },
        {
            question: "In which book does the character 'Atticus Finch' appear?",
            answers: ["To Kill a Mockingbird", "1984", "The Great Gatsby", "Catch-22"],
            correct: "To Kill a Mockingbird"
        },
        {
            question: "What is the name of the dragon in 'The Hobbit'?",
            answers: ["Smaug", "Drogon", "Falkor", "Glaurung"],
            correct: "Smaug"
        },
        {
            question: "Who wrote 'The Great Gatsby'?",
            answers: ["F. Scott Fitzgerald", "John Steinbeck", "Ernest Hemingway", "William Faulkner"],
            correct: "F. Scott Fitzgerald"
        },
        {
            question: "What is the subtitle of Mary Shelley's 'Frankenstein'?",
            answers: ["The Modern Prometheus", "The New Creation", "The Mad Scientist", "The Monster Within"],
            correct: "The Modern Prometheus"
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
            localStorage.setItem('literatureQuizScore', score);
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
