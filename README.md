markdown# Advanced React Counter

A feature-rich counter application built with React, TypeScript, and Vite. This project demonstrates advanced React concepts including hooks, state management, side effects, and event handling.

## 🚀 Features

- **Basic Counter Operations**: Increment and decrement functionality
- **Custom Step Value**: Set custom increment/decrement amounts
- **History Tracking**: View all previous counter values
- **Auto-Save**: Automatically saves state to localStorage
- **Keyboard Navigation**: Use ArrowUp/ArrowDown keys
- **Reset Functionality**: Clear counter and history with one click
- **Responsive Design**: Clean, modern UI that works on all devices

## 📸 Screenshots

![Counter Demo](https://via.placeholder.com/600x400?text=Counter+Screenshot)
*Screenshot showing the counter interface with all features*

## 🛠️ Technologies Used

- **React 18**: Modern React with functional components
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server
- **CSS-in-JS**: Inline styling for component encapsulation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- A code editor like [VS Code](https://code.visualstudio.com/)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/lab1-react-counter.git
   cd lab1-react-counter

Install dependencies
bashnpm install

Start the development server
bashnpm run dev

Open your browser
Navigate to http://localhost:5173

🎯 Usage
Basic Operations

Click Increment to increase the counter
Click Decrement to decrease the counter
Click Reset to return to 0 and clear history

Keyboard Shortcuts

↑ (ArrowUp): Increment counter
↓ (ArrowDown): Decrement counter

Custom Step Value

Enter a number in the "Step Value" input
The counter will now increment/decrement by that amount

History

All counter values are automatically tracked
History persists across page refreshes
Scroll through history if it exceeds the view area

📁 Project Structure
lab1-react-counter/
├── src/
│   ├── components/
│   │   └── AdvancedCounter.tsx    # Main counter component
│   ├── App.tsx                     # Root application component
│   ├── App.css                     # Application styles
│   ├── index.css                   # Global styles
│   └── main.tsx                    # Application entry point
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Project dependencies
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite configuration
└── README.md                       # This file
🔍 Code Highlights
useState Hook
typescriptconst [count, setCount] = useState<number>(() => {
  const savedCount = localStorage.getItem('counter-value')
  return savedCount ? parseInt(savedCount, 10) : 0
})
useEffect Hook with Cleanup
typescriptuseEffect(() => {
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp') handleIncrement()
    else if (event.key === 'ArrowDown') handleDecrement()
  }
  
  document.addEventListener('keydown', handleKeyPress)
  return () => document.removeEventListener('keydown', handleKeyPress)
}, [count, history, step])
🧪 Available Scripts

npm run dev - Start development server
npm run build - Build for production
npm run preview - Preview production build
npm run lint - Run ESLint

📚 Learning Resources
This project demonstrates several important React concepts:

State Management

Using useState for local state
Lazy state initialization
Managing multiple related states


Side Effects

Using useEffect for localStorage
Event listener management
Cleanup functions


Event Handling

Click events
Keyboard events
Form input handling


TypeScript Integration

Type-safe components
Event type definitions
Generic types with hooks



🤝 Contributing

Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
🙏 Acknowledgments

Built as part of Module 10 Lab Assignment
React documentation for excellent guides
Vite team for the amazing build tool

📞 Contact
Your Name - @yourtwitter - email@example.com
Project Link: https://github.com/Bvega/lab1-react-counter