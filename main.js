window.onload = function() {
    var startGameBtn = document.getElementById('button')
    var cards = document.querySelectorAll('.card');
    var count = document.getElementById('count')
    let clicks = 0;
    let flipCount = 0;
    let flipOne;
    let gameOver = false;
    let flipsRemaining = 12;

    // button.addEventListener('click', function() {
    //     this.parentElement.classList.add('hidden')
    //     console.log(this.parentElement.classList);
    // })
    cards.forEach(item => item.addEventListener('click', function() {
        flip(item)
    }));

    if(flipsRemaining === 0) {
        console.log('You won! Start a new game?');
    }


function flip (item) {
    // conditional to ensure less than 2 cards are flipped at a time
    if(flipCount <= 1) {
        if (flipOne !== item) {
            clicks += 1;
            count.textContent = clicks;
        } 
        else if(flipOne === item) {
            flipCount = 0;
        }

        if (flipCount === 0) {
            item.classList.toggle('is-flipped');
            flipOne = item
            flipCount++;
        } else {
            item.classList.toggle('is-flipped');
            flipCount++;
            checkMatch(item);
        }

    }
}

function checkMatch(item) {
    if (flipOne.lastElementChild.lastElementChild.src ===
        item.lastElementChild.lastElementChild.src) {

        setTimeout(function () {
            flipOne.outerHTML = flipOne.outerHTML;
            item.outerHTML = item.outerHTML;
            flipCount = 0;
        }, 1000);
        flipsRemaining -= 2;

    } else {
        flipCount = 2;
        unflip(item);
    }
}
function unflip(item) {

    setTimeout(function () {
        flipOne.classList.toggle('is-flipped')
        item.classList.toggle('is-flipped')
        flipCount = 0;
    }, 1500)
}

};