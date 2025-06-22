let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');

const msg_box = document.querySelector(".message");

const msg = document.querySelector('#message-text');

const user_Score = document.querySelector("#user-score");

const computer_Score = document.querySelector("#computer-score");

const resetBtn = document.querySelector("#reset");


const genComputerChoice = () => {
    //rock, paper, scissors
    const options = ['rock', 'paper', 'scissors'];
    
    //randomly select an option generator
    const randomIdx = Math.floor(Math.random() * 3);

    return options[randomIdx];
}

const drawGame = () => {
    console.log("It's a draw!");
    msg.innerText = "Game was a draw! Play again!";
    msg_box.style.backgroundColor = "blue";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg_box.style.backgroundColor = "green";
        userScore++;
        user_Score.innerText = userScore;
    }
    else {
        console.log("Computer wins!");
        msg.innerText = `Computer wins! ${computerChoice} beats Your ${userChoice}`;
        msg_box.style.backgroundColor = "red";
        computerScore++;
        computer_Score.innerText = computerScore;
    }
}

const playGame = (userChoice) => {
    console.log("User choice: ", userChoice);
    const computerChoice = genComputerChoice();
    console.log("Computer choice: ", computerChoice);

    if(userChoice === computerChoice) {
       drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors paper
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock scissors
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            //paper rock
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }

    
};

choices.forEach((choice) => {
    const userChoiceId = choice.getAttribute('id');
    choice.addEventListener('click', () => {
        // console.log("choice clicked ", userChoiceId);
        playGame(userChoiceId);
    });
});

resetBtn.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    user_Score.innerText = userScore;
    computer_Score.innerText = computerScore;
    msg.innerText = "Game reset! Play again!";
    msg_box.style.backgroundColor = "purple";
});