import React from 'react';
import { Container, Typography, IconButton, Grid2 } from '@mui/material';
import {LinkedIn, Email, GitHub } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#3f51b5', color: 'white', padding: '20px' }}>
      <Container>
        <Grid2 container spacing={2} justifyContent="space-between">
          {/* Informações do Copyright */}
          <Grid2 size={{xs:10, sm:4}}>
            <Typography variant="body2" align="left">
              © {new Date().getFullYear()} Osvaldo Pagioli. Todos os direitos reservados.
            </Typography>
          </Grid2>

          {/* Links de Navegação */}
          <Grid2 size={{xs:10, sm:4}} sx={{justifyContent:"flex-end"}}>
            <a href="#" color="inherit" style={{ marginRight: '15px' }}>
              Início
            </a>
            <a href="#about" color="inherit" style={{ marginRight: '15px' }}>
              About
            </a>
          </Grid2>

          {/* Ícones sociais */}
          <Grid2 size={{xs:12}} justifyContent="center" style={{ marginTop: '10px' }}>
            <IconButton color="inherit" href="https://github.com/brenki1" target="_blank" rel="noopener noreferrer">
              <GitHub />
            </IconButton>
            <IconButton color="inherit" href="mailto:osvaldo.lollo@ufu.br" target="_blank" rel="noopener noreferrer">
              <Email />
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com/in/osvaldo-pagioli-701a35353" target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </IconButton>
          </Grid2>
        </Grid2>
      </Container>
    </footer>
  );
};

export default Footer;