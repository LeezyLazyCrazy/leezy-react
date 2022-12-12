import { createTheme, CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import { useAuth } from './stores/useAuth';
import useInstitutionTypesStore from './stores/useInstitutionTypeStore';
import useThemeStore from './stores/useThemeStore';
import { theme } from './styles/theme';
import { findInstitutionColor } from './styles/themeVariant';

function App() {
  const { isDark } = useThemeStore();

  const { authUser } = useAuth();
  console.log(authUser);
  const { institutionType } = useInstitutionTypesStore();

  return (
    <ThemeProvider theme={theme(isDark!)}>
      <ThemeProvider
        theme={(theme: Theme) =>
          createTheme({
            ...theme,
            palette: {
              ...theme.palette,
              ...findInstitutionColor(institutionType),
            },
          })
        }
      >
        <CssBaseline enableColorScheme />

        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
