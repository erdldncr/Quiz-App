const questions=[
    {
        question:'Which year are we in ?',
        options:[2021,2022,2023,2024]
        
    },
    {
        question:'Which month are we in ?',
        options:['Jan','Feb','March','April','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] 
    },{
        question:'Which day are we on ?',
        options:['Sun','Mon',"Tue",'Wed','Thu','Fri',"Sat"]
    }
]

let score=0
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
const conformation=document.querySelector('.conformation')
const counter=document.querySelector('.counter')
const startCountDown=document.querySelector('.countDown')
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
        
    }

 
}


// <!-- <div class="question-header">
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         </div>
//         <div class="question-options">
//             <section class="option">
//                 <input type="radio" name="option-1" id="option-1">
//             <label for="option-1"> Lorem ipsum dolor sit.</label>
//             </section>
//             <section class="option">
//                 <input type="radio" name="option-1" id="option-1">
//             <label for="option-1"> Lorem ipsum dolor sit.</label>
//             </section>
//             <section class="option">
//                 <input type="radio" name="option-1" id="option-1">
//             <label for="option-1"> Lorem ipsum dolor sit.</label>
//             </section>
//             <section class="option">
//                 <input type="radio" name="option-1" id="option-1">
//             <label for="option-1"> Lorem ipsum dolor sit.</label>
//             </section>
//             </div>
//         <div class="button-container">
//             <button>Answer</button>
//         </div> --></section>