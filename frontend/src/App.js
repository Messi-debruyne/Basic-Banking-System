import './App.css';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import Home from './components/Home';
import User from './components/User';
import Transfer from './components/Transfer';
import Transactions from './components/Transactions';

function App() {
  return (
    <Router>
      <Switch>

      <Route path='/user'>
          <User />
        </Route>
        
        <Route path='/transaction'>
          <Transactions />
        </Route>

        <Route path='/transfer'>
          <Transfer />
        </Route>
        
        <Route path='/'>
          <Home />
        </Route>



      </Switch>
    </Router>
  );
}

export default App;
