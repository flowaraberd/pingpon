
var mundo = document.querySelector('.mundo');
var table = document.querySelector('.t');
var ball = document.querySelector('.ball');
/**
 * @Author Carlos ALberto 
 */
var cc = console.log;

let bWidth = ball.getBoundingClientRect().width;
let bHeight = ball.getBoundingClientRect().height;
let tWidth = table.getBoundingClientRect().width - bWidth;
let tHeight = table.getBoundingClientRect().height - bHeight;


function coor(signo) {
    var ran = signo == "-" ? Math.random() * -4 : Math.random() * 4;
    return ran;

}


window.addEventListener('DOMContentLoaded', () => {

    /**
     * BALL PROPERTY GET!! & TABLE
     */
    let tProp = table.getBoundingClientRect();
    let bProp = ball.getBoundingClientRect();

    let posBallX = bProp.x - tProp.x;
    let posBallY = bProp.y - tProp.y;
    let radiusBox = ball.style.borderRadius = `${(bWidth / 2) * Math.PI}px`;

    var velocidad = 5;
    var pop = false;
    var up = false;
    setInterval(() => {
        if (posBallX < tWidth && pop == false) {
            posBallX += velocidad + coor("+");
            ball.style.left = `${posBallX}px`;
        } else {
            pop = true;
        }
        if (posBallX > 0 && pop == true) {
            posBallX -= velocidad - coor("-");
            ball.style.left = `${posBallX}px`;
        } else {
            pop = false;
        }

        if (posBallY < tHeight && up == false) {
            posBallY += velocidad + coor("+");
            ball.style.top = `${posBallY}px`;
        } else {
            up = true;
        }
        if (posBallY > 0 && up == true) {
            posBallY -= velocidad - coor("-");
            ball.style.top = `${posBallY}px`;
        } else {
            up = false;
        }
    }, 50);




    document.addEventListener('keydown', (e) => {

        if (e.key == "ArrowLeft") {
            if (posBallX > 0) {
                posBallX -= velocidad;
                ball.style.left = `${posBallX}px`;
            }
        }

        if (e.key == "ArrowRight") {
            if (posBallX < tProp.width - bWidth) {
                posBallX += velocidad;
                ball.style.left = `${posBallX}px`;
            }
        }

        if (e.key == "ArrowUp") {
            if (posBallY > 0) {
                posBallY -= velocidad;
                ball.style.top = `${posBallY}px`;
            }
        }

        if (e.key == "ArrowDown") {
            if (posBallY < tProp.height - bHeight) {
                posBallY += velocidad;
                ball.style.top = `${posBallY}px`;
            }
        }

    });


});






