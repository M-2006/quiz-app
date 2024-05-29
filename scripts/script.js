// script.js

document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {
        box.addEventListener('click', () => {
            const quizPage = box.getAttribute('data-quiz');
            window.location.href = quizPage;
        });
    });
});
