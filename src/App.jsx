import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar'

export const App = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  )
}

  const Container = styled.div`
    background: #121214;
    height: 100vh;
    `;

export default App;