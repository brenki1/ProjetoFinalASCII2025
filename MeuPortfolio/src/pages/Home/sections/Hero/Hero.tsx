import { Button, Container, Grid2, styled, Typography } from "@mui/material"
import Imagem from "../../../../assets/images/avatar.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


//Parte inicial, primeira informação que o usuário vê ao abrir a página

//A ideia é fornecer informações chave sobre mim que instiguem o leitor a continuar lendo a página para saber mais

function Hero() {
    
    const StyledHero = styled("div")(()=> ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(()=> ({
        width: "100%",
        borderRadius: "5%"
    }))

    return (

      <>
        <StyledHero>
            <Container>
                <Grid2 container spacing={2}>

                    <Grid2 size={{xs:12, md: 4}}>
                        <StyledImg src={Imagem}/>
                    </Grid2>

                    <Grid2 size={{xs:12, md: 8}}>
                        <Typography color="primary" variant="h1" textAlign="center">Osvaldo Pagioli de Lollo Silva</Typography>
                        <Typography color="primary" variant="h2" textAlign="center">Graduando em Ciência da Computação - UFU</Typography>
                        <Grid2 container sx={{display:"flex", justifyContent:"center"}}>
                            <Grid2 size={{xs:4, md:2}} sx={{display:"flex", justifyContent:"center"}}>
                                 <Button>
                                    <GitHubIcon></GitHubIcon>
                                </Button>
                            </Grid2>

                            <Grid2 size={{xs:4, md:2}} sx={{display:"flex", justifyContent:"center"}}>
                                <Button>
                                    <LinkedInIcon></LinkedInIcon>
                                </Button>
                            </Grid2>
                            <Grid2 size={{xs:4, md:2}} sx={{display:"flex", justifyContent:"center"}}>
                            <Button>
                                    <MailOutlineIcon></MailOutlineIcon>
                                </Button>
                            </Grid2>
                        </Grid2>
                    </Grid2>

                </Grid2>
            </Container>

        
                
        </StyledHero>

      </>
    )
  }
  
  export default Hero