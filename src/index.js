import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>
);

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );