let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")

let homeStoreEl = document.getElementById("home-score")
let homeScore = 0

function homeb1(){
    homeScore += 1
        homeStoreEl.textContent = homeScore
}

function homeb2(){
    homeScore += 2
        homeStoreEl.textContent = homeScore
}
function homeb3(){
    homeScore += 3
        homeStoreEl.textContent = homeScore
}


let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")

let guestStoreEl = document.getElementById("guest-score")
let guestScore = 0

function guestb1(){
    guestScore += 1
        guestStoreEl.textContent = guestScore
}

function guestb2(){
    guestScore += 2
        guestStoreEl.textContent = guestScore
}
function guestb3(){
    guestScore += 3
        guestStoreEl.textContent = guestScore
}

let resetBtn = document.getElementById("reset-btn");

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    homeStoreEl.textContent = homeScore;
    guestStoreEl.textContent = guestScore;
}
