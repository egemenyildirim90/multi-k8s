import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import OtherPage from './OtherPage';
import Fib from './Fib';
import './App.css'; // Yeni stil dosyasını ekledik

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Fibonacci Calculator</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/otherpage">Other Page</Nav.Link>
          </Nav>
        </Navbar>

        <div className="content-container"> {/* Yeni bir div ekledik */}
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
