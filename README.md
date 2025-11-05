# AI-Powered Diet Advisor

This repository is a scaffold for an end-to-end AI-powered diet advisor application:
- Frontend: React (Vite) + TailwindCSS
- Backend: Node.js + Express
- Database: MySQL (via Docker)
- AI: Server-side integration point for OpenAI or custom ML models to generate meal plans

## What's included
- `frontend/` — React app with pages matching the provided UI (Home, Profile, Calendar).
- `backend/` — Express API with routes for auth, users, meals, and AI suggestions.
- `docker-compose.yml` — brings up `backend` and `mysql` services.
- `migrations/` — SQL to create database tables.
- `.env.example` — example environment variables.

## How to run (development)
1. Copy `.env.example` to `.env` and set values.
2. Start with Docker Compose:
```bash
docker-compose up --build
```
3. Frontend dev mode:
```bash
cd frontend
npm install
npm run dev
```

## Notes
- Replace `OPENAI_API_KEY` in `.env` with your key if using OpenAI.
- Backend includes AI placeholder route `/api/ai/meal-plan` — implement calls to your model here.
