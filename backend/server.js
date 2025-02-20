// backend/server.js
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/main.jsx'; // Import the App component

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Server-side rendering
app.get('*', async (req, res) => {
    // Example: Fetch data from a database or external service
    const data = await fetchData();
  
    const appString = ReactDOMServer.renderToString(<App data={data} />);
  
    const html = `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="/vite.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>KofeeHub</title>
        </head>
        <body>
          <div id="root">${appString}</div>
          <script type="module" src="/src/main.jsx"></script>
        </body>
      </html>
    `;
  
    res.send(html);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});