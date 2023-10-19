import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Box, TextField, Button } from '@mui/material';
import { palette } from './utils/palette';

const StyledFormBox = styled(Box)`
  display: grid;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin-left: 25%;
  padding-bottom: 20px;
`;

function FirstPage() {

  const [inputNameData, setInputNameData] = useState('');
  const [inputLastNameData, setInputLastNameData] = useState('');  
  const [inputEmailData, setInputEmailData] = useState('');  
  const [inputAboutData, setInputAboutData] = useState('');  
  
  const handleButtonClick = () => {
    window.open('/SecondPage', '_self');
  }
  
  return (
    <StyledFormBox backgroundColor={ palette.lightBlue }>
        <h1>Let's introduce!</h1>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          margin='normal'
          value={inputNameData}
          onChange={(e) => setInputNameData(e.target?.value)}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          name="last name"
          margin='normal'
          value={inputLastNameData}
          onChange={(e) => setInputLastNameData(e.target?.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          margin='normal'
          value={inputEmailData}
          onChange={(e) => setInputEmailData(e.target?.value)}
        />
        <TextField
          label="Something about yourself"
          variant="outlined"
          name="about"
          margin='normal'
          value={inputAboutData}
          onChange={(e) => setInputAboutData(e.target?.value)}
        />
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          Submit
        </Button>
    </StyledFormBox>
  );
}

export default FirstPage;