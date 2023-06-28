const memoryItemImg = ["js.png", "react.png", "Typescript.png", "node.png", "js.png", "react.png", "Typescript.png", "node.png"]
const memortContainer = document.querySelector(".memory-container");
const winCount = document.querySelector("span");
const popUp = document.querySelector(".pop-up");
const restartButton = document.querySelector("button");

let flip = false;
let play = false;
let firstCart;
let secondCart;
let count = 0;


(function () {

    for (let i = memoryItemImg.length - 1; i > 0; i--) {
        const randomId = Math.floor(Math.random() * (i + 1))

        const original = memoryItemImg[i]

        memoryItemImg[i] = memoryItemImg[randomId]
        memoryItemImg[randomId] = original
    }


}
)();

memoryItemImg.forEach(elem => {
    memortContainer.innerHTML += `
    <div class="memory-item" data-framework='${elem}'>
        <div class="front-face"><i class="fa-solid fa-code"></i></div>
        <img class="back-face" src="img/${elem}" alt="react">
    </div>
`
});



const AllItems = Array.from(memortContainer.children)
AllItems.forEach((elem) => elem.addEventListener("click", gameStart))

restartButton.addEventListener("click", () => {
    location.reload()
})


function gameStart(e) {
    if (play) return

    const target = e.target.parentElement

    if (target == firstCart) return


    target.classList.toggle("flip")

    if (!flip) {

        firstCart = target

        flip = !flip
    }
    else {
        secondCart = target
        flip = !flip
        checkForMathc()


    }
}

function checkForMathc() {

    if (firstCart.dataset.framework === secondCart.dataset.framework) {
        count++
        winCount.innerText = count
        checkWin()
    }

    else {
        play = true
        setTimeout(() => {
            secondCart.classList.remove("flip")
            firstCart.classList.remove("flip")
            restart()
        }, 1000);

    }
}

function restart() {
    firstCart, secondCart = false, false
    flip, play = false
}


function checkWin() {
    if (count === 4) popUp.classList.add("active")
}


