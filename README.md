# BMI Calculator

Welcome to the **BMI Calculator** repository! This project allows users to calculate their Body Mass Index (BMI) based on their height and weight, providing insights into their health status.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Features

- Input fields for height (in cm) and weight (in kg).
- Calculates BMI using an external API.
- Displays BMI result along with its health implications (underweight, normal weight, overweight, obesity).
- Responsive design with a visually appealing background.

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling and layout.
- **JavaScript**: Client-side logic for API calls and dynamic content updates.
- **Fetch API**: To communicate with the BMI calculation backend.

## Getting Started

To run the BMI Calculator locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/quadriabiru/bmi-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd bmi-calculator
   ```
3. Open `index.html` in your web browser.

## Usage

1. Enter your height in centimeters.
2. Enter your weight in kilograms.
3. Click the "Calculate" button to see your BMI result and its implications.

## API

The BMI Calculator communicates with a backend API hosted on AWS. For security reasons, the API endpoint is obscured in the codebase.

### Functionality

- The API expects a **POST** request containing a JSON body with the user's height and weight.
- Upon receiving the request, it calculates the Body Mass Index (BMI) and returns the result.
- The response includes the calculated BMI value, which is then displayed in the application along with health implications based on the BMI category (underweight, normal weight, overweight, or obesity).

This design helps ensure that users receive accurate and timely BMI assessments while keeping sensitive information secure.

## Contributing

Contributions are welcome! If you'd like to improve the project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
