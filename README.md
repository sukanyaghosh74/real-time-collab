# Real-Time Collaborative Communication System

This project is a real-time collaborative drawing platform, inspired by Figma and Miro. It allows multiple users to work together on a shared canvas with live cursor tracking and WebSocket-based instant updates.

## Features

### Core Features
- **User Authentication**
  - Login/signup using email/password (or social auth in future updates).
- **Real-time Collaboration**
  - Users can join a shared workspace and see live updates.
  - Any changes (drawing, modifying shapes) instantly reflect for all participants.
- **Live Cursor Tracking**
  - Each user’s cursor is visible in real time.
  - Cursor movements are optimized for smooth experience.
- **Canvas Drawing**
  - Users can draw basic shapes (rectangles, circles, lines) on a shared canvas.
  - All modifications are synchronized across users.
- **WebSocket Integration**
  - WebSockets handle real-time communication for instant updates.
- **Anonymous User Participation** 
  - Users can join without an account but won’t have access to history.
- **Room-Based Collaboration**
  - Users can create/join rooms with a shareable code.
  - Each room is independent, enabling separate collaboration spaces.
- **No Socket.io Challenge**
  - Uses raw WebSockets (`ws`) instead of Socket.io for optimized performance.

---

## Tech Stack

### Frontend
- **React.js** (with Fabric.js for canvas handling)
- **React Router** (for navigation)
- **WebSockets** (native API for real-time updates)
- **Zustand/Recoil** (for lightweight state management)

### Backend
- **Node.js** (Express server)
- **WebSockets (`ws`)** (for real-time communication)
- **PostgreSQL/Firebase** (for user authentication and persistent data storage)

---

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/real-time-collab.git
cd real-time-collab
```

### 2. Set Up the Backend
```sh
cd backend
npm install
node server.js
```
- Runs the WebSocket server on **port 4000**.
- Handles rooms, broadcasting updates, and WebSocket connections.

### 3. Set Up the Frontend
```sh
cd ../frontend
npm install
npm start
```
- Runs the React application on **port 3000**.
- Connects to the WebSocket server for real-time updates.

---

## Project Structure
```
real-time-collab/
│── backend/
│   ├── server.js       # WebSocket server
│   ├── package.json    # Backend dependencies
│   ├── rooms.js        # Room management logic
│── frontend/
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── Canvas.js       # Canvas component
│   │   │   ├── Cursor.js       # Cursor tracking
│   │   │   ├── Toolbar.js      # Drawing tools
│   │   ├── pages/
│   │   │   ├── Home.js         # Main page
│   │   │   ├── Room.js         # Room page
│   │   ├── App.js              # Main app entry
│   ├── package.json            # Frontend dependencies
│   ├── index.js                # React entry point
│── README.md
```

---

## How to Use

### Creating a Room
1. Open `http://localhost:3000`.
2. Click "Create Room".
3. Share the generated room code with others.

### Joining a Room
1. Enter an existing room code.
2. Click "Join Room" to start collaborating.

### Drawing on the Canvas
- Use the toolbar to select shapes and draw.
- Drawings instantly sync across all users in the same room.

### Live Cursor Tracking
- Each user's cursor is visible in real-time.
- Cursor movement updates are optimized to prevent lag.

---

## Deployment (Optional)

### Deploying Backend
- Use **Heroku**, **Railway**, or **Vercel** for Node.js hosting.
- Example (Heroku):
```sh
git push heroku main
```

### Deploying Frontend
- Use **Vercel** or **Netlify** for React hosting.
- Example (Vercel):
```sh
npm install -g vercel
vercel
```

---

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to your fork and submit a pull request.

---

## License
This project is licensed under the **MIT License**. Feel free to use and modify as needed!

---

## Contact
For any issues or contributions, open an issue on GitHub or reach out via email: **your-email@example.com**

