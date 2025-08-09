// Точка входа приложения.
// Рендерит корневой React-компонент (<App />), обернутый в маршрутизатор (<BrowserRouter>).
// Запускает сбор метрик производительности (reportWebVitals).

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();