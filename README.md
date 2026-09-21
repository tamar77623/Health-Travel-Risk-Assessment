✈️ Health Travel Risk Assessment

An interactive web application built with Vanilla JavaScript and Tailwind CSS that evaluates health and safety risks for international travelers. By analyzing user input—including travel destination, age, pre-existing health conditions, and duration of stay—the application dynamically calculates a health risk score and provides tailored medical advice, vaccination recommendations, and risk levels.

🚀 Live Demo & Features

Key Features

Dynamic Risk Scoring Algorithm: Calculates a personalized risk score based on multi-factor weighted evaluation (destination epidemiology, age vulnerabilities, chronic illness status, and length of stay).

Customized Medical Advice: Generates actionable medical recommendations based on individual risk inputs.

Destination Vaccine Guidance: Suggests essential health precautions and vaccinations tailored to specific region categories (e.g., Yellow Fever, Malaria prophylaxis for tropical/African destinations).

Responsive & Modern UI: Designed with Tailwind CSS for an intuitive and responsive layout across desktop and mobile devices.

Real-Time Input Validation: Guarantees accurate evaluation by ensuring all fields are correctly populated before assessment.

🛠️ Tech Stack

HTML5: Semantic structure and accessible input forms.

Tailwind CSS: Modern utility-first styling for layout and responsive design.

Vanilla JavaScript (ES6+): Pure DOM manipulation, input validation, and conditional risk evaluation logic without external framework dependencies.

📊 Risk Evaluation Logic

The application computes a cumulative risk score based on four primary health factors:

Risk Factor

Condition / Inputs

Points Added

Age Vulnerability

Age < 12 or Age > 60

+2 Points

Chronic Disease

Yes

+3 Points

Duration of Stay

> 30 Days



10 to 30 Days

+2 Points



+1 Point

Destination Risk

Tropical / Africa



Asian Countries



European / Developed Countries

+3 Points



+1 Point



+0 Points

Result Categorization

Cumulative Score

Risk Level Classification

Visual Indicator

0 – 2 Points

Low Risk

🟢 Green

3 – 5 Points

Medium Risk

🟡 Yellow / Orange

6+ Points

High Risk

🔴 Red

📂 Project Structure

├── index.html          # Main HTML structure with Tailwind CSS classes
├── app.js              # Business logic, input validation, and risk score calculation
└── README.md           # Project documentation


🔧 Getting Started & Installation

No complex server setup or package installation is required.

Clone the repository:

git clone https://github.com/your-username/health-travel-risk-assessment.git


Navigate to the project folder:

cd health-travel-risk-assessment


Open index.html in your favorite web browser.

📝 Usage Example

Select Destination: Choose the country or geographic region (e.g., Africa, Asia, Europe).

Enter Age: Input traveler's age in years.

Select Health Status: Indicate whether chronic illness is present (Yes / No).

Enter Duration: Specify total travel duration in days.

Click "Analyze Health Risk": View the risk score, risk level badge, required vaccinations, and medical tips.

🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

📜 License

This project is open source and available under the MIT License.
