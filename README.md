🃏 Blackjack: Casino Edition
A high-stakes, interactive Blackjack game built with HTML5, CSS3, and Vanilla JavaScript. This project features a "Dealer AI" that follows official casino rules, providing a competitive experience against a computer opponent.

🚀 Live Demo
Experience the game here: Blackjack Live on Vercel

✨ Features
Dealer AI: A "Robot" opponent that automatically hits until it reaches a sum of 17, following standard Blackjack regulations.

Dynamic UI: Real-time updates to the DOM using JavaScript to display cards, sums, and game status.

Chip Economy: Integrated player object tracking your "Bankroll" ($145 starting) with wins and losses impacting your total.

Responsive Design: A professional "Casino Night" theme with polished CSS transitions and a centralized layout.

🛠️ Tech Stack
HTML5: Semantic structure for the game board.

CSS3: Custom styling using Flexbox, CSS Variables, and hover effects for a premium feel.

JavaScript (ES6): Core game logic including:

while loops for AI decision-making.

Array manipulation for card tracking.

Conditional logic for win/loss determination.

🕹️ How to Play
Start Game: Click the "START GAME" button to receive your first two cards.

Evaluate: Check your sum. If you have 21, you win immediately (Blackjack!).

New Card (Hit): If your sum is below 21, click "NEW CARD" to try and get closer to 21 without going over ("Busting").

Stand: If you are happy with your sum, click "STAND." This triggers the Dealer AI to take its turn.

Win/Loss:

If your sum > Dealer's sum (or if Dealer busts), you win $20.

If Dealer's sum > your sum, you lose $10.

📂 Project Structure
Plaintext
├── index.html      # Game structure and UI elements
├── index.css       # Professional Casino styling
├── index.js        # Game engine and Dealer AI logic
└── README.md       # Project documentation
