import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import exportStorage from './redux/store';
import router from './router/router';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ exportStorage.store }>
      <PersistGate loading={ null } persistor={ exportStorage.persistor }>
        <RouterProvider router={ router } />
      </PersistGate>
    </Provider>
  </React.StrictMode> 
);

reportWebVitals();
