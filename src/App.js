import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Mint from "./Mint";
import LineageViewer from "./LineageViewer";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/lineage-viewer">
            <LineageViewer />
          </Route>
          <Route path="/mint">
            <Mint />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
