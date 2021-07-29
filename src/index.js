import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ModalContextProvider } from './store/modal-context';
import { ListingContextProvider } from './store/listing-context';

ReactDOM.render(
  <React.StrictMode>
    <ModalContextProvider>
      <ListingContextProvider>
        <App />
      </ListingContextProvider>
    </ModalContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
