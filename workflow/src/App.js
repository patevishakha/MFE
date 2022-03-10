import { CssBaseline } from '@material-ui/core';
import Store from "./Components/GlobalData/Store";
import { makeStyles } from '@material-ui/core/styles';
import StepperApi from './Components/StepperApi';
import React from 'react';

const useStyles = makeStyles(theme=>({
    toolbarMargin : {
        ...theme.mixins.toolbar
    },
 
  }))    

function App() {
  const classes = useStyles();
  return (
    <Store>
    <div  style={{textAlign: 'center'}}>
        <CssBaseline/>
        <StepperApi />
    </div>
    </Store>
  );
}

export default App;
