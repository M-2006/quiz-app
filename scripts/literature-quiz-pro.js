// literature-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            "question": "Who wrote the novel 'Wuthering Heights'?",
            "answers": ["Emily Brontë", "Charlotte Brontë", "Jane Austen", "Agatha Christie"],
            "correct": "Emily Brontë"
        },
        {
            "question": "In which play by Tennessee Williams does the character Blanche DuBois appear?",
            "answers": ["A Streetcar Named Desire", "Cat on a Hot Tin Roof", "The Glass Menagerie", "Sweet Bird of Youth"],
            "correct": "A Streetcar Named Desire"
        },
        {
            "question": "What is the title of Gabriel García Márquez's most famous novel?",
            "answers": ["One Hundred Years of Solitude", "Love in the Time of Cholera", "Chronicle of a Death Foretold", "The Autumn of the Patriarch"],
            "correct": "One Hundred Years of Solitude"
        },
        {
            "question": "Who is the author of the novel 'The Catcher in the Rye'?",
            "answers": ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"],
            "correct": "J.D. Salinger"
        },
        {
            "question": "Which novel by Leo Tolstoy begins with the line 'Happy families are all alike; every unhappy family is unhappy in its own way'?",
            "answers": ["Anna Karenina", "War and Peace", "The Death of Ivan Ilyich", "Resurrection"],
            "correct": "Anna Karenina"
        },
        {
            "question": "Who wrote the novel 'The Picture of Dorian Gray'?",
            "answers": ["Oscar Wilde", "George Orwell", "Joseph Conrad", "Virginia Woolf"],
            "correct": "Oscar Wilde"
        },
        {
            "question": "Which American poet wrote 'The Waste Land'?",
            "answers": ["T.S. Eliot", "Robert Frost", "Ezra Pound", "Langston Hughes"],
            "correct": "T.S. Eliot"
        },
        {
            "question": "What is the name of the ship in Joseph Conrad's novel 'Heart of Darkness'?",
            "answers": ["Nellie", "Pequod", "Rachel", "Juno"],
            "correct": "Nellie"
        },
        {
            "question": "Who wrote the novel 'Crime and Punishment'?",
            "answers": ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Nikolai Gogol"],
            "correct": "Fyodor Dostoevsky"
        },
        {
            "question": "In which novel by Ernest Hemingway does the character Robert Jordan appear?",
            "answers": ["For Whom the Bell Tolls", "The Old Man and the Sea", "A Farewell to Arms", "The Sun Also Rises"],
            "correct": "For Whom the Bell Tolls"
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
