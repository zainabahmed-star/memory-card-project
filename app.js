/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
const emojis = ['🍉', '🍎', '🍒', '🥝', '🫐', '🥭']

// const player = ''
const emojisMix = [...emojis, ...emojis]
/*------------------------ Cached Element References ------------------------*/
const cardBoard = document.querySelector('.cardboard')
const carD = document.querySelectorAll('.card')
/*----------------------------- Event Listeners -----------------------------*/
//mix cards
emojisMix.sort(() => Math.random() - 0.5);
//took this online



cardBoard.addEventListener('click', function(event){
    const clickedOn = event.target;

    if (clickedOn.classList.contains('card')) {
        clickedOn.textContent = emojisMix[clickedOn.id];
    }

})

/*-------------------------------- Functions --------------------------------*/