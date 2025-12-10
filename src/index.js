import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TarefasProvider } from './context/TarefasContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TarefasProvider>
    <App />
  </TarefasProvider>
);
