let scoreHome = 0
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
//let resetBtn = document.getElementById("reset-btn")

function add1home(){
    scoreHome += 1
    homeEl.textContent = scoreHome
}

function add2home(){
    scoreHome += 2
    homeEl.textContent = scoreHome
}

function add3home(){
    scoreHome += 3
    homeEl.textContent = scoreHome
}

 let scoreGuest = 0

function add1guest(){
    scoreGuest += 1
    guestEl.textContent = scoreGuest
}

function add2guest(){
    scoreGuest += 2
    guestEl.textContent = scoreGuest
}

function add3guest(){
    scoreGuest += 3
    guestEl.textContent = scoreGuest
}

function setzero(){
    scoreHome = 0
    scoreGuest= 0
    guestEl.textContent = 0
    homeEl.textContent = 0
    
}