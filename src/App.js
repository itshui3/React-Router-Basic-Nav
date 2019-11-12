import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Route} from 'react-router-dom';
import {Jumbotron, Container} from 'reactstrap';
import './App.css';
import { Home, About, Contact, Navigation, Topics } from './components';
import { Data } from './data/Data';


const SContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SJumbotron = styled(Jumbotron)`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  margin: 0px;
`

const App = () => {

  const [data] = useState(Data);

  console.log(data);

return (
  <>
    <SContainer>

      <Navigation />

    </SContainer>

    <SJumbotron>
      <Route exact path='/' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/contact' component={Contact}></Route>
      <Route path='/topics' render={(props) => <Topics {...props} topics={data} />}></Route>
    </SJumbotron>
  </>
)};

export default App;
