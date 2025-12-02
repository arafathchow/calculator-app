# React Calculator

A fully-featured calculator built with React and Tailwind CSS, featuring memory functions, calculation history, theme switching, and full keyboard support.

## Features

### Core Calculator Functions

- Basic arithmetic operations (+, -, ×, ÷)
- Decimal point support
- Percentage calculations
- Sign toggle (+/-)
- Clear (AC) and backspace functionality
- Automatic scientific notation for large numbers

### Advanced Mathematical Functions

- Square (x²)
- Square root (√)
- Reciprocal (1/x)
- Pi (π) constant

### Memory Operations

- **MC (Memory Clear)**: Clears stored memory
- **MR (Memory Recall)**: Recalls the stored value
- **M+ (Memory Add)**: Adds current value to memory
- **M- (Memory Subtract)**: Subtracts current value from memory
- Visual "M" indicator when memory contains a value

### Calculation History

- Automatically saves all calculations
- Click any previous calculation to reuse its result
- Clear history option
- Smooth slide-up and slide-down animations
- Accessible with "H" keyboard shortcut

### User Interface

- **Dual Theme Support**: Toggle between dark and light modes
- **Full Keyboard Support**: All functions accessible via keyboard
- **Keyboard Visualizer**: Buttons animate when corresponding keys are pressed
- **Copy to Clipboard**: One-click copy of current display value
- **Responsive Design**: Clean, modern interface that works on all screen sizes
- **Custom Typography**: Roboto Mono font for clear number display

### Keyboard Shortcuts

- **Numbers (0-9)**: Direct input
- **Operators (+, -, \*, /)**: Mathematical operations
- **Enter or =**: Calculate result
- **Escape**: Clear calculator
- **Backspace**: Delete last digit
- **H**: Toggle history panel
- **R**: Square root
- **S**: Square
- **P**: Pi constant
- **%**: Percentage

## Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install

# Start development server
npm start
```

## Technologies Used

- **React**: Component-based UI framework
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Roboto Mono**: Google Font for display

---

## Why I Started This Project

I have previous experience with HTML, CSS, and JavaScript, but I wanted to push my capabilities beyond basic web development. While I could build simple websites, I struggled with:

- Understanding modern frameworks like React
- Grasping why React works the way it does (not just how to use it)
- Setting up development environments (installing Tailwind CSS, PostCSS, and all the dependencies)
- Moving from tutorials to actually building something functional

**My Problem with YouTube Tutorials:**
Most tutorials show you what to code but don't explain why the language must work this way. They skip over the reasoning behind concepts like state management, component lifecycle, or why you need tools like PostCSS. When you encounter an error or want to modify something, you're stuck because you don't understand the fundamentals.

I wanted to learn by doing and understanding, not just copying code.

---

## Learning with AI Assistance

Instead of following a rigid tutorial, I worked with Claude AI to build this calculator from scratch. This approach was helpful to me because:

### Step-by-Step Explanations

Every single change was explained. When adding a feature like "memory functionality," Claude would:

1. Explain what memory buttons do in real calculators
2. Show me how to implement it in React
3. Explain why we use `useState` for this
4. Walk through each line of code with context

### Learning the "Why"

- **Why does React use state?** Because it needs to know when to re-render components.
- **Why `useCallback` for keyboard handlers?** To prevent unnecessary re-creations of functions.
- **Why does Tailwind use utility classes?** For consistency and to avoid writing custom CSS.

Claude explained the reasoning behind every pattern, not just the syntax.

### Problem-Solving in Real-Time

When I encountered issues (like numbers exceeding display limits or text overlapping buttons), Claude helped me:

- Understand why the problem was happening
- Evaluate different solutions
- Implement fixes step by step
- Learn debugging techniques

## What I Learned

### React Fundamentals

- **State Management (`useState`)**: How to store and update data that changes over time
- **Side Effects (`useEffect`)**: Running code when components mount or when state changes
- **Memoization (`useCallback`)**: Optimizing performance by preventing unnecessary function re-creation
- **Component Props**: Passing data between components
- **Conditional Rendering**: Showing/hiding elements based on state
- **Event Handling**: Responding to clicks, keyboard input, and other user interactions

### JavaScript Concepts

- **Array Methods**: `.map()`, `.filter()`, `.split()` for data manipulation
- **Spread Operator (`...`)**: Copying and combining arrays/objects
- **Arrow Functions**: Concise function syntax and implicit returns
- **Template Literals**: String interpolation with backticks
- **Destructuring**: Extracting values from objects and arrays
- **Ternary Operators**: Concise conditional expressions

### Tailwind CSS

- **Utility-First Approach**: Using pre-defined classes instead of writing custom CSS
- **Responsive Design**: Building layouts that work on all screen sizes
- **State Variants**: Styling hover, active, and focus states
- **Color System**: Understanding Tailwind's color palette and opacity values
- **Spacing & Sizing**: Using Tailwind's spacing scale consistently
- **Transitions & Animations**: Creating smooth UI interactions

### CSS Animations

- **@keyframes**: Defining custom animations
- **Animation Properties**: Timing, duration, and easing functions
- **Transform**: Scaling, translating, and rotating elements
- **Transitions**: Smooth property changes on state updates

### Development Workflow

- **Component Structure**: Breaking UI into reusable pieces
- **State vs Props**: When to use each for data management
- **Debugging Techniques**: Using console.log and understanding error messages
- **Iterative Development**: Building features incrementally and testing as you go

### Problem-Solving Skills

- Breaking complex features into small, manageable steps
- Debugging by isolating problems
- Evaluating trade-offs between different solutions
- Reading and understanding documentation

## Honest Reflections

### Understanding vs. Building from Scratch

I learned a lot through this project. I now understand why React uses state, how Tailwind's utility classes work, and the reasoning behind patterns like `useCallback` and `useEffect`. I can read this code and sort of explain what every line does and why it's there.

This project taught me how to learn, not how to memorize. I understand the concepts, but building something like this from a blank file requires practice and repetition.  
**I could not recreate this from scratch right now.**

### Moving Forward

**The "Vibe Coding" Problem:**

I have a habit of just accepting code without fully understanding it, especially during long CSS sections. Sometimes I just copied the Tailwind classes because they looked right.

I feel like as long as I understand what the CSS is doing conceptually, it's fine. I know that `mb-4` means margin-bottom or that `rounded-xl` is a specific border radius, but to continously write it for each line feels like I'm wasting time.

The key is knowing when to stop and ask "what does this do?" versus when to accept something and move on. Over time, through repetition and building more projects, these patterns will become familiar and feel like I'm not wasting time.

Each project will reinforce what I learned here and introduce new concepts. The goal now is to gradually rely less on AI and code more independently. I also hope the gap between "understanding code" and "writing code from scratch" will close.

**The Path Forward:**

My plan is to use this project as a foundation. I'll build other apps using a similar workflow:

1. Start with a clear goal (a todo app, a weather app, etc.)
2. Break it into small features
3. Try to implement it myself first
4. If I'm stuck, I'll use AI for specific questions and step-by-step guidance
5. Use online resources as well to understand each piece
6. Referencing documentation and Stack Overflow like experienced developers do

This will hopefully gradually reduce how much guidance I need.
