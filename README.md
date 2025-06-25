# Advanced React Counter

🔗 **Live Demo**: [https://bvega.github.io/lab1-react-counter/](https://bvega.github.io/lab1-react-counter/)

A feature-rich counter application built with React, TypeScript, and Vite. This project demonstrates advanced React concepts including hooks, state management, side effects, and event handling.

## 🚀 Features

- **Basic Counter Operations**: Increment and decrement functionality
- **Custom Step Value**: Set custom increment/decrement amounts
- **History Tracking**: View all previous counter values
- **Auto-Save**: Automatically saves state to localStorage
- **Keyboard Navigation**: Use ArrowUp/ArrowDown keys
- **Reset Functionality**: Clear counter and history with one click
- **Responsive Design**: Clean, modern UI that works on all devices

## 🛠️ Technologies Used

- **React 18**: Modern React with functional components
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server
- **CSS-in-JS**: Inline styling for component encapsulation
- **GitHub Pages**: Free hosting for the live demo

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- A code editor like [VS Code](https://code.visualstudio.com/)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bvega/lab1-react-counter.git
   cd lab1-react-counter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Usage

### Basic Operations
- Click **Increment** to increase the counter
- Click **Decrement** to decrease the counter
- Click **Reset** to return to 0 and clear history

### Keyboard Shortcuts
- `↑` (ArrowUp): Increment counter
- `↓` (ArrowDown): Decrement counter

### Custom Step Value
1. Enter a number in the "Step Value" input
2. The counter will now increment/decrement by that amount

### History
- All counter values are automatically tracked
- History persists across page refreshes
- Scroll through history if it exceeds the view area

## 📁 Project Structure

```
lab1-react-counter/
├── src/
│   ├── components/
│   │   └── AdvancedCounter.tsx    # Main counter component
│   ├── App.tsx                     # Root application component
│   ├── App.css                     # Application styles
│   ├── index.css                   # Global styles
│   └── main.tsx                    # Application entry point
├── public/                         # Static assets
├── dist/                           # Production build (generated)
├── index.html                      # HTML template
├── package.json                    # Project dependencies
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite configuration
└── README.md                       # This file
```

## 🔍 Code Highlights

### useState Hook with Lazy Initialization
```typescript
const [count, setCount] = useState<number>(() => {
  const savedCount = localStorage.getItem('counter-value')
  return savedCount ? parseInt(savedCount, 10) : 0
})
```

### useEffect Hook with Cleanup
```typescript
useEffect(() => {
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp') handleIncrement()
    else if (event.key === 'ArrowDown') handleDecrement()
  }
  
  document.addEventListener('keydown', handleKeyPress)
  return () => document.removeEventListener('keydown', handleKeyPress)
}, [count, history, step])
```

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 📚 Learning Outcomes

This project demonstrates:

1. **State Management**
   - Using `useState` for local state
   - Lazy state initialization
   - Managing multiple related states

2. **Side Effects**
   - Using `useEffect` for localStorage persistence
   - Event listener management
   - Cleanup functions to prevent memory leaks

3. **Event Handling**
   - Click events
   - Keyboard events
   - Form input handling with validation

4. **TypeScript Integration**
   - Type-safe React components
   - Event type definitions
   - Generic types with hooks

## 🚀 Deployment

This project is deployed using GitHub Pages. To deploy your own version:

1. Fork this repository
2. Update `vite.config.ts` with your repository name
3. Run `npm run deploy`
4. Enable GitHub Pages in repository settings

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is created for educational purposes as part of Module 10 Lab Assignment.

## 🙏 Acknowledgments

- Built as part of RTT-23 Module 10 Lab Assignment
- React documentation for excellent guides
- Vite team for the amazing build tool

---

**Developed by**: B. Vega  
**Course**: RTT-23 Module 10  
**Date**: June 2025