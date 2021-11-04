import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/dashboard"} component={Dashboard} />
        <Route exact path={"/login"} component={Login} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App;
