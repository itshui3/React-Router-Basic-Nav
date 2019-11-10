import React from 'react';
import {Route} from 'react-router-dom';
import {Jumbotron} from 'reactstrap';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <>
    <div>
      <Navigation />
    </div>
    <Jumbotron>
      <Route exact path='/' render={
        () => {
          return (<h1>Home</h1>);
        }
      }></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/contact' component={Contact}></Route>
    </Jumbotron>
  </>
);

export default App;
