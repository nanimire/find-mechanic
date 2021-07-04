import Navbar from './components/nav-bar/nav-bar';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return ( 
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;