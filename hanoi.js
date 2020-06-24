

let mode = "pickup"
let selectedDisc = null

const grabDisc = function (evt) {
    const tower = evt.currentTarget
    if (mode === "pickup") {
        //pickup
        const disc = tower.lastElementChild
        if(disc){
            console.log("you picked up disc " + disc.id)
            selectedDisc = disc
            mode = "drop"
        } else {
            console.log("no disc to pick up")
        }
    } else {
        //drop
        console.log("You dropped onto " + tower.id)
        tower.append(selectedDisc)
        mode = "pickup"
    }
}

const tower1 = document.querySelector("#tower1")
const tower2 = document.querySelector("#tower2")
const tower3 = document.querySelector("#tower3")
let disc1 = document.querySelector("#disc1")
let disc2 = document.querySelector("#disc2")
let disc3 = document.querySelector("#disc3")
let disc4 = document.querySelector("#disc4")

tower1.addEventListener("click", grabDisc)
tower2.addEventListener("click", grabDisc)
tower3.addEventListener("click", grabDisc)