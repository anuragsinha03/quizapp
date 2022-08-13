const quizData = [
    {
        question: "The full form of DOM is?",
        a: "Document-oriented memory",
        b: "document object model",
        c: "document object memory",
        d: "none",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Central style sheets",
        b: "Cascading simple sheets",
        c: "Cascading style sheets",
        d: "Centroid style sheets",
        correct: "c",
    },
    {
        question: "Which of the following is not a SQL command?",
        a: "ORDER BY",
        b: "SELECT",
        c: "WHERE",
        d: "DELETE",
        correct: "d",
    },
    {
        question: "Which of the following computer language is written in binary codes only?",
        a: "Pascal",
        b: "Machine language",
        c: "C language",
        d: "C#",
        correct: "b",
    },
    {
        question: "Which of the following operators is the correct option for power(ab) in Python?",
        a: "a^b",
        b: "a**b",
        c: "a^^b",
        d: "a^*b",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2 id="result">You answered ${score}/${quizData.length} questions correctly</h2><br><br>
                <button onclick="location.reload()">Retake Quiz</button>
            `
        }
    }
})