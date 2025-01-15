const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Sample Data
const fs = require('fs');
const path = require('path');

// Load data from database.json
const databasePath = path.join(__dirname, '../database/database.json');
const database = JSON.parse(fs.readFileSync(databasePath, 'utf8'));
const products = database.products;

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the E-Commerce Starter Kit API!');
});

app.get('/products', (req, res) => {
    res.json(products);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
