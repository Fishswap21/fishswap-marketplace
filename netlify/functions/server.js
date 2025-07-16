```javascript
const serverless = require('serverless-http');
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../../public')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'FishSwap API running successfully',
    timestamp: new Date().toISOString(),
    environment: 'production',
    deployment: 'netlify',
    version: '1.0.0'
  });
});

// Sample listings endpoint
app.get('/api/listings', (req, res) => {
  res.json([
    {
      id: 1,
      title: "Beautiful Betta Fish",
      price: 25.99,
      category: "Freshwater Fish",
      seller: "AquaExpert",
      rating: 4.8,
      location: "California, USA",
      description: "Healthy male betta with vibrant colors"
    },
    {
      id: 2,
      title: "Live Aquarium Plants Pack",
      price: 15.99,
      category: "Plants",
      seller: "PlantMaster",
      rating: 4.9,
      location: "Florida, USA",
      description: "5 species of easy-care aquarium plants"
    },
    {
      id: 3,
      title: "Premium Filter System",
      price: 89.99,
      category: "Equipment",
      seller: "TechAquarist",
      rating: 4.7,
      location: "Texas, USA",
      description: "High-efficiency canister filter for large tanks"
    }
  ]);
});

// Categories endpoint
app.get('/api/categories', (req, res) => {
  res.json([
    { id: 1, name: "Freshwater Fish", count: 45 },
    { id: 2, name: "Saltwater Fish", count: 32 },
    { id: 3, name: "Plants", count: 28 },
    { id: 4, name: "Equipment", count: 67 },
    { id: 5, name: "Accessories", count: 23 },
    { id: 6, name: "Food", count: 19 }
  ]);
});

// Catch-all for Single Page Application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Export as serverless function
module.exports.handler = serverless(app);
```
