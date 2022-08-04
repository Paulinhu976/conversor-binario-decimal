// @ts-check

const form = document.getElementById("form");
let binary = null;
let inputInvalid = false;

form?.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const inputBinary = event.target.querySelector("#binary");
  binary = inputBinary.value;

  verifyInput(binary);
  information();
  clearResult();
  if (inputInvalid) return;

  const binaryValue = convertBinary(binary);

  result(binaryValue);
}

function convertBinary(value) {
  const binaryValue = parseInt(value, 2);
  return binaryValue;
}

function clearResult() {
  const result = document.getElementById("result");
  if (result) {
    result.innerHTML = "";
  }
}

function result(msg) {
  const result = document.getElementById("result");

  if (result) {
    result.innerHTML = `${binary} (bin) = ${msg} (dec)`;
  }
}

function information() {
  const information = document.getElementById("information");
  if (information) {
    information.innerHTML = "";
  }
  if (inputInvalid && information) {
    information.innerHTML = `Inserir apenas 0 e 1`;
  }
}

function verifyInput(value) {
  debugger;
  inputInvalid = false;
  for (let index = 0; index < value.length; index++) {
    if (value[index] !== "0" && value[index] !== "1") {
      inputInvalid = true;
      break;
    }
  }
}
