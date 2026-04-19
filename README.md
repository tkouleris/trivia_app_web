# Trivia Web App

A modern, responsive trivia game built with React and Vite. This application allows users to register, log in, and challenge themselves with various trivia questions fetched from a backend API.

## 🚀 Features

- **User Authentication**: Secure registration and login system.
- **Dashboard**: Track your stats and progress.
- **Game Board**: Interactive trivia gameplay with multiple categories.
- **Responsive Design**: Built with Bootstrap for a seamless experience on all devices.
- **Real-time Results**: Instant feedback on your trivia performance.

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Bootstrap & React-Bootstrap
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **State Persistence**: localforage

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- A running instance of the [Trivia API](https://github.com/tkouleris/trivia_api)

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/tkouleris/trivia_app_web.git
   cd trivia_app_web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure the application**
   Copy the example configuration file and fill in your API endpoints:
   ```bash
   cp config.example.jsx config.jsx
   ```
   Open `config.jsx` and provide the full URLs for your backend API:
   ```javascript
   export const login_info = { url: 'http://your-api.com/api/login', method: 'post'};
   export const stats_info = { url: 'http://your-api.com/api/stats', method: 'get'};
   export const register_info = { url: 'http://your-api.com/api/register', method: 'post'};
   export const trivia_info = { url: 'http://your-api.com/api/questions', method: 'get'};
   export const confirm_results = { url: 'http://your-api.com/api/results', method: 'post'};
   export const refresh_token = { url: 'http://your-api.com/api/refresh', method: 'post'};
   ```

## 🏃 Usage

### Development Mode
To start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### Production Build
To create an optimized production build:
```bash
npm run build
```
The production-ready files will be generated in the `dist` folder.

### Preview Production Build
To preview the production build locally:
```bash
npm run preview
```

## 🌐 Deployment

You can host the contents of the `dist` folder on any web server (Nginx, Apache, Vercel, Netlify, etc.). 

For a detailed guide on deploying a React application with Nginx on Ubuntu, refer to this [DigitalOcean Tutorial](https://www.digitalocean.com/community/tutorials/deploy-react-application-with-nginx-on-ubuntu).

## 🔗 Related Projects

- **Backend API**: [trivia_api](https://github.com/tkouleris/trivia_api)
- **Mobile Version**: [trivia_app_mobile](https://github.com/tkouleris/trivia_app_mobile)
- **Web Version**: [trivia_app_web](https://github.com/tkouleris/trivia_app_web)

---
Developed by [tkouleris](https://github.com/tkouleris)

