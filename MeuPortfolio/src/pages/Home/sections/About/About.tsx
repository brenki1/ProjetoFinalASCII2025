import { Container, styled, Typography } from "@mui/material";
import theme from "../../../../theme";
import { Style } from "@mui/icons-material";


function About() {

    const StyledAbout = styled("div")(({theme}) => ({
        backgroundColor: "white"
        
    }))

    


    return (
      <>
        <StyledAbout>
            <Container sx={{maxWidth:"lg"}}>
                <Typography color="black" variant="h2" textAlign="center" fontFamily={"monospace"}>sobre mim</Typography>
            </Container>
        </StyledAbout>
        
      </>
    )
  }
  
  export default About