import React from 'react'
import { CssBaseline, Container, Paper, Box, Typography } from "@material-ui/core";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import theme from '../../../../workflow/src/Components/Theme';
import {ThemeProvider} from '@material-ui/core/styles';
import { Col1 } from './Col1';
import { Col2 } from './Col2';
import { Col3 } from './Col3';


const useStyle = makeStyles(theme=>({
    backgroundColourClass:{
            backgroundColor: '#eee',
    },
    typographyClass: {
          fontWeight: 'bold'
      },
    rootClass : {

        '& .MuiFormControl-root' : {
        width:'90%',
        margin:theme.spacing(1)
        },

        '& .MuiTypography-root' : {
            width:'90%',
            }
        
    }
}))



function Combine() {
    const classes = useStyle();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component={Box} p={4}>
                <Paper component={Box} p={4}
                  style={{background: 'rgba(25, 118, 210,0.25)'}}
                // style={{background:'linear-gradient(200deg, #f0ecfc 20%, #c797eb 74%)'}}
                    // style ={{background:'#F9F9F8'}}

                >
                
               
            {/* <Box
                boxShadow={10}
                bgcolor="background.paper"
                // bgcolor="primary.light"
                //bgcolor={classes.backgroundCOlourClass}
                p={4}
                m={5}>   */}
                
                <form className={classes.rootClass}>
                    <Grid container>
                       
                        <Grid item lg={4} sm={6} xs={12} >
                        {/* <Typography className={`${classes.rootClass} ${classes.typographyClass}`} variant="h6" color="primary">Column 1</Typography> */}
                            <Col1/>
                        </Grid>

                        <Grid item lg={4} sm={6} xs={12} >
                        {/* <Typography className={`${classes.rootClass} ${classes.typographyClass}`} variant="h6" color="primary">Column 2</Typography> */}
                            <Col2/>
                        </Grid>

                        <Grid item lg={4} sm={6} xs={12} >
                        {/* <Typography className={`${classes.rootClass} ${classes.typographyClass}`} variant="h6" color="primary">Column 3</Typography> */}
                            <Col3/>
                        </Grid>

                        
                        
            
                    </Grid>
                </form>

                </Paper>
            </Container>    
            {/* </Box> */}

        </ThemeProvider>
    )
}

export default Combine;
