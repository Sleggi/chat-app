import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from './reducer'
import { StateProvider } from './StateProvider'
import { ThemesProvider } from './ThemesProvider'


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <ThemesProvider>
        <App />
      </ThemesProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


