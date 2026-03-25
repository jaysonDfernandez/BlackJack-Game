# 🃏 Blackjack: Casino Edition

A high-stakes, interactive Blackjack game built with HTML5, CSS3, and Vanilla JavaScript.  
This project features a **Dealer AI** that follows official casino rules, providing a competitive experience against a computer opponent.

---

## 🚀 Live Demo
👉 [Play Blackjack on Vercel](#)

---

## ✨ Features

- **Dealer AI**  
  A "Robot" opponent that automatically hits until it reaches a sum of 17, following standard Blackjack rules.

- **Dynamic UI**  
  Real-time DOM updates using JavaScript to display cards, sums, and game status.

- **Chip Economy**  
  Player bankroll system starting at **$145**, with wins and losses affecting total balance.

- **Responsive Design**  
  "Casino Night" themed UI with smooth CSS transitions and a clean layout.

---

## 🛠️ Tech Stack

- **HTML5**  
  Semantic structure for the game board.

- **CSS3**  
  Flexbox layout, CSS variables, and hover effects for polished styling.

- **JavaScript (ES6)**  
  Core game logic including:
  - `while` loops for Dealer AI behavior  
  - Array manipulation for card handling  
  - Conditional logic for win/loss outcomes  

---

## 🕹️ How to Play

1. **Start Game**  
   Click `START GAME` to receive your first two cards.

2. **Evaluate**  
   - If your sum is **21**, you win instantly (Blackjack).  

3. **New Card (Hit)**  
   - Click `NEW CARD` to draw another card.  
   - Try to get close to 21 without going over (bust).

4. **Stand**  
   - Click `STAND` to end your turn.  
   - Dealer AI will play automatically.

5. **Win / Loss Rules**
   - If your sum > Dealer's sum OR dealer busts → **Win $20**  
   - If dealer sum > your sum → **Lose $10**

---

## 📂 Project Structure
