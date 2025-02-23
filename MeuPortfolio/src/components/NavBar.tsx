import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

function NavBar() {

    const StyledBar = styled(Toolbar)(({theme})=> ({
        display: "flex",
        justifyContent: "space-evenly"
    }))


    return (
      <>
            <AppBar position="relative">
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