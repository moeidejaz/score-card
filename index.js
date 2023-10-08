let homeEL=document.getElementById("home")
let guestEL=document.getElementById("guest")

//HOME COUNTER//

let homeCount = 0

function homePointOne(){
    homeCount++
    homeEL.textContent = homeCount
}

function homePointTwo(){
    homeCount = homeCount +2
    homeEL.textContent = homeCount
}

function homePointThree(){
    homeCount = homeCount +3
    homeEL.textContent = homeCount
}

//GUEST COUNTER//

let guestCount = 0

function guestPointOne(){
    guestCount = guestCount +1
    guestEL.textContent = guestCount
}

function guestPointTwo(){
    guestCount = guestCount +2
    guestEL.textContent = guestCount
}

function guestPointThree(){
    guestCount = guestCount +3
    guestEL.textContent = guestCount
}