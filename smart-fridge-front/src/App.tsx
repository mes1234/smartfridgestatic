import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import  Welcome from "./components/MyFirstComponent";
import  Login from "./components/Login";
import  Generator  from "./components/MyStreamComponent";
import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Container fluid>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Witek</Link>
            </li>
            <li>
              <Link to="/about">Ania</Link>
            </li>
            <li>
              <Link to="/users">Artur</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/gen">Generator</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/auth">
          <Welcome name="Authme"></Welcome>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/users">
          <Welcome name="Ania"></Welcome>
          </Route>
          <Route path="/gen">
          <Generator name="gen"></Generator>
          </Route>
          <Route path="/">
          <Welcome name="Artur"></Welcome>
          </Route>
        </Switch>
      </div>
    </Router>
    </Container>
  );
}

export default App;
