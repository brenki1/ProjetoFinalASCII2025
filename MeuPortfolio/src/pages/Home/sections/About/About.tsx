import { Container, Grid2, styled, Typography } from "@mui/material";

function About() {

    const StyledAbout = styled("div")(() => ({
        backgroundColor: "white",
        display: "flex"
        
    }))

    


    return (
      <>
        <StyledAbout>
            <Container sx={{maxWidth:"lg"}}>
                <Typography id="about"color="black" variant="h2" textAlign="center" fontFamily={"monospace"} pb={4} pt={5}>sobre mim</Typography>
                  <Grid2 size={{xs:12, md:8}} sx={{display:"flex", justifyContent:"center"}}>
                      <Typography variant="h6" pb={10}>Meu nome completo é Osvaldo Pagioli de Lollo Silva, tenho 20 anos, e iniciei meu curso de Bacharelado em Ciência da Computação em 2023, mais especificamente no semestre 2022-2, na Universidade Federal de Uberlândia. Desde pequeno, sempre tive interesse em computadores, e aquela curiosidade de saber como eles funcionam por baixo dos panos, então, em certo ponto, decidi que dedicaria a minha vida acadêmica à esse mundo vasto e abrangente que é a Computação. Ademais, é claro que dentro desse meio tecnológico, eu tenho as minhas áreas de interesse, são elas: Cibersegurança, Sistemas Operacionais, Data Science, Algoritmos (análise, resolução de problemas), e também um pouquinho de Machine Learning. Além disso, no meu tempo livre gosto de andar de skate e jogar video games.</Typography>
              
                  </Grid2>
            </Container>
        </StyledAbout>
        
      </>
    )
  }
  
  export default About