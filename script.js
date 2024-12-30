/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");

const lengthEl = document.getElementById("length-text");
const volumeEl = document.getElementById("volume-text");
const massEl = document.getElementById("mass-text");

const meterToFeet = 3.28084;
const feetToMeter = 0.3048;

const literToGallon = 0.264172;
const gallonToLiter = 3.78541;

const kiloToPound = 2.20462;
const poundToKilo = 0.453592;

convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;

  lengthEl.textContent = `${baseValue} meter = ${(
    baseValue * meterToFeet
  ).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(
    3
  )} meters`;

  volumeEl.textContent = `${baseValue} liters = ${(
    baseValue * literToGallon
  ).toFixed(3)} gallons | ${baseValue} gallons = ${(
    baseValue * gallonToLiter
  ).toFixed(3)} liters`;

  massEl.textContent = `${baseValue} kilos = ${(
    baseValue * kiloToPound
  ).toFixed(3)} pounds | ${baseValue} pounds = ${(
    baseValue * poundToKilo
  ).toFixed(3)} kilos`;

  // Clear input field after conversion
  inputEl.value = "";
});
