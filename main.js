window.onload = function() {
    
    var cards = document.querySelectorAll('.card');
    var count = document.getElementById('count')
    let clicks = 0;
    let flipCount = 0;
    let flipOne;
    let gameOver = false;
    let flipsRemaining = 12;
    cards.forEach(item => item.addEventListener('click', function() {
        flip(item)
    }));



function flip (item) {
    // this is to prevent more than two flips at a time
    if(flipCount < 2) {
        if (flipOne !== item) {
            clicks += 1;
            count.textContent = clicks;
        }
        if (flipCount === 0) {
            item.classList.toggle('is-flipped');
            flipOne = item
            flipCount++;
        } else {
            item.classList.toggle('is-flipped');
            flipCount++;
            if (flipOne.lastElementChild.lastElementChild.src ===
                item.lastElementChild.lastElementChild.src) {
                setTimeout(function () {
                    flipOne.outerHTML = flipOne.outerHTML;
                    item.outerHTML = item.outerHTML;
                }, 1000);
                flipCount = 0;
                flipsRemaining -= 2;
            } else {
                unflip(item);
            }
        }

    }
}

function unflip(item) {
    console.log("Unflipping");
    setTimeout(function () {
        flipOne.classList.toggle('is-flipped')
        item.classList.toggle('is-flipped')
    }, 1500)
    flipCount = 0;
}

};