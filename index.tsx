import { createRoot } from 'react-dom/client';
import React from './node_modules/@types/react/ts5.0';
//import { Client as Styletron } from 'styletron-engine-atomic';
//import { Provider as StyletronProvider } from 'styletron-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root') as Element;
const root = createRoot(container);
//const styletronEngine = new Styletron();

root.render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
);