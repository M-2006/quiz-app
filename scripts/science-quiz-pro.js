// science-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            "question": "What is the phenomenon where light bends as it passes through different mediums?",
            "answers": ["Reflection", "Refraction", "Diffraction", "Dispersion"],
            "correct": "Refraction"
        },
        {
            "question": "What is the smallest particle of an element that retains the properties of that element?",
            "answers": ["Molecule", "Atom", "Proton", "Electron"],
            "correct": "Atom"
        },
        {
            "question": "Which of these subatomic particles has no electrical charge?",
            "answers": ["Proton", "Neutron", "Electron", "Positron"],
            "correct": "Neutron"
        },
        {
            "question": "Who developed the theory of evolution by natural selection?",
            "answers": ["Charles Darwin", "Gregor Mendel", "Alfred Russel Wallace", "Jean-Baptiste Lamarck"],
            "correct": "Charles Darwin"
        },
        {
            "question": "What is the study of the Earth's atmosphere and its variations in temperature and composition?",
            "answers": ["Meteorology", "Geology", "Climatology", "Oceanography"],
            "correct": "Climatology"
        },
        {
            "question": "Which scientist discovered the existence of radioactivity?",
            "answers": ["Marie Curie", "Albert Einstein", "Niels Bohr", "Ernest Rutherford"],
            "correct": "Marie Curie"
        },
        {
            "question": "What is the process by which a nucleus of an unstable atom loses energy by emitting radiation?",
            "answers": ["Fusion", "Fission", "Radioactive Decay", "Nuclear Transmutation"],
            "correct": "Radioactive Decay"
        },
        {
            "question": "What is the largest organ in the human body?",
            "answers": ["Heart", "Liver", "Skin", "Brain"],
            "correct": "Skin"
        },
        {
            "question": "Which of these elements is a noble gas?",
            "answers": ["Helium", "Lithium", "Sodium", "Potassium"],
            "correct": "Helium"
        },
        {
            "question": "What is the term for the change in the genetic makeup of a population over time?",
            "answers": ["Adaptation", "Mutation", "Evolution", "Selection"],
            "correct": "Evolution"
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
