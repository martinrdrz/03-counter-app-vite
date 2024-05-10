import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HelloWorldApp } from './HelloWorldApp';
//import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <CounterApp value={10} /> */}
        <FirstApp title="Hola Mundo" subTitle="subtitulo" name="Martin" />
    </React.StrictMode>
);
