// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import index from './index.css';

// Export the App component for server-side rendering
export default App;

// Render the app in the browser (client-side)
if (typeof document !== 'undefined') {
  ReactDOM.hydrate(<App />, document.getElementById('root'));
}