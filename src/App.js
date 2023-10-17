import React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { Box } from '@mui/material'

const StyledBox = styled(Box)`
  heiht: 100%;
  width: 100%;
  background-color: #f5c1eb;
`;

function App() {
  return (
      <StyledBox>
        <Button 
          variant="contained"
          color="primary"
        >
        Click Me
        </Button>
      </StyledBox>
  );
}

export default App;
