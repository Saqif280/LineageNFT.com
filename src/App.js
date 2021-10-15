import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
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
