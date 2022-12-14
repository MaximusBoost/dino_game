const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');

document.addEventListener('keydown', function () {
    jump();
});

function jump () {
    if(dino.classList != 'jump') {
        dino.classList.add('jump');
    }

    setTimeout(function () {
        dino.classList.remove('jump');
    }, 650);
};

let isAlive = setInterval( function() {
    let dinoTop = parseInt( window.getComputedStyle(dino).getPropertyValue('top') );
    let cactusLeft = parseInt( window.getComputedStyle(cactus).getPropertyValue('left') );

    if(cactusLeft < 30 && cactusLeft> 0 && dinoTop >= 140) {
        alert('GAME OVER!!!');
    };
}, 10);