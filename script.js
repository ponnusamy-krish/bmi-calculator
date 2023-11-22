document.getElementById('calculate').addEventListener('click', function() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
        var bmi = weight / (height * height);
        console.log(bmi * 10000)
        var roundedBMI = Math.round(bmi * 10000) ;  // Rounding to 2 decimal places
        console.log(roundedBMI)
        document.getElementById('result').innerHTML = `Your BMI is ${roundedBMI}`;
    } else {
        document.getElementById('result').innerHTML = "Please enter valid values for both weight and height.";
    }
});
    