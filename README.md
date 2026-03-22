# Schulte Table Game

A fast-paced, interactive web application built with React to train peripheral vision, attention, and speed reading using the classic **Schulte Table** method.

## 🎯 Objective
A Schulte Table is a grid with randomly distributed numbers. The objective of the game is to find and click the numbers in numerical order (from 1 to 25) as quickly as possible. Faster completion times indicate better visual perception and attention span!

## ✨ Features
* **Dynamic 5x5 Grid:** A clean 25-cell board that randomly shuffles the numbers on every new game.
* **Precision Timer:** Features a highly accurate, live-updating timer that tracks elapsed milliseconds (`0.00` format) directly from user interaction.
* **Smart Board State:** The board automatically disables itself the moment the final number is clicked, freezing your finish time for you to see.
* **Instant Restart:** Quickly start a new game anytime to try and beat your previous high score.
* **Modern UI:** Sleek, responsive, and distraction-free interface built with TailwindCSS.

## 🛠️ Built With
* [React](https://reactjs.org/) (Hooks, Memoization for performance)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Getting Started
 
To get a local copy up and running, follow these simple steps:

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation & Running

1. Clone the repository or download the source code
2. Navigate into the project directory
3. Install the NPM packages:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173` to play!

## 💡 How to Play
1. The timer starts the exact moment you click the number **1**.
2. Quickly scan the board and click `2`, `3`, `4`, etc., all the way up to **25**.
3. Try to keep your eyes focused on the center of the grid and use your peripheral vision to find the next numbers.
4. Once you click `25`, the timer will stop and display your final time!
