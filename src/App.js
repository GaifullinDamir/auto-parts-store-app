import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import { check } from "./http/userAPI";
import AppRouter from "./components/AppRouter";
import StoreNavbar from "./components/StoreNavbar";


const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then(data => {
        if(data){
          user.setUser(true);
          user.setIsAuth(true);
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
