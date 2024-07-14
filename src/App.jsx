import PageNotFound from "components/PageNotFound";
import { Route, Switch, NavLink } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";

const App = () => (
  <>
    <div className="mx-4 flex space-x-2">
      <NavLink exact activeClassName="underline font-bold" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="underline font-bold" to="/product">
        Product
      </NavLink>
    </div>
    <Switch>
      <Route component={Home} path="/" />
      <Route component={Product} path="/product" />
      <Route component={PageNotFound} path="*" />
    </Switch>
  </>
);

export default App;
