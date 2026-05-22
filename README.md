# Petora — Pet Adoption Platform

> Connecting loving homes with pets in need — a full-stack pet adoption portal built with the MERN stack.

---

## 🌐 Live URL

🔗 [https://petora-client.vercel.app/]

---

## Purpose

Petora is a full-stack Pet Adoption Platform that allows users to explore pets available for adoption — including dogs, cats, birds, rabbits, and more. Users can view detailed pet profiles, submit adoption requests, and manage their listings and requests through a personalized dashboard. Shelters and pet owners can list pets, handle incoming adoption requests, and update pet information — all through a secure, authenticated system.

---

## Features

- 🔐 **Secure Authentication** — Email/password Sign Up & Sign In plus Google OAuth, powered by BetterAuth with JWT and JWK-based token verification
- 🐶 **Browse & Search Pets** — Explore all available pets with real-time search and filter by species, age, and location
- 📋 **Adoption Request System** — Submit adoption requests on pet profiles and track their status (Pending / Approved / Rejected) from your dashboard
- 🏠 **User Dashboard** — Manage your listed pets (Add, Edit, Delete) and monitor all submitted adoption requests in one place
- 🌗 **Dark / Light Mode** — Full theme toggle with persistent preference across sessions
- 🎞️ **Smooth UI & Animations** — Lenis smooth scrolling and Framer Motion animations for a polished, modern user experience
- 📱 **Fully Responsive Design** — Optimized layout across mobile, tablet, and desktop using Tailwind CSS and HeroUI

---

## NPM Packages Used

### Frontend (`/client`)

| Package               | Purpose                                         |
| --------------------- | ----------------------------------------------- |
| `next`                | React framework with App Router and SSR         |
| `react` / `react-dom` | Core UI library                                 |
| `tailwindcss`         | Utility-first CSS styling                       |
| `@heroui/react`       | UI component library                            |
| `framer-motion`       | Animations and transitions                      |
| `better-auth`         | Authentication (Sign Up, Sign In, Google OAuth) |
| `axios`               | HTTP client for API requests                    |

### Backend (`/server`)

| Package        | Purpose                               |
| -------------- | ------------------------------------- |
| `express`      | Node.js web framework                 |
| `mongoose`     | MongoDB object modeling               |
| `dotenv`       | Environment variable management       |
| `cors`         | Cross-origin resource sharing         |
| `jsonwebtoken` | JWT token generation and verification |
| `jose`         | JWK-based token verification          |
| `better-auth`  | Auth session and token management     |

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB URI (Atlas or local)
- Google OAuth credentials

### Installation

```bash
# Clone the repository
git clone https://github.com/nahin113/Petora-A-Full-Stack-Pet-Adoption-Platform.git

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### Environment Variables

**Frontend `.env.local`**

```env
NEXT_PUBLIC_API_URL=https://petora-server.vercel.app/
BETTER_AUTH_SECRET= your_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

**Backend `.env`**

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### Run Locally

```bash
# Start backend
cd server
npm run dev

# Start frontend
cd client
npm run dev
```

---

## 🔗 API Endpoints

| Method   | Endpoint                | Description                         |
| -------- | ----------------------- | ----------------------------------- |
| `GET`    | `/api/pets`             | Get all pets (with search & filter) |
| `GET`    | `/api/pets?email=`      | Get pets by owner email             |
| `GET`    | `/api/pets/:id`         | Get single pet by ID                |
| `POST`   | `/api/pets`             | Add a new pet listing               |
| `PATCH`  | `/api/pets/:id`         | Update pet details                  |
| `DELETE` | `/api/pets/:id`         | Delete a pet listing                |
| `POST`   | `/api/adoptions`        | Submit adoption request             |
| `GET`    | `/api/adoptions?email=` | Get requests by user email          |
| `PATCH`  | `/api/adoptions/:id`    | Update request status               |
| `DELETE` | `/api/adoptions/:id`    | Cancel adoption request             |

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@your-username](https://github.com/nahin113)
- LinkedIn: [your-linkedin](https://www.linkedin.com/in/nahin-ahmed-bd/)

---
