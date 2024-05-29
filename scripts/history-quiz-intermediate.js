// history-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizDataIntermediate = [
        {
            question: "Who was the first female Prime Minister of the United Kingdom?",
            answers: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"],
            correct: "Margaret Thatcher"
        },
        {
            question: "Which battle is considered the turning point of the American Civil War?",
            answers: ["Battle of Gettysburg", "Battle of Antietam", "Battle of Vicksburg", "Battle of Bull Run"],
            correct: "Battle of Gettysburg"
        },
        {
            question: "Which US President is associated with the New Deal?",
            answers: ["Franklin D. Roosevelt", "Herbert Hoover", "Harry S. Truman", "Dwight D. Eisenhower"],
            correct: "Franklin D. Roosevelt"
        },
        {
            question: "Who was the first African American to serve on the US Supreme Court?",
            answers: ["Thurgood Marshall", "Clarence Thomas", "Sonia Sotomayor", "Ruth Bader Ginsburg"],
            correct: "Thurgood Marshall"
        },
        {
            question: "Which war was ended by the Treaty of Versailles?",
            answers: ["World War I", "World War II", "Vietnam War", "Korean War"],
            correct: "World War I"
        },
        {
            question: "Who was the first President of the United States to be impeached?",
            answers: ["Andrew Johnson", "Richard Nixon", "Bill Clinton", "Donald Trump"],
            correct: "Andrew Johnson"
        },
        {
            question: "Which famous speech began with the words 'Four score and seven years ago'?",
            answers: ["Gettysburg Address", "I Have a Dream", "Inaugural Address", "Tear Down This Wall"],
            correct: "Gettysburg Address"
        },
        {
            question: "Who was the first President of the United States to live in the White House?",
            answers: ["John Adams", "Thomas Jefferson", "James Madison", "James Monroe"],
            correct: "John Adams"
        },
        {
            question: "Which country was the first to circumnavigate the globe?",
            answers: ["Spain", "Portugal", "England", "Netherlands"],
            correct: "Spain"
        },
        {
            question: "Who was the first person to step on the moon?",
            answers: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin"],
            correct: "Neil Armstrong"
        }
    ];
    

    const quizContainer = document.getElementById('quiz-container');
    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        if (currentQuestionIndex < quizDataIntermediate.length) {
            const currentQuestion = quizDataIntermediate[currentQuestionIndex];
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
                        <p class="card-text">Your score is: ${score} / ${quizDataIntermediate.length}</p>
                        <button class="btn btn-primary" onclick="restartQuiz()">Restart Quiz</button>
                    </div>
                </div>
            `;
            localStorage.setItem('historyQuizScore', score);
        }
    }

    window.selectAnswer = function(answer) {
        if (answer === quizDataIntermediate[currentQuestionIndex].correct) {
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
