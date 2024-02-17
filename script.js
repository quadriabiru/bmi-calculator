const apiUrl = "https://hbu93xoh5i.execute-api.us-east-1.amazonaws.com/getBMI"

// Add this line to hide the result container by default
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('result-container').style.display = 'none';
});

function callAPI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    data = {
        height: height,
        weight: weight
    }; 

    const requestOptions = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    fetch(apiUrl, requestOptions)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      
      .then(data => {
        console.log(data);

        const bmi = parseFloat(data["bmi"]);

        var resultContainer = document.getElementById('result-container');
        var bmiResultElement = document.getElementById('bmi-result');
        var implicationResultElement = document.getElementById('implication-result');
        
        bmiResultElement.textContent = bmi.toFixed(2); // Adjust to display desired decimal places
    
        // Determine the BMI implication
        if (bmi < 18.5) {
            implicationResultElement.textContent = "Your BMI is considered underweight.";
        } else if (bmi >= 18.5 && bmi < 25) {
            implicationResultElement.textContent = "Your BMI is in the normal weight range.";
        } else if (bmi >= 25 && bmi < 30) {
            implicationResultElement.textContent = "Your BMI is considered overweight.";
        } else {
            implicationResultElement.textContent = "Your BMI indicates obesity.";
        }          
        // Show the result container
        resultContainer.style.display = 'block';
      })

      .catch(error => {
        console.error('Error:', error);
      });       
}

