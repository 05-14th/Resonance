const express = require('express');
const path = require('path');

const app = express();

// Serve HTML files from the 'main' directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main', 'about.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main', 'contact.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main', 'location.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main', 'tour.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main', 'services.html'));
});




app.get('/verification', (req, res) => {
  res.sendFile(path.join(__dirname, 'main', 'verification.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'main', 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'main', 'register.html'));
});

// Serve static files (CSS and images)
app.use('/main', express.static(path.join(__dirname, 'main')));
app.use('/Images', express.static(path.join(__dirname, 'Images')));

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
