function submitQuiz() {
    const answers = {
        q1: 'Paris',
        q2: '4'
    };

    let score = 0;

    const form = document.getElementById('quizForm');
    const formData = new FormData(form);

    for (const [key, value] of formData.entries()) {
        if (answers[key] === value) {
            score++;
        }
    }

    document.getElementById('result').innerText = `You scored ${score} out of ${Object.keys(answers).length}.`;

    // Save progress in local storage
    localStorage.setItem('quizScore', score);
}

window.onload = function() {
    const savedScore = localStorage.getItem('quizScore');
    if (savedScore !== null) {
        document.getElementById('result').innerText = `Previous score: ${savedScore}`;
    }
};
