import React from "react";
import { BrowserRouter as  Switch, Route }  from "react-router-dom";
import Anasayfa from "./components/Anasayfa";
import SiparisFormu from "./components/SiparisFormu";
import SiparisOnay from "./components/SiparisOnayı";

const App = () => {

  return (
      
        <Switch>

          <Route exact path="/">
            <Anasayfa />
          </Route>

          <Route path="/pizza">
            <SiparisFormu />
          </Route>

          <Route path="/success">
            <SiparisOnay />
          </Route>
          

        </Switch>
   
  );
};

export default App;
