import {createTheme} from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false;
        sm: true;
        md: true;
        lg: true;
        xl: true;
    }
}

const breakpointsTheme = createTheme({
    breakpoints: {
        values: {
            sm: 0,
            md: 744,
            lg: 1024,
            xl: 1200,
        }
    }
})

export const theme = createTheme( {
    breakpoints: {
        values: {
            sm: 0,
            md: 744,
            lg: 1024,
            xl: 1200,
        }
    },
    typography: {
        h1: {
            fontFamily: 'Josefin Sans',
            fontSize: '60px',
            fontWeight: '500',
            color: '#2C1F9C',
            [breakpointsTheme.breakpoints.down('lg')]: {
                fontSize: '50px',
            },
        },
        h2: {
            fontFamily: 'Josefin Sans',
            fontSize: '48px',
            fontWeight: '400',
            color: '#2C1F9C',
        },
        h3: {
            fontFamily: 'Josefin Sans',
            fontSize: '36px',
            fontWeight: '400',
            color: '#2C1F9C',
        },
        h4: {
            fontFamily: 'Work Sans',
            fontSize: '16px',
            fontWeight: '700',
            color: '#374151',
        },
        h5: {
            fontFamily: 'Josefin Sans',
            fontSize: '18px',
            fontWeight: '400',
            color: '#2C1F9C',
        },
        subtitle1: {
            fontFamily: 'Work Sans',
            fontSize: '16px',
            fontWeight: '400',
            color: '#374151'
        },
        body1: {
            fontFamily: 'Work Sans',
            fontSize: '16px',
            fontWeight: '400',
            color: '#737373'
        },
        body2: {
            fontFamily: 'Work Sans',
            fontSize: '18px',
            fontWeight: '400',
            color: '#111827',
            [breakpointsTheme.breakpoints.down('md')]: {
                fontSize: '12px',
            },
        },
        button: {
            fontFamily: 'Work Sans',
            fontWeight: '400',
            fontSize: '16px',
        }
    },
    palette: {
        primary: {
            main: '#2C1F9C'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    color: 'black',
                    borderRadius: '0px',
                    ':focus': {
                        outline: 'black solid 2px',
                        outlineOffset: '3px',
                        borderRadius: '2px',
                    }
                },
                contained: {
                    color: 'white',
                }
            }
        },
        MuiCard: {
            defaultProps: {
                variant: 'outlined',
            },
            styleOverrides: {
                root: {
                    borderRadius: '2px'
                }
            }
        }
    }
})

export const greyBackgroundColor = '#FAFCFF'
export const primaryColor = '#2C1F9C'

export const footerTheme = createTheme(theme, {
    typography: {
        body1: {
            color: 'white'
        },
        h5: {
            color: 'white'
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    borderRadius: '0px',
                    ':focus': {
                        outline: 'white solid 2px',
                        outlineOffset: '3px',
                        borderRadius: '2px',
                    }
                },
                contained: {
                    color: 'white',
                }
            }
        },
    }
})
