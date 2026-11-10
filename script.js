let isOn = false;
let waterLevel = 75;

const powerButton = document.getElementById("powerButton");
const statusText = document.getElementById("status");

powerButton.addEventListener("click", function() {

  if (isOn === false && waterLevel === 0) {
    alert("Please refill the water first!");
  } else if (isOn === false) {
    isOn = true;
    statusText.textContent = "Humidifier Status: ON";
  } else {
    isOn = false;
    statusText.textContent = "Humidifier Status: OFF";
  }

});

let mistLevel = "Low";

const mistButton = document.getElementById("mistButton");
const mistText = document.getElementById("mistText");

mistButton.addEventListener("click", function() {

  if (isOn === false) {
    alert("Please turn on the humidifier first!");
  } else if (mistLevel === "Low") {
    mistLevel = "High";
    mistText.textContent = "Mist Level: High";
  } else {
    mistLevel = "Low";
    mistText.textContent = "Mist Level: Low";
  }

});

const waterText = document.getElementById("waterText");
const useWaterButton = document.getElementById("useWaterButton");
const refillButton = document.getElementById("refillButton");

// Simulate water consumption
useWaterButton.addEventListener("click", function() {

  if (isOn === false) {
    alert("Please turn on the humidifier first!");
  } else if (waterLevel > 25) {
    waterLevel = waterLevel - 25;
    waterText.textContent = "Water Level: " + waterLevel + "%";
  } else {
    waterLevel = 0;
    isOn = false;

    waterText.textContent = "Water Level: 0%";
    statusText.textContent = "Humidifier Status: OFF - No Water!";

    alert("Out of water! Humidifier turned off.");
  }

});

// Refill water
refillButton.addEventListener("click", function() {

  waterLevel = 100;
  waterText.textContent = "Water Level: 100%";

  if (isOn === false) {
    statusText.textContent = "Humidifier Status: OFF";
  }

  alert("Water refilled!");

});