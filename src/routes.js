import React from "react";
import Pedidos from "./Container/Pedidos";
import Home from "./Container/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/pedidos"} component={Pedidos} />
      </Switch>
    </Router>
  );
}
