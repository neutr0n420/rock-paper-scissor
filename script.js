const choiceRock = document.getElementById("choice-rock")
const choicePaper = document.getElementById("choice-paper")
const choiceScissor = document.getElementById("choice-scissor")
const winningMessage = document.querySelector(".winning-message")
const playerChoice = document.getElementById("player-choice")
const computerRPSChoice = document.getElementById("computer-choice")
let playerScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")


function getComputerChoice(){
    computerChoices = ["rock", "paper", "scissors"]
    randomIndex = Math.floor(Math.random()*3)
    return computerChoices[randomIndex]
}



choiceRock.addEventListener("click", ()=>{
    playerChoice.textContent = "✊🏻"
    const computerChoice = getComputerChoice()
    if(computerChoice === "rock"){
        computerRPSChoice.textContent = "✊🏻"
        winningMessage.textContent = "It's a Draw"
    }
    else if(computerChoice ==="paper"){
        computerRPSChoice.textContent = "✋🏻"
        winningMessage.textContent = "You loose"
 
    }
    else if(computerChoice === "scissors"){
        computerRPSChoice.textContent = "✌🏻"
        winningMessage.textContent = "You Won"
    }
})

choicePaper.addEventListener("click", ()=>{
    playerChoice.textContent = "✋🏻"
    const computerChoice = getComputerChoice()
    if(computerChoice === "rock"){
        computerRPSChoice.textContent = "✊🏻"
        winningMessage.textContent = "You Won"
    }
    else if(computerChoice ==="paper"){
        computerRPSChoice.textContent = "✋🏻"
        winningMessage.textContent = "It's a Draw"
 
    }
    else if(computerChoice === "scissors"){
        computerRPSChoice.textContent = "✌🏻"
        winningMessage.textContent = "You Loose"

    }
})


choiceScissor.addEventListener("click", ()=>{
    playerChoice.textContent = "✌🏻"
    const computerChoice = getComputerChoice()
    if(computerChoice === "rock"){
        computerRPSChoice.textContent = "✊🏻"
        winningMessage.textContent = "You loose"
    }
    else if(computerChoice ==="paper"){
        computerRPSChoice.textContent = "✋🏻"
        winningMessage.textContent = "You Won"
 
    }
    else if(computerChoice === "scissors"){
        computerRPSChoice.textContent = "✌🏻"
        winningMessage.textContent = "It''s a Draw"

    }
})
