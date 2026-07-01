/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
const emojis = ['🍬', '🍩', '🍰', '🍭', '🍫', '🍪']
const emojisMix = [...emojis, ...emojis]
let firstCard = ''
let secCard = ''
let attempts = 10
let matchedCards = 0
/*------------------------ Cached Element References ------------------------*/
const cardBoard = document.querySelector('.cardboard')
const carD = document.querySelectorAll('.card')
const attemptsButton = document.querySelector('#attempts')
const message = document.querySelector('#message')
const reset = document.querySelector('#reset')
const foundButton = document.querySelector('#found')
const gameOveraudio = new Audio('assets/audio/gameover.mp3')
const foundAudio = new Audio('assets/audio/foundsound.wav')
const winAudio = new Audio('assets/audio/win.wav')
const showMsg = document.querySelector('.msg')
/*----------------------------- Event Listeners -----------------------------*/

//mix cards
emojisMix.sort(() => Math.random() - 0.5);
//took this online


cardBoard.addEventListener('click', function(event){
    const clickedOn = event.target;

    
    if (clickedOn.classList.contains('card')) {
        
        clickedOn.textContent = emojisMix[clickedOn.id];
        
        
        if (firstCard === ''){
        firstCard = clickedOn
        
    } else {
        secCard = clickedOn
        

    
        //compare two cards 

    if (firstCard.textContent === secCard.textContent){
          console.log('match!')
          
        firstCard = ''
        secCard = '' 
        
        //matched cards 
        if (matchedCards += 1){
            foundAudio.play()
        }
        
        //message
        if (matchedCards === 6){
            message.textContent = 'You Won'
            winAudio.play()
            showMsg.style.visibility= 'visible';
        }
        foundButton.textContent = `Found: ${matchedCards}`
        
    } else {

        setTimeout(() => {
        firstCard.textContent = ''
        secCard.textContent = ''
        firstCard = ''
        secCard = '' 
        }, 500)
        
        // attempts
        attempts -= 1
        attemptsButton.textContent = `Attempts: ${attempts}`
        
        if (attempts === 0){
            setTimeout(() => {
            resetfunc()
        }, 4000)
        gameOveraudio.play()
        message.textContent = `Game Over`
        showMsg.style.visibility= 'visible';
        } 
    }
     }
    }
})

//reset button
    reset.addEventListener('click', resetfunc)


/*-------------------------------- Functions --------------------------------*/
//reset function
function resetfunc(){
     firstCard = ''
      secCard = ''
      matchedCards = 0
      attempts = 10
      carD.forEach(card => {
        card.textContent =''
      })
      message.textContent = ''
      attemptsButton.textContent = `Attempts: ${attempts}`
      emojisMix.sort(() => Math.random() - 0.5);
      foundButton.textContent = `Found: ${matchedCards}`
      showMsg.style.visibility = 'hidden'
}

