# Journaly 🌙✨

> Your magical AI journaling companion — powered by Claude

Journaly is a gamified AI journaling app where users write daily entries and get warm, thoughtful responses from **Luna**, an AI companion built on Anthropic's Claude API. The more you journal, the more MindCoins you earn, the higher you level up. The aim of this app is to make journaling fun and interactive for users who want to enjoy the benefits of journaling but can't stay consistent.

---

## Features

- 🤖 **Luna AI Companion** — powered by Claude (Haiku), responds to journal entries in a conversational, human way. No bullet points, no stiff formatting, just real responses.
- 🪙 **MindCoins** — earn coins for every entry. Write more than 100 words and get a bonus.
- 🔥 **Streak Tracking** — journal daily to keep your streak alive and earn extra rewards.
- ⭐ **Level System** — progress from Seedling → Grower → Thriver → Flourisher → Master based on your streak.
- 🌗 **Day/Night Dynamic Background** — the canvas background shifts based on the time of day. Night gives you a twinkling starfield, sunset gives you a purple-orange gradient.
- 💜 **Luna Voice Bank** — Luna's messages change based on context. New user? Returning after a break? Already journaled today? She knows.
- 🗺️ **New User Tour** — first-time users get a guided onboarding walkthrough with Luna.
- 🔐 **Password Strength Validation** — requires minimum 8 characters, a number, and a special character.
- 💡 **Journal Prompts** — Luna serves 3 random prompts at the start of each session to help users get writing.

---

## Tech Stack

| Layer           | Technology                                         |
| --------------- | -------------------------------------------------- |
| Frontend        | HTML, CSS, Vanilla JavaScript                      |
| Backend         | Node.js, Express                                   |
| AI              | Anthropic Claude API (`claude-haiku-4-5-20251001`) |
| Auth & Storage  | localStorage (client-side)                         |
| Deployment      | Netlify (serverless functions)                     |
| Version Control | Git / GitHub                                       |

---

## Project Structure

```
Journaly/
├── netlify.toml                  # Netlify build config + redirect rules
├── index.js                      # Local Express server (development only)
├── package.json
├── .gitignore
│
├── netlify/
│   └── functions/
│       └── journal.js            # Serverless function (handles Claude API calls on Netlify)
│
└── public/
    ├── images/                   # Luna character poses
    │   ├── luna-wave.png
    │   ├── luna-think.png
    │   ├── luna-excited.png
    │   ├── luna-celebrate.png
    │   ├── luna_sad.png
    │   └── luna-regular.png
    ├── index.html                # Login / Signup page
    ├── dashboard.html            # User dashboard
    ├── journal.html              # Journal + chat interface
    ├── style.css                 # All styles
    └── app.js                    # Shared utilities (getUser, saveUser, getLevelInfo)
```

---

## Getting Started (Local Development)

### Prerequisites

- Node.js v18+
- An Anthropic API key — get one at [console.anthropic.com](https://console.anthropic.com)

### Setup

```bash
# Clone the repo
git clone https://github.com/MorgasValencia/journaly.git
cd journaly

# Install dependencies
npm install

# Create your .env file
echo "ANTHROPIC_API_KEY=your_key_here" > .env

# Start the server
npm start
```

Then open `http://localhost:3000` in your browser.

---

## Deployment (Netlify)

This app is configured to deploy on Netlify using serverless functions.

1. Push your repo to GitHub
2. Connect repo to Netlify via "Import from Git"
3. Build settings (auto-detected from `netlify.toml`):
   - Build command: `npm install`
   - Publish directory: `public`
4. Add environment variable in Netlify dashboard:
   ```
   ANTHROPIC_API_KEY = your_key_here
   ```
5. Deploy

The `netlify.toml` redirect rule maps `/journal` → `/.netlify/functions/journal` automatically, so no frontend code changes are needed between local and production.

---

## How Luna Works

Luna runs on a custom system prompt sent to Claude on every journal entry. Her behaviour is defined as:

- Conversational and flowing — responses read like a real person, not a chatbot
- Direct but kind — she validates without being fake about it
- No bullet points, no dashes, no filler phrases
- Contextually aware — her image and message change based on user state (new user, streak milestones, already journaled today, broken streak)

Luna's pose also changes dynamically in the chat based on the sentiment of her reply — celebrate pose for encouraging responses, sad pose for empathetic ones, think pose while processing.

---

## Security Note

This app uses `localStorage` for user authentication, which is appropriate for a demo/portfolio context. For a production app, the recommended approach would be:

- Password hashing with **bcrypt** on the backend
- Session management with **JWT tokens** or **httpOnly cookies**
- A proper database (e.g. PostgreSQL, MongoDB)

---

## Author

**Valencia**
