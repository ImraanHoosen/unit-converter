// Select the HTML elements that will be used to display the output
const lengthEl = document.getElementById("length-text");
const volumeEl = document.getElementById("volume-text");
const massEl = document.getElementById("mass-text");

// Select the input element and the convert button
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");

// Define the conversion factors for length, volume, and mass
const meterToFeet = 3.28084;
const feetToMeter = 0.3048;
const literToGallon = 0.264172;
const gallonToLiter = 3.78541;
const kiloToPound = 2.20462;
const poundToKilo = 0.453592;

// Add an event listener to the convert button to run the conversion function
convertBtn.addEventListener("click", function () {
  // Get the input value from the user
  let baseValue = inputEl.value;

  // Convert the input value from meters to feet and display the result
  lengthEl.textContent = `${baseValue} meter = ${(
    baseValue * meterToFeet
  ).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(
    3
  )} meters`;

  // Convert the input value from liters to gallons and display the result
  volumeEl.textContent = `${baseValue} liters = ${(
    baseValue * literToGallon
  ).toFixed(3)} gallons | ${baseValue} gallons = ${(
    baseValue * gallonToLiter
  ).toFixed(3)} liters`;

  // Convert the input value from kilograms to pounds and display the result
  massEl.textContent = `${baseValue} kilos = ${(
    baseValue * kiloToPound
  ).toFixed(3)} pounds | ${baseValue} pounds = ${(
    baseValue * poundToKilo
  ).toFixed(3)} kilos`;

  // Clear the input field after conversion
  inputEl.value = "";
});

// FUNCTION TO RESIZE INPUT SECTION
function updateInputWidth() {
  // Create a canvas to measure the width of the input text
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  // Set the same font as the input box to measure correctly
  context.font = "58px Inter, sans-serif";

  // Measure the width of the text
  const textWidth = context.measureText(inputEl.value).width;

  // Calculate the new width of the input box
  let newWidth = textWidth + 50; // Add some padding
  newWidth = Math.max(newWidth, 117); // Ensure the width doesn't go below 117px
  newWidth = Math.min(newWidth, 500); // Set the maximum width to prevent it from becoming too wide

  // Set the new width to the input box
  inputEl.style.width = newWidth + "px";
}

// Update input box width whenever text is entered
inputEl.addEventListener("input", updateInputWidth);

// Set the starting size of the input box
inputEl.style.width = "117px";
