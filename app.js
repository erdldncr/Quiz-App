const months=['January','February','March','April','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const days=['Sun','Mon',"Tue",'Wed','Thu','Fri',"Sat"]

const questions=[
    {
        question:'Which year are we in ?',
        options:[2021,2022,2023,2024],
        correctAnswer:new Date().getFullYear()
    },
    {
        question:'Which month are we in ?',
        options:['January','February','March','April','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        correctAnswer:months[new Date().getMonth()]
    },{
        question:'Which day are we on ?',
        options:['Sun','Mon',"Tue",'Wed','Thu','Fri',"Sat"],
        correctAnswer:days[new Date().getDay()]
    }
]

let questionNumber=0
let currentScore=0
let highestScore=0
let answeredQuestions=0
let wrongQuestions=0
let correctQuestions=0
let startGameCountDown=3
const userName=document.getElementById('username')
const modal=document.querySelector('.modal')
const userNameText=document.querySelector('.username')
const yesBtn=document.querySelector('.yes')
const noBtn=document.querySelector('.no')
let answerBtn;


const conformation=document.querySelector('.conformation')
const counter=document.querySelector('.counter')
const startCountDown=document.querySelector('.countDown')
const questionContainer=document.querySelector('.question-container')
const score=document.querySelector('.score')
const theHighestScore=document.querySelector('.highest-score')
const answers=document.querySelector('.answers')
const wrong= document.querySelector('.wrong')
const correct= document.querySelector('.correct')
document.addEventListener('keydown',removeModal)
document.addEventListener('click',removeModal)
yesBtn.addEventListener('click',startGame)








function removeModal(e){
   if(e.type!='click'){
    if(!!username.value && e.key=='Enter'){
        modal.classList.add('hidden')
        userNameText.innerHTML=userName.value
        conformation.classList.remove('hidden')

        }
   }
    
    if(e.type=='click'){
        if(!!username.value){
            modal.classList.add('hidden')
            userNameText.innerHTML=userName.value
            conformation.classList.remove('hidden')
       
            }
    }
}

function startGame(){
        conformation.style.display='none'
        counter.classList.remove('hidden')
       countDown()
   
}


function countDown(){
    if(startGameCountDown>=0){
        startCountDown.innerHTML=startGameCountDown
        startGameCountDown--;

       return  setTimeout(countDown,1000)
    }else{
        displayQuestion()
    }

 
}

function displayQuestion(){
    if(questionNumber<questions.length){
        questionContainer.innerHTML=` <div class="question-header">
        <h1> Question ${questionNumber+1}</h1>
        <p>${questions[questionNumber].question}</p>
    </div>
    <div class="question-options">
        <section class="option">
            <input type="radio" class='options' name="option-1" id="option-0" value=${questions[questionNumber].options[0]}>
        <label for="option-0">${questions[questionNumber].options[0]} </label>
        </section>
        <section class="option">
            <input type="radio" class='options' name="option-1" id="option-1" value=${questions[questionNumber].options[1]}>
        <label for="option-1">${questions[questionNumber].options[1]}</label>
        </section>
        <section class="option">
            <input type="radio" class='options' name="option-1" id="option-2" value=${questions[questionNumber].options[2]}>
        <label for="option-2">${questions[questionNumber].options[2]}</label>
        </section>
        <section class="option">
            <input type="radio" class='options' name="option-1" id="option-3" value=${questions[questionNumber].options[3]}>
        <label for="option-3">${questions[questionNumber].options[3]}</label>
        </section>
        </div>
    <div class="button-container">
        <button class='answer-btn'>Answer</button>
    </div> </section>`
        
    questionNumber++;
        answerBtnEventListener()
    
    }else{

        
    }


    



}


function answerBtnEventListener(){

    answerBtn=document.querySelector('.answer-btn');
    let nuOfclicked=0
    answerBtn.addEventListener('click',()=>{
    let filtered=[...document.querySelectorAll('.options')].filter(option=>option.checked)
        if(filtered.length==0){
            questionContainer.insertAdjacentHTML('afterbegin','<h1>You have to answer the question</h1>')
        }else{
            
            nuOfclicked++
            findCorrectAnswer(nuOfclicked)
            displayQuestion()
        }

    })
}

function findCorrectAnswer(num){

    let userChoice=[...document.querySelectorAll('.options')].filter(option=>option.checked)[0].value
    let correctAnswer=questions[questionNumber-1].correctAnswer
    if(num<questions.length){

        userChoice==correctAnswer&&correctQuestions++;
        correct.textContent=correctQuestions
        userChoice!=correctAnswer&&wrongQuestions++;
        wrong.textContent=wrongQuestions
    }
    

}
