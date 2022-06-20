
import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  palette: {
    
    primary: {
      main: '#ffffff', //white
      contrastText: '#FE0D13', //red
      accent: '#FDDD39', //yellow
      action: '#302B62',
     
    },
   
    secondary: {
      main: '#272727',
      over: '#80CBC4',
      contrastText: '#FE0D13',
      backgroundColor: '#A98DB8',
      hover: '#7E57C2'
      }
    },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        
      },
      styleOverrides: {
        root: {
          
          borderRadius: 10, // square corners
          textTransform: 'none', // removes uppercase transformatio
        },
        containedPrimary: {
          
          borderRadius: 10, // square corners
          textTransform: 'uppercase',
          }
        },
     
      }
    ,     
    MuiTextField: {
      styleOverrides: {
      root: {
        backgroundColor: '#A98DB8',
        borderRadius: 10,
     
        
        }, 
      
      }
    }, 
    MuiDialog: {
      styleOverrides: {
        root: {
          padding: 10,
        }, 
    
      container: {
       display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

        },
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
        
        },
        dividers: { //char dialog
          color: '#673BB7', 
        }
      }
    }, 
    MuiSelect: {
      styleOverrides: {
        select: {
        padding: 1,
        margin: 3,
        }, 
       
      }
    }, 
    
    MuiMenuItem: {
      styleOverrides: {
        root: {
          
        }
      }
    }, 
    MuiInputLabel: {
      defaultProps: {
        // shrink: true,
      },
    },
    MuiInputBase: {
      defaultProps: {
        disableUnderline: true,
        //autoFocus: true,
        
      },
      styleOverrides: {
        root: {
          padding: 1,
          margin: 1,
         
        }, 
        input: {
          padding: 1.5,
          paddingLeft: 2,
          margin: 1.5,
        }
      }
    }, 
    MuiOutlinedInput: {
      defaultProps: {
        disableUnderline: true,
        //autoFocus: true,
        
      },
      styleOverrides: {
        root: {
          paddingBottom: 0.2,
          paddingTop: 0.2,
         
        }, 
        input: {
          padding: 1.5,
          paddingLeft: 2,
          margin: 1.5,
         
        }
      }
    }, 
    MuiPaper: {
      styleOverrides: {
        elevation0: {
          display: 'flex',
          flexDirection: 'cloumn',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 0,
          marginTop: '2rem',
          padding: '3rem',

         
        }, 
    }
 
    
    },
  }
})


export default theme

