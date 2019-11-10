import React from 'react';
import styled from 'styled-components';
import {Route} from 'react-router-dom';
import {Jumbotron, Container} from 'reactstrap';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const SContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AlignLeft = styled.div`
  text-align: left;
`;

const SJumbotron = styled(Jumbotron)`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  margin: 0px;
`

const App = () => (
  <>
    <SContainer>

        <Navigation />

    </SContainer>

    <SJumbotron>
      <Route exact path='/' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/contact' component={Contact}></Route>
    </SJumbotron>
  </>
);

export default App;
