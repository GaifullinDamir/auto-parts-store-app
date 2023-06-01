import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import PartStore from './store/PartStore'
import BasketStore from './store/BasketStore';

export const Context = createContext(null);
console.log(process.env.REACT_APP_API_URL);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      part: new PartStore(),
      basket: new BasketStore()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

