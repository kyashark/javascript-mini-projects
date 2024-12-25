const questions = [
    {
        question: "What is the capital of France?",
        answer: [
            {text: "Berlin", correct: false},
            {text: "Madrid", correct: false},
            {text: "Paris", correct: true},
            {text: "Rome", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            {text: "Earth", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Saturn", correct: false},
        ]
    },
    
    {
        question: "What is the largest ocean on Earth?",
        answer: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Pacific Ocean", correct: true},
            {text: "Arctic Ocean", correct: false},
        ]
    }
];

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('next-btn').addEventListener('click', showNextQuestion);
document.getElementById('restart-btn').addEventListener('click',restartQuiz);


const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answers');
const scoreElement = document.getElementById('score');
const scoreSpan = document.getElementById('score');


let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    document.querySelector('.start-container').style.display = 'none'
    document.querySelector('.score-container').style.display = 'none'; 
    document.querySelector('.quiz-container').style.display = 'block'; 
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();    
}


function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    
    answerElement.innerHTML = '';

    currentQuestion.answer.forEach(answer => {
                const button = document.createElement('button');
                button.innerHTML = answer.text;
                button.classList.add("answer-btn");
                button.addEventListener('click', () => selectAnswer(button,answer));
                answerElement.appendChild(button);
    });
}

function selectAnswer(button, answer){

    if(!button.classList.contains('selected')){
        const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        if (answer.correct) {
            score++;
        }
        console.log(score);
    }  
}

function showNextQuestion(){ 
    currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
                
            } else {
                showScore();
            }
}


function showScore(){
    document.querySelector('.quiz-container').style.display = 'none'; 
    document.querySelector('.score-container').style.display = 'flex';
    scoreSpan.innerHTML = score;   
}


function restartQuiz(){
    document.querySelector('.start-container').style.display = 'flex';
    document.querySelector('.score-container').style.display = 'none'; 
    currentQuestionIndex = 0;
    score = 0;  
    showQuestion(); 
}

























