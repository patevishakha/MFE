import React from 'react';
// import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import Combine from './components/Report/Combine';


export default () => {
  return (
    <div style={{textAlign: 'center'}}>
      {/* <StylesProvider>
        
      </StylesProvider> */}
      <Combine/>
    </div>
  );
};
