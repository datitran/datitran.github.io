import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/base.scss';
import './styles/dark-hover-overrides.scss';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
