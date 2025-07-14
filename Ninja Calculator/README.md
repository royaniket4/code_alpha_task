
# Web-Based Calculator Application

This is a modern, lightweight web-based calculator application built using **HTML**, **CSS**, and **JavaScript**. It replicates the core functionality of a physical calculator with additional styling for a clean user experience. This project is ideal for beginners looking to understand DOM manipulation, event handling, and responsive UI design in frontend development.
---

## Project Overview

This calculator application allows users to perform basic mathematical operations including addition, subtraction, multiplication, division, and percentage calculations. It also includes clear (AC), delete (DEL), and decimal point functionality. The UI is designed to be minimalistic and user-friendly, using a grid layout for button alignment and responsive design principles for better compatibility across screen sizes.

---

## Key Features

- **Basic Operations**: Supports addition, subtraction, multiplication, and division.
- **Percentage Support**: Users can directly calculate percentages using the `%` operator.
- **AC (All Clear)**: Clears the entire input expression.
- **DEL (Delete)**: Deletes the last entered character or digit.
- **Live Output Update**: The display updates in real-time as users interact with the calculator.
- **Responsive Design**: Adjusts layout based on screen size.
- **Styled Interface**: Modern, card-style UI with a clean and organized layout.

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| HTML5      | Structuring the calculator UI layout |
| CSS3       | Styling and layout (including responsiveness and animations) |
| JavaScript (Vanilla) | Calculator logic, button event handling, and expression evaluation |

---

## Folder Structure

```
calculator-app/
├── index.html      # Main HTML layout with container, buttons, and input display
├── style.css       # CSS file that styles the calculator layout and buttons
└── script.js       # JavaScript logic for calculator operations and event handling
```

---

## How to Use

### Option 1: Run Locally

1. **Download or Clone the Repository**  
```bash
git clone https://github.com/royaniket4/calculator-app.git
cd calculator-app
```

2. **Open in Browser**  
Open `index.html` in your preferred browser by double-clicking or using a live server.

### Option 2: Host on GitHub Pages (Optional)

1. Push the repository to GitHub.
2. Go to **Repository Settings > Pages** and configure the source branch as `main` and the folder as `/root`.
3. Access the calculator from the given GitHub Pages URL.

---

## How It Works

### HTML (`index.html`)
- Contains the calculator UI with a container holding:
  - An input field for displaying the result.
  - A grid of buttons (`0-9`, operators, AC, DEL, `=`).

### CSS (`style.css`)
- Uses **Google Fonts (Poppins)** for a modern typography.
- Styles each component including buttons, display input, container box.
- Applies grid layout to organize calculator buttons in 4 columns.
- Adds hover effects and rounded corners for better UX.

### JavaScript (`script.js`)
- Selects DOM elements and binds click events to each button.
- Maintains a dynamic string (`output`) that stores user input.
- Handles:
  - Clear (`AC`): Resets the entire string.
  - Delete (`DEL`): Removes the last character.
  - Evaluation (`=`): Evaluates the expression using `eval()`.
  - Percentage (`%`): Converts `%` to `/100` before evaluation.
- Prevents invalid input sequences like starting with an operator.

---

## Screenshots

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/da081a2e-0ec0-45d4-aad7-ba719f208536" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/70664ef5-5bd7-43e2-9cd0-28b1d2611ebc" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a461e4db-d6af-410d-bda9-2363350215d2" />

## Future Enhancements

- Add keyboard input support (type numbers/operators directly).
- Improve error handling for invalid expressions.
- Display history of previous calculations.
- Add scientific calculator mode (with trigonometric functions, square roots, etc.).
- Add animations on button clicks or transitions.
