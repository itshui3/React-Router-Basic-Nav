import React from 'react';
import styled from 'styled-components';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';

const SContainer = styled(Container)`
  text-align: center;
`;

const AlignLeft = styled.div`
  text-align: left;
  padding: 20px;
`;

const Navigation = () => {
  return (
    <div>
      <SContainer>
        <h1>React Router Mini</h1>
        <AlignLeft>
          <div>
            <Link to='/'>Home</Link>
          </div>
          <div>
            <Link to='/about'>About</Link>
          </div>
          <div>
            <Link to='/contact'>Contact</Link>
          </div>

        </AlignLeft>

      </SContainer>
    </div>
  );
};

export default Navigation;
