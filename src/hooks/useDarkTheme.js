import { useState, useCallback } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

const DARK_PALLET = 'dark';
const LIGHT_PALLET = 'light';

const useDarkMode = (isDarkTheme) => {
  const [isDarkModeActive, setDarkState] = useState(isDarkTheme);
  const palletType = isDarkModeActive ? DARK_PALLET : LIGHT_PALLET;

  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main:  isDarkModeActive ? colors.lightBlue[50] : colors.lightBlue[500],
        background: isDarkModeActive ? colors.grey[800] : colors.grey[200]
      },
      secondary: {
        main: colors.red[400],
        background: isDarkModeActive ? colors.grey[600] : colors.grey[100]
      }
    },
    typography: {
      fontFamily: 'Segoe UI Emoji',
    },
  });

  const switchTheme = useCallback(() => {
    setDarkState((state) => !state);
  }, [setDarkState]);

  return { theme, isDarkModeActive, switchTheme };
};

export default useDarkMode;
