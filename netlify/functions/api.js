const serverless = require('serverless-http');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'FishSwap API is running' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports.handler = serverless(app);
