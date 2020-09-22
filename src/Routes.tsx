import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
// import { Container } from './styles';
import Home from './Pages/Home'

const Routes: React.FC = () => {
  return (
    <Router>
        <Switch>
            <Route path="/" component={Home}></Route>
        </Switch>
    </Router>
    
    );
}

export default Routes;