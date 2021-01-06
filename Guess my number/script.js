'use strict';

const body = document.querySelector('body');
const btn_again = document.querySelector('.again');
const number = document.querySelector('.number');
let message = document.querySelector('.message');
const btn_check = document.querySelector('.check');
const txthighscore = document.querySelector('.highscore');
const txtscore = document.querySelector('.score');

let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function(txtmessage){
    message.textContent = txtmessage;
}

btn_check.addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('No number!');
    } else if(guess === secretnumber){
        number.textContent = secretnumber; 

        displayMessage('Congraduation!');
        body.style.background = 'green';

        // 높은 점수
        if(score > highscore) {
            highscore = score;
            txthighscore.textContent = highscore
        }

    } else if(guess !== secretnumber){
        if(score > 1){
            displayMessage(guess > secretnumber ? 'too high!' : message.textContent = 'too low!');
            score--;
            txtscore.textContent = score;
            document.querySelector('.guess').value = ''; // 빈칸 초기화
        } else {
            displayMessage('You lost the game!');
        }
    }
    
    // else if(guess > secretnumber){
    //     if(score > 0){
    //         message.textContent = 'too high!';
    //         score--;
    //         txtscore.textContent = score;
    //         document.querySelector('.guess').value = ''; // 빈칸 초기화
    //     } else {
    //         message.textContent = 'You lost the game!';
            
    //     }
        
    // } else if(guess < secretnumber){
    //     if(score > 0){
    //         message.textContent = 'too low!';
    //         score--;
    //         txtscore.textContent = score;
    //         document.querySelector('.guess').value = ''; // 빈칸 초기화
    //     } else {
    //         message.textContent = 'You lost the game!';
            
    //     }
    // }
})

btn_again.addEventListener('click', function(){
    secretnumber = Math.trunc(Math.random() * 20) + 1; // 퀴즈 숫자 초기화
    score = 20; // 점수 초기화
    txtscore.textContent = score; // 점수 초기화
    document.querySelector('.guess').value = ''; // 빈칸 초기화
    number.textContent = '?';
    displayMessage('Start guessing...');
    body.style.background = '#222';
})