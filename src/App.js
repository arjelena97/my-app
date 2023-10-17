import styled from 'styled-components';
import { Box, Button } from '@mui/material';

const StyledBox = styled(Box)`
  background-color: #caeffc;
  height: 100%;
  display: grid;
  justify-content: center;
`;

const Heading = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const StyledText = styled.p`
  margin: 0 20px 20px 20px;
`;

const ButtonWrapper = styled(Box)`
  display: flex;
  justify-content: center;
`;

function App() {

const handleOnClick = () => {
  window.open('/FirstPage', '_self');
}

  return (
      <StyledBox>
        <Heading>WELCOME PAGE</Heading>
        <StyledText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</StyledText>
        <StyledText><strong>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</strong></StyledText>
        <ButtonWrapper>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOnClick}
          >
          WELCOME
          </Button>
        </ButtonWrapper>
        <Box display="flex" width="100%" sx={{ backgroundColor: 'white', justifyContent: 'center', marginTop: '20px' }}>
        <img 
          src="https://static.vecteezy.com/system/resources/previews/006/350/660/non_2x/lavender-horizontal-seamless-pattern-wallpaper-template-with-delicate-purple-flowers-lilac-buds-illustration-flower-road-vector.jpg" 
          alt='flowers'
          height={250}
        />
        </Box>
      </StyledBox>
  );
}

export default App;
