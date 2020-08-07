import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import SignUp2 from './pages/Signup2';
import SignUp3 from './pages/Signup3';
import SignUp4 from './pages/Signup4';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <SignUp2 />
          </Route>
          <Route exact path="/signup2">
            <SignUp2 />
          </Route>
          <Route exact path="/signup3">
            <SignUp3 />
          </Route>
          <Route exact path="/signup4">
            <SignUp4 />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/blog" component={() => {
            window.location.href = 'https://medium.com/@dtrembois';
            return null;
          }} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
