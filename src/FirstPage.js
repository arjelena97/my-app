import React from 'react';
import styled from 'styled-components';
import { Box, TextField, Button } from '@mui/material'

const StyledFormBox = styled(Box)`
  background-color: #f0e4f7;
  display: grid;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin-left: 25%;
  padding-bottom: 20px;
`;

const Heading = styled.h1`
// dopuni
`;

function FirstPage() {

  return (
    <StyledFormBox>
        <Heading>Let's introduce!</Heading>
        <TextField
          label="Name"
          variant="outlined"
          name="username"
          margin='normal'
        />
        {/* dodaj akcije */}
        <TextField
          label="Last Name"
          variant="outlined"
          name="last name"
          margin='normal'
        />
        <Button variant="contained" color="primary">
          Submit
        </Button>
        {/* povezi sa sledecom stranom */}
    </StyledFormBox>
  );
}

export default FirstPage;