import logo from './logo.svg';
import './App.css';
import Product from './Products'
import Product2 from './Produts2'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
    <nav className="navbar">
          <ul className="navbar-nav mr-auto">
            <li >
              <Link to={'/list2'} className="nav-link" >
               List 2
              </Link>
              
            </li>
            </ul>
            </nav>

          <Switch>
            <Route exact path='/' component= {Product} />
            <Route exact path='/list2' component = {Product2}/>     
          </Switch>
          
        </div>
      </Router>
  );
}

export default App;
