// Cкопіюй код з минулого уроку
document.addEventListener('DOMContentLoaded', () => {

    // 1. БАЗА ДАНИХ (Масив об'єктів)
    const questions = [
        {
            question: "Скільки планет є у Сонячній системі",
            answers: ["5", "6", "7", "8"],
            correct: 2
        },
         {
            question: "Найбільша планета",
            answers: ["Юпітер", "Меркурій", "Земля", "Уран"],
            correct: 0
        },
         {
            question: "Найменша планета",
            answers: ["Плутон", "Юпітер", "Уран", "Меркурій"],
            correct: 3
        },
         {
            question: "Скільки планет є у Сонячній системі",
            answers: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "Скільки планет є у Сонячній системі",
            answers: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "Скільки планет є у Сонячній системі",
            answers: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "Скільки планет є у Сонячній системі",
            answers: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "Скільки планет є у Сонячній системі",
            answers: ["5", "6", "7", "8"],
            correct: 2
        },
         {
            question: "Скільки планет є у Сонячній системі",
            answers: ["5", "6", "7", "8"],
            correct: 2
        },
        
        //   Додай свої запитання
    ];
    
    const questionText = document.querySelector("#question-text")
    const answersContainer = document.querySelector("#answers-container")
    let score = 0
    let questionIndex = 0
    const startScreen = document.querySelector("#start-screen")
    const quizScreen = document.querySelector("#quiz-screen")
    const resultScreen = document.querySelector("#result-screen")
    const startBtn = document.querySelector("#start-btn")
    const restartBtn = document.querySelector("#restart-btn")
    const scoreDisplay = document.querySelector("#score-display")
    
    function startGame(){
        startScreen.classList.remove("show")
        startScreen.classList.add("hide")
        
        resultScreen.classList.remove("show")
        resultScreen.classList.add("hide")
        
        quizScreen.classList.remove("hide")
        quizScreen.classList.add("show")
        score= 0
        scoreDisplay.textContent = "Бали: 0";
        questionIndex = 0
        showQuestion(questions[0])
    }
    startBtn.onclick = startGame
    
    function goToStartScreen() {
        startScreen.classList.remove("show")
        startScreen.classList.add("hide")
        
        resultScreen.classList.remove("show")
        resultScreen.classList.add("hide")
        
        quizScreen.classList.remove("show")
        quizScreen.classList.add("hide")  
    }
    restartBtn.onclick = goToStartScreen
    function showQuestion(question) {
        answersContainer.innerHTML = ""
        questionText.textContent = question.question
        for (let i=0; i< question.answers.length; i++){
            const button = document.createElement("button")
            button.textContent = question.answers[i]
            button.classList.add("answer-btn")
            button.onclick = function(){
                checkAnswer(button,i)
            }
            answersContainer.append(button)
        }
    }
    showQuestion(questions[questionIndex])
    
    function checkAnswer(button, answerIndex){
        if (answerIndex == questions[questionIndex].correct){
            score ++;
            button.classList.add("correct")
            scoreDisplay.textContent = `Бали: ${score}`
            
        }else{
            button.classList.add("wrong")
        }
        questionIndex +=1 
        showQuestion(questions[questionIndex])
        if (questionIndex < questions.length){
            showQuestion(questions[questionIndex])
        } else {
            showwResult();
        }
        
        
    }
    function nextQuestion(){
        questionIndex++
        if (questionIndex < questions.length){
            showQuestion(questions[questionIndex])
        } else {
            showwResult()
        }
        }
    function showwResult(){
        resultScreen.classList.remove("show")
        quizScreen.classList.add("hide")
        resultScreen.classList.add("show")
        const result = document.querySelector("#result-text")
        resultText.textContent = `Твій результат: ${score} з ${questions.length}`
    }
    
});
