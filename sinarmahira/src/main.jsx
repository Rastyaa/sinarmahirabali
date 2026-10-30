import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App, { routeFromLocation } from './App.jsx';
import './styles.css';

const root = document.getElementById('root');
const app = <App {...routeFromLocation(window.location.pathname)} />;
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
