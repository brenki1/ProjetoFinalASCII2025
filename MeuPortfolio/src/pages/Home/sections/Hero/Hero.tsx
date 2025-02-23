import { Button, Container, Grid2, styled, Typography } from "@mui/material"
import Imagem from "../../../../assets/images/avatar.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton";
import theme from "../../../../theme";


//Parte inicial, primeira informação que o usuário vê ao abrir a página

//A ideia é fornecer informações chave sobre mim que instiguem o leitor a continuar lendo a página para saber mais

function Hero() {
    
    const StyledHero = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.contrastText,
        height: "100vh",
        display: "flex",
        alignItems:"center"
    }))

    const StyledImg = styled("img")(()=> ({
        width: "70%",
        borderRadius: "2%",
        border:`2px solid ${theme.palette.secondary.dark}`
    }))

    return (

      <>
        <StyledHero>
            <Container sx={{maxWidth:"lg"}}>
                <Grid2 container spacing={2}>

                    <Grid2 size={{xs:12, md: 4}} sx={{display:"flex", justifyContent:"center"}}>
                        <StyledImg src={Imagem}/>
                    </Grid2>

                    <Grid2 size={{xs:12, md: 8}}>
                        <Typography color="primary" variant="h2" textAlign="center" pb={3}>Osvaldo Pagioli de Lollo Silva</Typography>
                        <Typography color="primary" variant="h3" textAlign="center" pb={3}>Graduando em Ciência da Computação - UFU</Typography>
                        <Grid2 container sx={{display:"flex", justifyContent:"center"}}>
                            <Grid2 size={{xs:4, md:2}} sx={{display:"flex", justifyContent:"center"}}>
                                <Button color="secondary">
                                    <GitHubIcon/>
                                </Button>

                            </Grid2>

                            <Grid2 size={{xs:4, md:2}} sx={{display:"flex", justifyContent:"center"}}>
                                <Button color="secondary">
                                    <LinkedInIcon></LinkedInIcon>
                                </Button>
                            </Grid2>
                            <Grid2 size={{xs:4, md:2}} sx={{display:"flex", justifyContent:"center"}}>
                            <Button color="secondary">
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