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
    })
    cards.forEach(item => item.addEventListener('click', function() {
        flip(item)
    }));


function flip (item) {
    if(flipCount === 0) {
        flipOne = item;
        item.classList.toggle('is-flipped');
        flipCount+=1;
        clicks+=1;
        count.textContent = clicks;
    } else if(flipCount === 1) {
        if(item.classList.contains('is-flipped')) {
            item.classList.toggle('is-flipped');
            flipCount = 0;
            clicks -= 1;
            count.textContent = clicks;
        } else {
            item.classList.toggle('is-flipped')
            flipCount = 2;
            checkMatch(item);
            clicks += 1;
            count.textContent = clicks;
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
        }, 750);
        flipsRemaining -= 1;
    } else {
        unflip(item);
        
    }
    if (flipsRemaining === 0) {
        console.log('You won!');
        
    }
}
function unflip(item) {
    flipCount = 2;
    setTimeout(function () {
        flipOne.classList.toggle('is-flipped')
        item.classList.toggle('is-flipped')
        flipCount = 0;
    }, 750);
}


};