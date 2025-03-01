import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"


function NavBar() {

    const StyledBar = styled(Toolbar)(({theme})=> ({
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: `${theme.palette.secondary.dark}`,
        color: `${theme.palette.primary.light}`
    }))


    return (
      <>
            <AppBar position="absolute">
                <StyledBar>
                    <MenuItem>Sobre</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projetos</MenuItem>
                    <MenuItem>Contato</MenuItem>
                </StyledBar>
            </AppBar>
      </>
    )
  }
  
  export default NavBar