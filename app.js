/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
const emojis = ['🍬', '🍩', '🍰', '🍭', '🍫', '🍪']
const emojisMix = [...emojis, ...emojis]
// const player = ''
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

    //check if clicked is a card? is it? yes it is.
    if (clickedOn.classList.contains('card')) {
        // so show the emoji on the clicked card 
        clickedOn.textContent = emojisMix[clickedOn.id];
        
        //store both cards in clickedon 
        if (firstCard === ''){
        firstCard = clickedOn
        
    } else {
        // store second clicked card
        secCard = clickedOn
        

    
//compare two cards 
// check if both first card content (emoji) matches the second 
// card's emoji! 
    if (firstCard.textContent === secCard.textContent){
          console.log('match!')
          // if yes they match - yayy
          // cards stay

        firstCard = ''
        secCard = '' 
        
        if (matchedCards += 1){
            foundAudio.play()
        }
        // matchedCards += 1
        
        if (matchedCards === 6){
            message.textContent = 'You Won'
            winAudio.play()
            showMsg.style.visibility= 'visible';
        }
        foundButton.textContent = `Found: ${matchedCards}`
        
    } else {
        // if not they dont match.... 
        console.log('dont match')

        //hide emojis from screen 
        // this function keep the emoji in screen for 1 sec before
        // disappearing again
        setTimeout(() => {
        firstCard.textContent = ''
        secCard.textContent = ''
        //reset to empty to restart
        firstCard = ''
        secCard = '' 
        }, 500)
        
        // attempts descrase by 1 each time cards dont match
        attempts -= 1
        attemptsButton.textContent = `Attempts: ${attempts}`
        
        // setTimeout(() => {
            
        // })
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
//reset the whole game 
    reset.addEventListener('click', resetfunc)




// get back to this 👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼


/*-------------------------------- Functions --------------------------------*/

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

