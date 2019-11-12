import React from 'react';
import styled from 'styled-components';
import {Container} from 'reactstrap';
import {NavLink} from 'react-router-dom';

import './components.css';

const SContainer = styled(Container)`
  text-align: center;
`;


const Navigation = () => {
  return (
    <div>
      <SContainer>
        <h1>React Router Mini</h1>

          <div>
            <NavLink exact activeClassName="bluefocus" to='/'>Home</NavLink>
          </div>
          <div>
            <NavLink activeClassName="greenfocus" to='/about'>About</NavLink>
          </div>
          <div>
            <NavLink activeClassName="redfocus" to='/contact'>Contact</NavLink>
          </div>
          <div>
            <NavLink activeClassName="redfocus" to='/topics'>Topics</NavLink>
          </div>


      </SContainer>
    </div>
  );
};

export default Navigation;

// fix navlink focus