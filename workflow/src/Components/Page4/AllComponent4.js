import React from 'react'
import { CssBaseline, Container, Paper, Box, Typography } from "@material-ui/core";
import { Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import FormElement from '../Forms/FormElement';
import OperationInprogress from './OperationInprogress';

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



function AllComponent4() {
    const classes = useStyle();
    return (
        <>
            <CssBaseline />                
                <form className={classes.rootClass}>
                    <Grid container>
                       
                        <Grid item lg={6} md={6} sm={12} xs={12} >
                        <Typography style={{fontWeight: 'bold'}} className={`${classes.rootClass} ${classes.typographyClass}`} variant="h6" color="primary">Workflow Status</Typography>
                            <FormElement/>
                        </Grid>

                        
                        {/* <Grid item lg={6} sm={6} xs={12}>
                        <Typography className={`${classes.rootClass} ${classes.typographyClass}`} variant="h6" color="primary">Order Details</Typography>
                            <Element2/> 
                        </Grid> */}
        
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography style={{fontWeight: 'bold'}} className={`${classes.rootClass} ${classes.typographyClass}`} variant="h6" color="primary">Operation Inprogress</Typography>
                            <OperationInprogress/> 
                        </Grid>
                    </Grid>
                </form>
        </>
    )
}

export default AllComponent4;
