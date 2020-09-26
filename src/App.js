import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Projects} from "./components";
import './App.css';
import Container from 'react-bootstrap/esm/Container';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Container fluid>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/projects" exact component={() => <Projects />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/github" component={() => {
              window.location.href = 'https://github.com/TylerDillon';
              return null;
            }}/>
            
          </Switch>
        </Container>
        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
