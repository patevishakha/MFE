import { CssBaseline } from '@material-ui/core';
import React from 'react';
// import './App.css';
// import Store from "./Components/GlobalData/Store";
import { makeStyles } from '@material-ui/core/styles';
import { StylesProvider,createGenerateClassName } from '@material-ui/styles';
import Persistant from './Components/Persistant';
// import ReportingApp from './Components/MFEs/ReportingApp';
// import WorkflowApp from './Components/MFEs/WorkflowApp';

const useStyles = makeStyles(theme=>({
    toolbarMargin : {
        ...theme.mixins.toolbar
    },
 
  }))    

const generateClassName = createGenerateClassName({
  productionPrefix:'pf',
})  


function App() {
  const classes = useStyles();
  return (
    <div>
    <StylesProvider generateClassName={generateClassName}>
        <CssBaseline/>
        {/* <ReportingApp/>
        <WorkflowApp/> */}
        <Persistant/>
        <div  className={classes.toolbarMargin}/>
    </StylesProvider>    
    </div>
  );
}

export default App;
