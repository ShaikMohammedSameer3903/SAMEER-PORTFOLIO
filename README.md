# Sameer Portfolio - Split Frontend (Vercel) and Backend (Render)

This repository is organized for separate deployments:

- `frontend/` – Vercel app (Vite static build). Reads API URL from `VITE_API_BASE_URL`.
- `backend/` – Render service (Node/Express). Reads SMTP and CORS from environment.

The portfolio includes:
- Contact form wired to your Render backend.
- Prominent Resume download button (expects `frontend/public/assets/resumea.pdf`).
- Project cards for BiteFlow and Shopping Website with color-coded tech tags and links.

## File Structure
```
root/
├─ backend/
│  ├─ server.js
│  ├─ package.json
│  ├─ .env.example
├─ frontend/
│  ├─ index.html
│  ├─ package.json
│  ├─ .env.example
│  ├─ public/
│  │  ├─ assets/
│  │  │  └─ resumea.pdf        # add this file (your resume)
│  │  └─ image/                # add images (sameer.jpg, biteflow.jpg, shopping.jpg, klu.jpg, srichaitanya.jpeg)
│  └─ src/
│     ├─ main.js
│     └─ app.html
├─ .gitignore
└─ README.md (this file)
```

## Configure Environments

### Backend (Render)
Set these variables in Render Dashboard → Environment:
- `PORT` – leave blank; Render injects this automatically (server uses it).
- `CORS_ORIGIN` – your Vercel domain and local dev, comma-separated, e.g. `https://your-vercel-app.vercel.app,http://localhost:5173`
- `SMTP_HOST` – `smtp.gmail.com`
- `SMTP_PORT` – `587`
- `SMTP_USER` – `shaiksameer3909sam@gmail.com`
- `SMTP_PASS` – your Gmail App Password (not your normal password)
- `TO_EMAIL` – where you want to receive contact emails (can be same as SMTP_USER)

Start command (Render): `node server.js`

### Frontend (Vercel)
Set in Vercel Project Settings → Environment Variables:
- `VITE_API_BASE_URL` – your Render URL, e.g. `https://your-backend.onrender.com`
- Optional:
  - `VITE_BITEFLOW_URL` – live URL for BiteFlow app
  - `VITE_SHOPPING_URL` – live URL for Shopping website

Framework preset: `Vite`
Build command: `npm run build`
Output directory: `dist`
Root directory: `frontend`

## Local Development

Backend:
```bash
cd backend
npm install
npm run dev   # or npm start
# server listens on PORT (default 3000 if not set)
```

Frontend:
```bash
cd frontend
npm install
cp public/assets/resumea.pdf ../../resumea.pdf 2>/dev/null || true  # ensure you have the PDF at public/assets
npm run dev
# open http://localhost:5173
# Ensure VITE_API_BASE_URL in frontend/.env points to your backend (e.g., http://localhost:3000)
```

## Notes
- Do not commit `.env` files. Use the provided `.env.example` templates to create your own.
- Gmail requires an App Password for SMTP when 2FA is enabled.
- The contact form uses a honeypot field and rate limiting on the backend.

## Updating Projects
- Update project card URLs in `frontend/src/main.js` via `VITE_BITEFLOW_URL` and `VITE_SHOPPING_URL` envs.
- Replace placeholder images in `frontend/public/image/` and ensure filenames used in `frontend/src/app.html` exist.

