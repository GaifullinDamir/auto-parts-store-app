import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import { check, checkAdminRole } from "./http/userAPI";
import jwt_decode from 'jwt-decode';
import { fetchBasket } from "./http/basketAPI";
import AppRouter from "./components/AppRouter";
import StoreNavbar from "./components/StoreNavbar";


const App = observer(() => {
  const {user, basket} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then(data => {
        if(data){
          const uid = jwt_decode(data)._id;
          user.setId(uid);
          user.setUser(true);
          user.setIsAuth(true);
          user.setIsAdmin(checkAdminRole());

          if(!checkAdminRole()) {
            fetchBasket(uid).then(bsk => {
                console.log(bsk);
                basket.setId(bsk._id);
            });
          }
        }
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <Spinner animation={'grow'}/>;
  }
  return (
    <BrowserRouter>
      <StoreNavbar/>
      <AppRouter/>
    </BrowserRouter>
  );
});

export default App;
