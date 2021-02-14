import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';

import Player from './components/Player';
import useDarkMode from './hooks/useDarkTheme';
import DarkModeToggle from 'react-dark-mode-toggle';

function App() {
  const { theme, isDarkModeActive, switchTheme } = useDarkMode(false);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container pt={2}>
          <Grid container alignItems="center" justify="center">
            <Hidden xsDown>
              <Grid item lg={4} />
            </Hidden>
            <Grid item lg={4} xs={12}>
              <Box pt={2}>
                <DarkModeToggle
                  onChange={switchTheme}
                  checked={isDarkModeActive}
                  size={50}
                  speed={1.5}
                />
              </Box>

              <Player />
            </Grid>
            <Hidden xsDown>
              <Grid item lg={4} />
            </Hidden>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
