const meter = 3.281;
const liter = 0.264;
const kilogram = 2.204;
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
const input = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
const error = document.getElementById("error");
const resetBtn = document.getElementById("reset-btn");

const convert = {
  meterToFeet: function (x) {
    return (x * 3.281).toFixed(3);
  },
  feetToMeter: function (x) {
    return (x / 3.281).toFixed(3);
  },
  literToGallon: function (x) {
    return (x * 0.264).toFixed(3);
  },
  gallonToLiter: function (x) {
    return (x / 0.264).toFixed(3);
  },
  kilogramToPound: function (x) {
    return (x * 2.204).toFixed(3);
  },
  poundToKilogram: function (x) {
    return (x / 2.204).toFixed(3);
  },
};

convertBtn.addEventListener("click", function () {
  if (input.value > 0 && input.value <= 999999) {
    length.textContent = `${input.value} meters = ${convert.meterToFeet(
      input.value
    )} feet | ${input.value} feet = ${convert.feetToMeter(input.value)} meters`;
    volume.textContent = `${input.value} liters = ${convert.literToGallon(
      input.value
    )} gallons | ${input.value} gallons = ${convert.gallonToLiter(
      input.value
    )} liters`;
    mass.textContent = `${input.value} kilos = ${convert.kilogramToPound(
      input.value
    )} pounds | ${input.value} pounds = ${convert.poundToKilogram(
      input.value
    )} kilos`;
  } else {
    error.textContent = "Please add only numbers";
  }
});

resetBtn.addEventListener("click", function () {
  error.textContent = "";
  input.value = "";
  length.textContent = "";
  volume.textContent = "";
  mass.textContent = "";
});
