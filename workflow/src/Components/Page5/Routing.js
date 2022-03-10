import React ,{useContext} from 'react'
import {Checkbox,FormControlLabel,Grid,makeStyles,Radio,RadioGroup,TextField,} from "@material-ui/core";
import { useState } from 'react';
import { FormControl,InputLabel,Select,MenuItem,FormLabel} from '@material-ui/core';

import { Context } from "../GlobalData/Store";
import Service1 from "../services/Service1";

function AppIdandRouting() {
    const [state, setState] = useContext(Context);

    const handleInputValues = (event, values) => {
        const { name, value } = event.target;
        
        setState({
        ...state,
        [name]:value,
        });
        
        const id=state.id;
        Service1.updateData(state, id).then((res) => {});

    };

    return (

            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={4}>

                <FormControl component="fieldset">
                    <FormLabel style={{textAlign : 'left'}} component="legend">Create Routing Plan ?</FormLabel>
                        <RadioGroup
                            aria-label="Create Routing Plan ?"
                            name="isRoutingPlan"
                            value={state.isRoutingPlan || "No"}
                            onChange={handleInputValues}
                            row={true}
                            >
                                <FormControlLabel value="No"  control={<Radio color="primary" />} label="No" />
                                <FormControlLabel value="Yes" control={<Radio  color="primary"/>} label="Yes" />
                        </RadioGroup>
                </FormControl>        
                </Grid>

                <Grid item xs={12} md={8} lg={8}>
                <FormControl variant="outlined"  size="small" >
                <InputLabel id="select-page5-1">Routing Plan : </InputLabel>
                        <Select
                            labelId="select-page5-1"
                            label="Search Type"
                            id="label-page5-1"
                            name= "routing_plan"
                            value={state.routing_plan || " "}
                            onChange={handleInputValues}
                            >
                                <MenuItem value="routing1">Routing 1</MenuItem>
                                <MenuItem value="routing2">Routing 2</MenuItem>
                                <MenuItem value="routing3">Routing 3</MenuItem>
                                
                        </Select>
                </FormControl>
                </Grid>
                {/* <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>   </Grid>
                    <Grid item xs={12} md={6} lg={6}> </Grid>
                </Grid>                 */}
                
            </Grid>
    );
  }
  export default AppIdandRouting;
  