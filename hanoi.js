//Included code from Randy's demo and study hall on 24JUN2020.

let mode = "pickup"
let selectedDisc = null

const clickTower = function (evt) {
    const tower = evt.currentTarget
    const disc = tower.lastElementChild
    if (mode === "pickup") {
        if(disc){
            console.log("you picked up  " + disc.id)
            selectedDisc = disc
            selectedDisc.classList.add("selected")
            mode = "drop"
        } else {
            console.log("no disc to pick up")
        }
    } else if (mode === "drop") {
        //drop
        console.log("You dropped " + selectedDisc.id + " onto " + tower.id + " " + selectedDisc.dataset.width)
        mode = "pickup"
        if (!event.currentTarget.firstElementChild){
            tower.append(selectedDisc)
            selectedDisc.classList.remove("selected")
        } else if (selectedDisc.dataset.width > tower.firstElementChild.dataset.width) {
            console.log("Yay")
            tower.append(selectedDisc)
            selectedDisc.classList.remove("selected")
        } else {
            alert ("Invalid move! Disc can't be placed on top of a smaller one. Please place on a different section.")
            mode = "drop"
        }
    }
    if (tower3.childElementCount === 4)
    alert ("You won!!!")
}

const tower1 = document.querySelector("#tower1")
const tower2 = document.querySelector("#tower2")
const tower3 = document.querySelector("#tower3")

tower1.addEventListener("click", clickTower)
tower2.addEventListener("click", clickTower)
tower3.addEventListener("click", clickTower)

