import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export const render = (path, lang) => renderToString(<App path={path} lang={lang} />);
