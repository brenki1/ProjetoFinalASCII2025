import { Container, Grid2, styled, Typography } from "@mui/material";
import theme from "../../../../theme";
import { Style } from "@mui/icons-material";


function About() {

    const StyledAbout = styled("div")(({theme}) => ({
        backgroundColor: "white",
        display: "flex"
        
    }))

    


    return (
      <>
        <StyledAbout>
            <Container sx={{maxWidth:"lg"}}>
                <Typography color="black" variant="h2" textAlign="center" fontFamily={"monospace"} pb={2}>sobre mim</Typography>
                  <Grid2 size={{xs:12, md:8}} sx={{display:"flex", justifyContent:"center"}}>
                      <Typography variant="h6">Meu nome completo é Osvaldo Pagioli de Lollo Silva, tenho 20 anos, e iniciei meu curso de Bacharelado em Ciência da Computação em 2023, mais especificamente no semestre 2022-2, na Universidade Federal de Uberlândia. Desde pequeno, sempre tive interesse em computadores, e aquela curiosidade de saber como eles funcionam por baixo dos panos, então, em certo ponto, decidi que dedicaria a minha vida acadêmica à esse mundo vasto e abrangente que é a Computação. Ademais, é claro que dentro desse meio tecnológico, eu tenho as minhas áreas de interesse, são elas: Cibersegurança, Análise de Malware, Engenharia Reversa, Sistemas Operacionais, Data Science, Algoritmos (análise, resolução de problemas), e também um pouquinho de Machine Learning.</Typography>
              
                  </Grid2>
            </Container>
        </StyledAbout>
        
      </>
    )
  }
  
  export default About