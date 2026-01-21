import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from dist
app.use(express.static(join(__dirname, 'dist')));

// Define all routes
const routes = [
  '/',
  '/about',
  '/faculty',
  '/programs',
  '/ethics',
  '/news',
  '/services',
  '/resources',
  '/student-portal',
  '/contact',
  '/research',
  '/publications',
  '/faq',
  '/careers',
  '/research-collaboration',
  '/partnerships',
  '/gallery',
  '/privacy',
  '/terms',
  '/code-of-conduct',
  '/program/digital-transformation',
  '/program/applied-data-ethics',
  '/program/advanced-research-methodology',
  '/program/institutional-research-leadership',
  '/research-areas',
  '/academic-integrity',
  '/member-portal',
];

// Serve index.html for all defined routes
routes.forEach(route => {
  app.get(route, (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
  });
});

// Catch all other routes and return 404
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
