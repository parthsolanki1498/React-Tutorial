import React from 'react';
import ReacDom from 'react-dom/client';
import App from './App'

const el = document.getElementById('root');
const root = ReacDom.createRoot(el);

root.render(<App/>);