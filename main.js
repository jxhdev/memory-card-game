window.onload = function() {
    
    var cards = document.querySelectorAll('.card');
    var count = document.getElementById('count')
    let clicks = 0;
    let flipCount = 0;
    let flipOne;
    cards.forEach(item => item.addEventListener('click', function () {
        if(flipOne !== item) {
            clicks += 1;
            count.textContent = clicks;
        }
        

        item.classList.toggle('is-flipped');

        if(flipCount === 0) {
            flipOne = item
            flipCount++;
        } else {
            if (flipOne.lastElementChild.lastElementChild.src === 
                item.lastElementChild.lastElementChild.src) {
                flipCount = 0;
            } else {
                unflip(item);
            }
        }


    }));

    
function unflip(item) {
    console.log("Unflipping");
    flipCount = 0;
    setTimeout(function () {
        flipOne.classList.toggle('is-flipped')
        item.classList.toggle('is-flipped')
    }, 1500)
}

};