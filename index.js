let cards = []
let sum = 0
let dealerCards = []
let dealerSum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// Grab the new Dealer elements
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let dealerSumEl = document.getElementById("dealer-sum-el")
let dealerCardsEl = document.getElementById("dealer-cards-el")
let playerEl = document.getElementById("player-el")

let player = { name: "Jayson", chips: 145 }
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) return 10
    if (randomNumber === 1) return 11
    return randomNumber
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    
    // Reset Dealer
    dealerCards = [getRandomCard()]
    dealerSum = dealerCards[0]
    
    // Reset Player
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    renderGame()
}

function renderGame() {
    // Render Player
    cardsEl.textContent = "Cards: " + cards.join(" ")
    sumEl.textContent = "Sum: " + sum
    
    // Render Dealer (Only showing first card for suspense)
    dealerCardsEl.textContent = "Dealer's Cards: " + dealerCards.join(" ")
    dealerSumEl.textContent = "Dealer's Sum: " + dealerSum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        endRound()
    } else {
        message = "You're out of the game! Dealer wins."
        isAlive = false
        player.chips -= 10
        updateChips()
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

// THE AI LOGIC
function stand() {
    if (!isAlive || hasBlackJack) return

    // The Robot hits until it reaches at least 17
    while (dealerSum < 17) {
        let card = getRandomCard()
        dealerSum += card
        dealerCards.push(card)
    }

    determineWinner()
}

function determineWinner() {
    isAlive = false
    dealerCardsEl.textContent = "Dealer's Cards: " + dealerCards.join(" ")
    dealerSumEl.textContent = "Dealer's Sum: " + dealerSum

    if (dealerSum > 21) {
        message = "Dealer bust! YOU WIN!"
        player.chips += 20
    } else if (dealerSum > sum) {
        message = "Dealer wins!"
        player.chips -= 10
    } else if (dealerSum < sum) {
        message = "YOU WIN!"
        player.chips += 20
    } else {
        message = "It's a push (Tie)!"
    }

    messageEl.textContent = message
    updateChips()
}

function updateChips() {
    playerEl.textContent = player.name + ": $" + player.chips
}