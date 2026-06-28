/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
const emojis = ['🍉', '🍎', '🍒', '🥝', '🫐', '🥭']
const emojisMix = [...emojis, ...emojis]
// const player = ''
let firstCard = ''
let secCard = ''
/*------------------------ Cached Element References ------------------------*/
const cardBoard = document.querySelector('.cardboard')
const carD = document.querySelectorAll('.card')
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
    } else {
        // if not they dont match.... 
        console.log('dont match')

        //hide emojis from screen 
        setTimeout(() => {
        firstCard.textContent = ''
        secCard.textContent = ''
        //reset to empty to restart
        firstCard = ''
        secCard = '' 
        }, 1000)
        

        //////Get BaCK to with later!!!!/////////
        //👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼
        // now it works but there is 
        //a new issue: when two cards match, they stay
        // on screen, but when i continue playing, 
        // and i click on the third card, the first card 
        //disappear and the two and third stay
        
        
    }

     }
   
    }

})

/*-------------------------------- Functions --------------------------------*/