const express = require('express');
const path = require('path');

const app = express();
// Default port is 80 for live production, or 8080 if 80 is not allowed. 
// You can override this using process.env.PORT.
const PORT = process.env.PORT || 8080;

// Serve static assets directories natively
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Home Page routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Contact Page routes
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});
app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// 404 handler for anything else
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1><a href="/">Go back home</a>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`BLINKLVNG Web App Server is running!`);
    console.log(`Listening on port ${PORT}`);
});
