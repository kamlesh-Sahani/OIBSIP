function convertTemperature() {
  const inputValue = parseFloat(document.getElementById('inputValue').value);
  const inputUnit = document.getElementById('inputUnit').value;
  let resultValue = {};

  switch(inputUnit) {
    case 'celsius':
      resultValue.fahrenheit = (inputValue * 9/5) + 32;
      break;
    case 'fahrenheit':
      resultValue.celsius = (inputValue - 32) * 5/9;
      break;
    default:
      break;
  }

  let resultString = 'Converted Temperatures:\n';
  if (resultValue.celsius !== undefined) {
    resultString += `Celsius: ${resultValue.celsius}\n`;
  }
  if (resultValue.fahrenheit !== undefined) {
    resultString += `Fahrenheit: ${resultValue.fahrenheit}\n`;
  }

  document.getElementById('result').innerText = resultString;
}
