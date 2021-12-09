import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import HomeV2 from './HomeV2';
import WhitePaper from './WhitePaper';
import TermsOfService from './TermsOfService';


const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/test">
            <HomeV2 />
          </Route>
          <Route path="/white_paper">
            <WhitePaper />
          </Route>
          <Route path="/smart_contract">
          </Route>
          <Route path="/tos">
            <TermsOfService />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
