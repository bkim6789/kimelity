import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#525252',
            main:  '#272727',
            dark:  '#1b1b1b',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ffad33',
            main: '#ff9900',
            dark: '#b26b00',
            contrastText: '#fff',
        },
    },
});

const AppTheme = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default AppTheme;