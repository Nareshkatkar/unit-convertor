let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let showError = document.getElementById('errors')
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click",function (){
     let num = inputEl.value
      showError.textContent = ""
    if (num < 0) {
        showError.textContent = "* Please enter a positive number"
        lengthEl.textContent = "waiting for your input"
        volumeEl.textContent = "waiting for your input"
        massEl.textContent = "waiting for your input"
    } else {
        let feet = num * 3.281
        let meter = num / 3.281
        let liter = num / 0.264
        let gallon = num * 0.264
        let kilogram = num / 2.204
        let pound = num * 2.204

        lengthEl.textContent = `
        ${num} meters = ${feet.toFixed(3)} feet | 
        ${num} feet = ${meter.toFixed(3)} meters`

        volumeEl.textContent = `
        ${num} liters = ${gallon.toFixed(3)} gallons | 
        ${num} gallons = ${liter.toFixed(3)} liters`

        massEl.textContent = `
        ${num} kilos = ${pound.toFixed(3)} pounds | 
        ${num} pounds = ${kilogram.toFixed(3)} kilos`
    }
})