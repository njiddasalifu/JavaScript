// importing the prompt package to handle user input
const prompt = require("prompt-sync")();

// defining variables to be used
const ROWS = 3
const COLS = 3;
const SYMBOLS_COUNT={
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}
const SYMBOLS_VALUES= {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}


// function to collect deposit
const deposit = ()=> {
    while(true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount<=0){
            console.log("Invalid amount, try again.");
        } else{
            return numberDepositAmount;
        }
    }

}

// getting the nuber of lines the user wants to bet on
const getNumberOflines = ()=> {
    while(true) {
        const lines = prompt("Enter the of lines tobet on (1-30): ");
        const numberOflines = parseFloat(lines);

        if(isNaN(numberOflines) || numberOflines<=0 || numberOflines >3){
            console.log("Invalid lines, try again.");
        } else{
            return numberOflines;
        }
    }
}

// getting the betting amount
const getBet = (balance, lines)=> {
    while(true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance /lines){
            console.log("Invalid bet, try again.");
        } else{
            return numberBet;
        }
    }
};

// function to spin the macine
const spin = ()=> {
    const symbols = [];
    for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
       for(let i=0;i<count;i++) {
        symbols.push(symbol);
       }
    } 
    const reels = [[], [], []];
    for(let i=0;i<COLS;i++){
        
    }
};

spin();
let balance = deposit();
const numberOflines = getNumberOflines();
const bet = getBet(balance, numberOflines);
