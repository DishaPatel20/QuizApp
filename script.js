const quizData = [
    {
        question: "The ratio of width of our National flag to its length is?",
        a: "3:5",
        b: "2:3",
        c: "2:4",
        d: "3:4",
        correct: "b",
    },
    {
        question: "'Dandia' is a popular dance of?",
        a: "Punjab",
        b: "Gujarat",
        c: "Tamil Nadu",
        d: "Maharashtra",
        correct: "b",
    },
    {
        question: "Which of the following folk dance forms is associated with Gujarat ?",
        a: "Nautanki",
        b: "Garba",
        c: "Kathakali",
        d: "Bhangra",
        correct: "b",
    },
    {
        question: "The National Song of India was composed by?",
        a: "Rabindranath Tagore",
        b: "Bankim Chandra Chatterji",
        c: "Iqbal",
        d: "Jai Shankar Prasad",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});