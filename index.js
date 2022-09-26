// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count


//Count Ambulances
let countAmbulance = document.getElementById("a-count-el")
let countA = 0
let saveAmbulance = document.getElementById("save-el-a")


function aIncrementNumber () {
    countA += 1
    countAmbulance.textContent = countA
}

function aReset () {
    saveAmbulance.innerText = "Previous Entries: "
}

function aSave () {
    let saveA = countA + " - "
    saveAmbulance.textContent += saveA

    //reset number
    countA = 0
    countAmbulance.textContent = countA
}



//Count Fire Trucks
let countFire = document.getElementById("f-count-el")
let countF = 0
let saveFire = document.getElementById("save-el-f")

function fIncrementNumber () {
    countF += 1
    countFire.textContent = countF
}

function fReset () {
    saveFire.innerText = "Previous Entries: "
}

function fSave () {
    let saveF = countF + " - "
    saveFire.textContent += saveF

    //reset counter
    countF = 0
    countFire.innerText = countF
}