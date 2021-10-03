import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Products from "./components/Products/Products";
import ReviewOrder from "./components/ReviewOrder/ReviewOrder";
import img from "./images/logo.png";

function App() {
  return (
    <div>
      <Router>
        <div className="w-full text-center">
          <Link to="/">
            <img className="h-20 inline-block" src={img} alt="" />
          </Link>
        </div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/shop">
            <Products />
          </Route>
          <Route path="/review">
            <ReviewOrder />
          </Route>
          <Route path="/manage">
            <Inventory />
          </Route>
          <Route path="/place-order">
            <PlaceOrder />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
