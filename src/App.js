import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Team from "./Team";
import Mint from "./Mint";
import NewMint from "./mint-page/App";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/mint">
            <NewMint />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
