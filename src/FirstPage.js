import { Box } from "@mui/material";
import styled from "styled-components";

const StyledBox = styled(Box)`
  background-color: #f1e1fa; 
  height: 200px;
  width: 200px;  
`;

function FirstPage() {
  return (
    <StyledBox>LALA</StyledBox>
  );
}

export default FirstPage;