import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Filter from "./pages/Filter";
import './App.css'
import Details from "./components/Details";
const App = () => {
  return (
    <div>
    <Router>
     
      <Switch>
         <Route path="/" component={Filter} exact/> 
       <Route path="/details/:id" component={Details} exact />
      </Switch>
      </Router>
    </div>
  );
};

export default App;
