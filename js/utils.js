function rectangularCollision({rectangle1, rectangle2}) {
    return (rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x
        && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width
        && rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y
        && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height)
}

function determineWinner({player, enemy}) {
    clearTimeout(timerId);
    document.querySelector("#displayText").style.display = "flex";
    if (player.health === enemy.health) {
        document.querySelector("#displayText").innerHTML = "TIE!";
    } else if (player.health > enemy.health) {
        document.querySelector("#displayText").innerHTML = "PLAYER 1 WINS!";
    } else if (player.health < enemy.health) {
        document.querySelector("#displayText").innerHTML = "PLAYER 2 WINS!";
    }
    // stopped the game animating - window.cancelAnimationFrame(animationId);
}

let timer = 60;
let timerId;
function decreaseTimer() {
    timerId = setTimeout(decreaseTimer, 1000);
    if (timer >= 0) {
        document.querySelector("#timer").innerHTML = timer;
        timer--;
    }

    if (timer === -1) {
        determineWinner({player, enemy, timerId});
    }
}