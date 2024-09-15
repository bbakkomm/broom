import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './assets/scss/common.scss';
import './assets/scss/index.scss';
import './assets/scss/navbar.scss';
import customFetch from './utils/customFetch.js';

const resp = await customFetch.get('/test');
console.log(resp);
// fetch('/api/v1/test')
//   .then((res) => res.json())
//   .then((data) => console.log(data));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
