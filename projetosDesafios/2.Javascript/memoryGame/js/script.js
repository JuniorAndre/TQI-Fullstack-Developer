const cards = document.querySelectorAll('.card');
const trofeu = document.querySelectorAll('.trofeu');
const animalArray = ["cachorro", "coelho", "coruja", "gato", "rato", "rino"];
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
const cach = document.getElementById('1');

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add("flip");
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkTrophy();
    hasFlippedCard = false;
    checkForMath();
}

function checkForMath(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards(){
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach((card) => {
        let = randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
})();

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
});

function hasClass(elemento, classe) {
    return (' ' + elemento.className + ' ').indexOf(' ' + classe + ' ') > -1;
}

function checkTrophy(){
    for(let i = 0; i < trofeu.length; i++){
        if(firstCard.dataset.card === animalArray[i] && secondCard.dataset.card === animalArray[i]){
            setTimeout(() => {
                trofeu[i].style.visibility = "visible";
            }, 500);
        }
    }    
}