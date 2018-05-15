window.onload = function() {
    var startGameBtn = document.getElementById('button')
    var cards = document.querySelectorAll('.card');
    var count = document.getElementById('count')
    let clicks = 0;
    let flipCount = 0;
    let flipOne;
    let flipsRemaining = 12;

    button.addEventListener('click', function() {
        this.parentElement.classList.toggle('hidden')
        console.log(this.parentElement.classList);
    })
    cards.forEach(item => item.addEventListener('click', function() {
        flip(item)
    }));


function flip (item) {

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
        flipsRemaining -= 1;
        console.log(flipsRemaining);

    } else {
        flipCount = 2;
        unflip(item);
    }
    if (flipsRemaining === 0) {
        setTimeout(gameOver, 1000);
        
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