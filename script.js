let body = document.body
let ball = document.querySelector('.ball')
let sections = document.querySelectorAll('section')
let reset = document.querySelector('.reset')
let one = document.querySelector('#one')
let two = document.querySelector('#two')

let confetti = document.querySelector('#confetti')
let js_confetti = new JSConfetti()

count()

let num = 0
let ber = 0

ball.ondragstart = () => {
    setTimeout(() => {
        ball.style.display = "none"
    }, 0);
}

ball.ondragend = () => {
    ball.style.display = "block"
}

body.ondragover = (e) => {
    e.preventDefault();
}

body.ondrop = (event) => {
    let { x, y } = event
    console.log(x, y);

    ball.style.left = x + "px"
    ball.style.top = y + "px"

    if (x < 60 && y > 243) {
        console.log("Штраф!")
    } else if (x < 60 && y < 243) {
        console.log("Штраф!")
    } else if (x > 1270 && y > 243) {
        console.log("Штраф!")
    } else if (x > 1270 && y < 243) {
        console.log("Штраф!")
    } else if (y < 40 || y > 599) {
        console.log("Штраф!")
    }
}

function count() {
    sections.forEach(section => {
        section.ondrop = () => {
            if (section.classList.contains('one')) {
                num++
                one.innerHTML = num
                console.log('Goal to the first team"s section');
                js_confetti.addConfetti()
            } else {
                ber++
                two.innerHTML = ber
                console.log('Goal to the second team"s section');
                js_confetti.addConfetti()
            }
            tocenter()
        }
    })
}

function tocenter() {
    setTimeout(() => {
        ball.style.left = "50%"
        ball.style.top = "50%"
    }, 500);
}

reset.onclick = () => {
    one.innerHTML = 0
    two.innerHTML = 0
    tocenter()
}