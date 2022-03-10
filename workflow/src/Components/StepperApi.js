import React from "react";
import { useState,useEffect,useContext } from "react";
import {Stepper,Step,StepLabel, makeStyles} from "@material-ui/core";
import {Grid,Paper,Box,Container,CssBaseline,Button,Typography} from "@material-ui/core";

import AllComponent from "./Forms/AllComponent";
import AllComponent3 from "./Page3/AllComponent3";
import AllComponent4 from "./Page4/AllComponent4";
import AllComponent5 from "./Page5/AllComponent5";
import AllComponent6 from "./Page6/AllComponent6";
import AllComponent7 from "./Page7/AllComponent7";

import Service1 from "./services/Service1";
import {Context} from "./GlobalData/Store";


const useStyle = makeStyles(theme=>({
    
    rootClass : {
        '& .MuiPaper-root' : {
            background : 'rgba(25, 118, 210,0.25)',
        },
        '&.MuiButton-containedPrimary': {
            color: '#fff',
            backgroundColor: '#3f51b5'
        }
                
    },
    customTextField: {
        "& input::placeholder": {
          fontWeight : "bold"
        }
      }
}))

function getSteps() {
    return ["Step1", "Step2", "Step3", "Step4", "Step5", "Step6"];
  }

function getForms(step_no){
    switch(step_no){
        case 0:
            return(<AllComponent />);
        case 1:
            return(<AllComponent3 />); 
        case 2:
            return(<AllComponent4 />);       
        case 3:
            return(<AllComponent5 />);
        case 4:
            return(<><AllComponent6 /></>);
        case 5:
            return(<><AllComponent7 /></>);                 
        default:
            return "Defalut Case";        

    }
}

function StepperApi() {
    const classes = useStyle();
  const [activeStep, setActiveStep] = useState(0);
  const eachsteps = getSteps();

  const [state, setState] = useContext(Context);
  const id = state.id;
//   console.log("state id:"+state.id);

  const nextStep = (id) => {
    setActiveStep(activeStep + 1);
    Service1.updateData(state, id).then((res) => {});
  };

  const previousStep = () => {
    setActiveStep(activeStep - 1);
    Service1.updateData(state, id).then((res) => {});
  };

  useEffect(() => {
    Service1.getDataById(id)
      .then((res) => res.data)
      .then((res) => {
        setState((prev) => ({ ...prev, ...res }));
      });
  }, []);



  return (
    <>
      <Grid container direction="row" className={`${classes.rootClass} ${classes.customTextField}`}>
      <CssBaseline />
            <Container  component={Box} >
                    {/* paper ==> background: 'rgba(25, 118, 210,0.25)' */}
                <Paper component={Box} p={1} style={{marginLeft:"2%",marginRight:"2%"}}>
                    
                    {activeStep===6?(
                        <Typography>THANKS</Typography>
                    ):
                        <>  
                            <Stepper activeStep={activeStep}>
                                {
                                    eachsteps.map((step_name,index)=>{
                                        return(
                                            <Step key={index}>
                                                <StepLabel>{step_name}</StepLabel>
                                            </Step>
                                        )
                                    })
                                }
                            </Stepper>
                            <form>
                                {getForms(activeStep)}
                            </form>
                            <Button className={classes.rootClass}  style={{borderRadius:'4px',padding: '6px 16px',minWidth: '80px',fontWeight: '500',marginRight:'2%',marginTop:'1%'}} variant="contained" color="primary" disabled={activeStep===0} onClick={previousStep}>BACK</Button>
                            <Button className={classes.rootClass}  style={{borderRadius:'4px',padding: '6px 16px',minWidth: '80px',fontWeight: '500',marginTop:'1%'}} variant="contained" color="primary" onClick={() => nextStep(id)}>
                                {activeStep===5 ? "FINISH" : "NEXT"}
                            </Button>
                        </>
                    }
                </Paper>
            </Container>   
      </Grid>
    </>
  );
}
export default StepperApi;
