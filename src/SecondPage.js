import { Box } from "@mui/material";
import styled from "styled-components";
import { palette } from "./utils/palette";

const StyledBox = styled(Box)`
  height: 100%;
  display: grid;
  justify-content: center;
`;

const StyledLink = styled.a`
  font-size: 20px;
  margin-left: 10px;
`;

function SecondPage() {

    return (
    <>
    <StyledBox backgroundColor={ palette.lightBlue }>
      <h1>Time to introduce myself!</h1>
    </StyledBox>
    <Box display="flex" width="100%" sx={{ backgroundColor: 'white', justifyContent: 'center', marginTop: '20px' }}>
    <img src="jelena.JPG" alt="jelena" height={300} />
    </Box>
    <StyledBox sx={{ marginTop: '20px' }} backgroundColor={ palette.lightBlue }>
      <h2>Want to check out my LinkedIn?</h2>
    </StyledBox>
    <Box display="flex" justifyContent="center" sx={{ marginTop: '20px' }}>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png"
        alt="LInLogo"
        height={25}
     />
     <StyledLink href="https://www.linkedin.com/in/arjelena97/">LinkedIn</StyledLink>
    </Box>
    </>
  )
}
  
export default SecondPage;