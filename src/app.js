import { auth, db } from "./firebaseConfig.js";
import { signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { renderAttendanceLog } from "./attendance.js";
import { renderDashboard } from "./dashboard.js";

document.getElementById('login-button').addEventListener('click', async () => {
    const email = prompt('Email:');
    const password = prompt('Password:');
    if (email && password) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Logged in successfully!');
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    }
});

document.getElementById('logout-button').addEventListener('click', async () => {
    try {
        await signOut(auth);
        alert('Logged out successfully!');
    } catch (error) {
        alert('Logout failed: ' + error.message);
    }
});

// Mock data
const mockData = [
    {
        date: '2024-06-25',
        loginTime: '09:00',
        logoutTime: '17:30',
        totalHours: 8.5,
        status: 'Present'
    },
    // Add more mock data here
];

// Render initial data
renderAttendanceLog(mockData);
renderDashboard(mockData);
