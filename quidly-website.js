import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Serve static assets
app.use(express.static(path.join(__dirname, 'dist')));

// 2. SPA fallback — IMPORTANT
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`quidly-website running on port ${PORT}`);
});




// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import dotenv from 'dotenv';

// // Load .env file
// dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// // Now you can use process.env
// const PORT = process.env.PORT || 3000;
// const BASE_URL = process.env.APP_BASE_URL || 'http://localhost:3000';

// app.use(express.static(path.join(__dirname, 'dist')));

// app.get((req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// app.listen(PORT, () => {
//     console.log(`quidly-collections running on port ${PORT}`);
//     console.log(`Base URL: ${BASE_URL}`);
// });