let body = document.querySelector('body');
let h3 = document.querySelector('h3');
let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let btn1 = document.querySelector('#a');
let btn2 = document.querySelector('#b');
let btn3 = document.querySelector('#c');
let btn4 = document.querySelector('#d');


function random() {
    let x = (Math.floor(Math.random() * 10 / 2.5)) + 1;
    return x;
}

body.addEventListener('click', function () {
    if (started == false) {
        h3.innerText = 'Game Started';
        started = true;
        push1();
    }





})
function resetGame() {
    gameseq = [];
    userseq = [];
    started = false;
    h3.innerText = 'Game Over, Click to Restart';
}
function push1() {
    h3.innerText = `Level ${gameseq.length}`
    let randomx = random();
    gameseq.push(randomx);
    console.log(...gameseq);
    let selectedButton;
    if (randomx === 1) selectedButton = btn1;
    else if (randomx === 2) selectedButton = btn2;
    else if (randomx === 3) selectedButton = btn3;
    else if (randomx === 4) selectedButton = btn4;


    selectedButton.classList.add('flash');


    setTimeout(function () {
        selectedButton.classList.remove('flash');
    }, 300);
}

btn1.addEventListener('click', function () {
    userseq.push(1);
    if (userseq[userseq.length - 1] != gameseq[userseq.length - 1]) {
        alert("Game ended");
        resetGame();
    }
    else if (userseq.length === gameseq.length) {
        userseq = [];
        push1();
    }

})
btn2.addEventListener('click', function () {
    userseq.push(2);
    if (userseq[userseq.length - 1] != gameseq[userseq.length - 1]) {
        alert("Game ended");
        resetGame();
    }
    else if (userseq.length === gameseq.length) {
        userseq = [];
        push1();
    }

})
btn3.addEventListener('click', function () {
    userseq.push(3);
    if (userseq[userseq.length - 1] != gameseq[userseq.length - 1]) {
        alert("Game ended");
        resetGame();
    }
    else if (userseq.length === gameseq.length) {
        userseq = [];
        push1();
    }

})
btn4.addEventListener('click', function () {
    userseq.push(4);
    if (userseq[userseq.length - 1] != gameseq[userseq.length - 1]) {
        alert("Game ended");
        resetGame();
    }
    else if (userseq.length === gameseq.length) {
        userseq = [];
        push1();
    }

})
