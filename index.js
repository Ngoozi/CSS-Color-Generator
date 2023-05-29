let numberAndLetters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, `A`, `B`, `C`, `D`, `E`, `F`]
let button = document.getElementById(`button`) 
let firstColorBox = document.getElementById(`first-color-box`)
let firstHexCode = document.getElementById(`first-hex-code`)
let secondColorBox = document.getElementById(`second-color-box`)
let secondHexCode = document.getElementById(`second-hex-code`) 
let thirdColorBox = document.getElementById(`third-color-box`)
let thirdHexCode = document.getElementById(`third-hex-code`)
let fourthColorBox = document.getElementById(`fourth-color-box`)
let fourthHexCode = document.getElementById(`fourth-hex-code`)


 
function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 16)
    return randomNumber
}
button.addEventListener(`click`, function(){
    let hexCodeFirstBox = `#`
    for(let myFirstLoop = 0; myFirstLoop<6; myFirstLoop++){
      let randomHex =  numberAndLetters[generateRandomNumber()]
      hexCodeFirstBox += randomHex
    }
    firstColorBox.style.backgroundColor = hexCodeFirstBox
    firstHexCode.innerText = hexCodeFirstBox


    let hexCodeForSecondBox = `#`
    for(let mySecondLoop =0; mySecondLoop<6; mySecondLoop++){
      let bRandomHex = numberAndLetters[generateRandomNumber()]
      hexCodeForSecondBox += bRandomHex
    }

    secondColorBox.style.backgroundColor = hexCodeForSecondBox
    secondHexCode.innerText = hexCodeForSecondBox

    let hexCodeForThirdBox = `#`
    for(let myThirdLoop =0; myThirdLoop<6; myThirdLoop++){
      let cRandomHex = numberAndLetters[generateRandomNumber()]
      hexCodeForThirdBox += cRandomHex
    }

    thirdColorBox.style.backgroundColor = hexCodeForThirdBox
    thirdHexCode.innerText = hexCodeForThirdBox


    let hexCodeForFourthBox =`#`
    for(let myFourthLoop =0; myFourthLoop<6; myFourthLoop++){
      let dRandomHex = numberAndLetters[generateRandomNumber()]
      hexCodeForFourthBox += dRandomHex
    }

    fourthColorBox.style.backgroundColor = hexCodeForFourthBox
    fourthHexCode.innerText = hexCodeForFourthBox
  
   
})  