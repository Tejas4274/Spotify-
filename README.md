🎧 Spotify Clone with Admin Panel

Overview
This project is a Spotify Clone built using the MERN (MongoDB, Express, React, Node.js) stack. It includes all core features of a music streaming app, such as creating playlists, music streaming, and an Admin Panel for managing users, songs, and playlists.

🚀 Key Features
Music Streaming: Seamless streaming with play, pause, and volume control.
Playlist Management: Create, edit, delete, and organize your playlists.
User Authentication: Secure user registration and login with JWT (JSON Web Token).
Admin Panel: Fully functional admin panel for managing users, songs, and playlists.
Responsive Design: Optimized UI for mobile and desktop users.

🌟 Tech Stack
Frontend: React.js, Context API for state management, Axios for API calls
Backend: Node.js, Express.js
Database: MongoDB for data storage
Authentication: JWT for secure authentication and authorization
Cloud Storage: (Optional) Use AWS S3 or Firebase for hosting media files

🛠️ Installation & Setup

1. Clone the repository
    1. git clone https://github.com/Tejas4274/spotify-clone.git
    2. cd spotify-clone

2. Install Dependencies
    For the server:
    1. cd server
    2. npm install

    For the client:
    1. cd client
    1. npm install

3. Set up Environment Variables
Create a .env file in the server directory with the following details:
    1. CLOUDINARY_NAME 
    2. CLOUDINARY_API
    3. CLOUDINARY_SECRET_KEY
    4. MONGO_URI=your_mongodb_connection_string
    5. JWT_SECRET=your_jwt_secret_key

4. Run the Application
    Backend:
    1. cd server
    2. npm start

    Frontend:
    1. cd client
    2. npm start


⚙️ Admin Panel
Admins can manage users, songs, and playlists from a secure panel.
To access the admin panel, navigate to /admin after logging in as an admin.

🛡️ Security Features
JWT Authentication: Ensures secure user sessions.
Password Hashing: User passwords are hashed using bcrypt.
Admin Authorization: Only authorized users can access the admin panel.

🚀 Future Improvements
Music Streaming Optimization: Use WebSockets for real-time playback sync.
Cloud Integration: Implement cloud storage (AWS S3 or Firebase) for storing songs.
Subscription Plans: Add premium features like ad-free streaming.

🤝 Contributions
Feel free to open issues and contribute to the project via pull requests. Let’s improve the Spotify Clone together!

📬 Contact
Reach out if you have any questions or want to collaborate!

Tejas Kamble
Email: tejaskamble4274@gmail.com