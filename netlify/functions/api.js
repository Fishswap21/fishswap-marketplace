const serverless = require('serverless-http');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'FishSwap API is running',
    timestamp: new Date().toISOString(),
    environment: 'production'
  });
});

app.get('/api/listings', (req, res) => {
  res.json([
    {
      id: 1,
      title: "Beautiful Betta Fish",
      price: 25.99,
      category: "Freshwater Fish",
      seller: "AquaExpert"
    },
    {
      id: 2,
      title: "Live Aquarium Plants Pack",
      price: 15.99,
      category: "Plants",
      seller: "PlantMaster"
    }
  ]);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports.handler = serverless(app);
