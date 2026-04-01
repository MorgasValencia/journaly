# Journaly 🌙

A gamified AI journaling app with a companion called Luna. Users write daily entries, earn MindCoins, build streaks and level up the more they journal. Luna responds to every entry using the Anthropic Claude API.The aim of this app is to make journaling fun and interactive for users who want to enjoy the benefits of journaling but can't stay consistent.

## Features

- Luna AI companion powered by Claude — conversational responses, no robotic formatting
- MindCoins earned per entry with a bonus for longer writes
- Daily streak tracking and a 5-level progression system
- Day and night dynamic canvas background based on time of day
- Luna's messages and poses change based on user context
- New user onboarding tour
- Password strength validation
- Random journal prompts at the start of each session

## Tech Stack

- Frontend: HTML, CSS, Vanilla JavaScript
- Backend: Node.js, Express
- AI: Anthropic Claude API (claude-haiku-4-5-20251001)
- Storage: localStorage
- Deployment: Netlify (serverless functions)

## Project Structure

```
Journaly/
├── netlify.toml
├── index.js
├── package.json
├── .gitignore
├── netlify/
│   └── functions/
│       └── journal.js
└── public/
    ├── images/
    ├── index.html
    ├── dashboard.html
    ├── journal.html
    ├── style.css
    └── app.js
```

## Running Locally

```bash
git clone https://github.com/MorgasValencia/journaly.git
cd journaly
npm install
```

Create a `.env` file in the root:

```
ANTHROPIC_API_KEY=your_key_here
```

Then run:

```bash
npm start
```

Open `http://localhost:3000` in your browser.

## Deploying to Netlify

1. Push repo to GitHub
2. Import project on netlify.com
3. Build command: `npm install` — Publish directory: `public`
4. Add `ANTHROPIC_API_KEY` as an environment variable in the Netlify dashboard
5. Deploy

## Security Note

Passwords are stored in localStorage for demo purposes. A production version would use bcrypt for password hashing, JWT tokens for session management and a proper database.

## Author

Valencia
