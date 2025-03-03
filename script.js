//5loops to decide the winner
//player give option
//pc give option
//compare options
//beat or not
//tie or not
//show results

let User_Item;

function Rock() {
    User_Item = "Rock";
    user_vs_pc_comparison(User_Item)
}
function Paper() {
    User_Item = "Paper";
    user_vs_pc_comparison(User_Item)
}
function Scissors() {
    User_Item = "Scissors";
    user_vs_pc_comparison(User_Item)
}


let User_Winner_Count = 0;
let Pc_Winner_Count = 0;
let Loop_Count = 0;

function user_vs_pc_comparison(User_Item) {

    //This functions will display all sats
    function User_Stat_Counter() {
        User_Winner_Count += 1;
        Loop_Count += 1;
        document.getElementById("User_Score").innerHTML = "User Score: " + User_Winner_Count;
        document.getElementById("Round").innerHTML = "Round: " + Loop_Count;
    }
    function Pc_Stat_Counter() {
        Pc_Winner_Count += 1;
        Loop_Count += 1;
        document.getElementById("User_Score").innerHTML = "User Score: " + User_Winner_Count;
        document.getElementById("Round").innerHTML = "Round: " + Loop_Count;
    }



    if (Loop_Count < 5) {
        let a = ['Rock', 'Paper', 'Scissors'];
        let i = Math.floor(Math.random() * a.length);
        let Pc_Item = a[i];

        if (User_Item === Pc_Item) {
            document.getElementById("Mini_Round").innerHTML = "It's a tie!";
            User_Stat_Counter()
        }
        else if (User_Item === 'Rock' && Pc_Item === 'Scissors') {
            document.getElementById("Mini_Round").innerHTML = "You win this round! Rock beats Scissors";
            User_Stat_Counter()
        }
        else if (User_Item === 'Scissors' && Pc_Item === 'Paper') {
            document.getElementById("Mini_Round").innerHTML = "You win this round! Scissors beats Paper";
            User_Stat_Counter()
        }
        else if (User_Item === 'Paper' && Pc_Item === 'Rock') {
            document.getElementById("Mini_Round").innerHTML = "You win this round! Paper beats Rock";
            User_Stat_Counter()
        }
        else {
            document.getElementById("Mini_Round").innerHTML = "You lose this round! " + Pc_Item + " beats " + User_Item;
            Pc_Stat_Counter()
        }
    }
    else {
        if (User_Winner_Count > Pc_Winner_Count) {
            document.getElementById("Final_Winner").innerHTML = "You win the game from 5 rounds!";
        }
        else if (User_Winner_Count < Pc_Winner_Count) {
            document.getElementById("Final_Winner").innerHTML = "You lose the game from 5 rounds!";
        }
        else {
            document.getElementById("Final_Winner").innerHTML = "It's a tie from 5 rounds!";
        }

    }
}
