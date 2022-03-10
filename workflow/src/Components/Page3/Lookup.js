import React , { useContext }from "react";
import {Checkbox,FormControlLabel,Grid,makeStyles,Radio,RadioGroup,TextField,} from "@material-ui/core";
import { useState } from 'react';
import { FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';

import { Context } from "../GlobalData/Store";
import Service1 from "../services/Service1";
  
const useStyles=makeStyles((theme)=>({
      grid:{
          margin:"1.5em",
          marginBottom:"2em"
      }
  }))
  
  
function Lookup() {
      const classes=useStyles();
    const [state, setState] = useContext(Context);

    const handleInputValues = (event, values) => {
        const { name, value } = event.target;
        
        setState({
        ...state,
        [name]:
            name === "auto_look_up" || name === "exact"
            ? event.target.checked
            : value,
        });
        
        const id=state.id;
        Service1.updateData(state, id).then((res) => {});

    };

    return (
            <Grid>
                <RadioGroup value={state.radio_button_value || " "}
                    name = "radio_button_value"
                    onChange={handleInputValues} >
                    <FormControlLabel
                    value="BT or Supplier Owned Number"
                    label="BT or Supplier Owned Number"
                    control={<Radio color="primary" />}
                    />
                    <FormControlLabel
                    value="Customer Owned Number"
                    label="Customer Owned Number"
                    control={<Radio color="primary" />}
                    />
                    <FormControlLabel
                    value="Pre Built Number"
                    label="Pre Built Number"
                    control={<Radio color="primary" />}
                    />
                </RadioGroup>
                
                
                <FormControl variant="outlined"  size="small" >
                <InputLabel id="select-page3-1">Search Type : </InputLabel>
                        <Select
                            labelId="select-page3-1"
                            label="Search Type"
                            id="label-page3-1"
                            name= "search_type"
                            value={state.search_type || " "}
                            onChange={handleInputValues}
                            >
                                <MenuItem value="search1">search-type 1</MenuItem>
                                <MenuItem value="search2">search-type 2</MenuItem>
                                <MenuItem value="search3">search-type 3</MenuItem>
                                
                        </Select>
                </FormControl>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                        <FormControl variant="outlined"  size="small" >
                        <InputLabel id="select-page3-2">Country : </InputLabel>
                                <Select
                                    labelId="select-page3-2"
                                    label="country"
                                    id="label-page3-2"
                                    name= "country"
                                    value={state.country || " "}
                                    onChange={handleInputValues}
                                    >
                                        <MenuItem value="India">India</MenuItem>
                                        <MenuItem value="America">America</MenuItem>
                                        <MenuItem value="Japan">Japan</MenuItem>
                                        
                                </Select>
                        </FormControl>
                    </Grid>
                
                    <Grid item xs={12} md={6} lg={6}>
                        <FormControl variant="outlined"  size="small" >
                        <InputLabel id="select-page3-3">Switch_box </InputLabel>
                                <Select
                                    labelId="select-page3-3"
                                    label="switch_box"
                                    id="label-page3-3"
                                    name= "switch_box"
                                    value={state.switch_box || " "}
                                    onChange={handleInputValues}
                                    >
                                        <MenuItem value="switch_box1">switch_box 1</MenuItem>
                                        <MenuItem value="switch_box2">switch_box 2</MenuItem>
                                        <MenuItem value="switch_box3">switch_box 3</MenuItem>
                                        
                                </Select>
                        </FormControl>
                    </Grid>
                </Grid>        
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                size = 'small'
                                type = "number"
                                variant="outlined"
                                label="Search No"
                                value={state.search_no || " "}
                                name= "search_no"
                                onChange={handleInputValues}
                            />
                        </Grid> 
                        <Grid item xs={12} md={6} lg={6}>   
                        <TextField
                            size = 'small'
                            type="number"
                            variant="outlined"
                            label="Quantity"
                            value={state.quantity || " "}
                            name= "quantity"
                            onChange={handleInputValues}
                            // style={{ width: "75%" }}
                        /> 
                        
                        </Grid>
                    </Grid>   

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={6}>
                            <FormControlLabel
                                control={<Checkbox  color="primary" />}
                                label="Auto Look Up?"
                                checked={state.auto_look_up ? true : false}
                                value={state.auto_look_up ? true : false}
                                name= "auto_look_up"
                                onChange={handleInputValues}
                            /> 
                        </Grid>  
                        <Grid item xs={12} md={6} lg={6}>
                            <FormControlLabel
                                control={<Checkbox  color="primary" />}
                                label="Exact?"
                                checked={state.exact ? true : false}
                                value={state.exact ? true : false}
                                name = "exact"
                                onChange={handleInputValues}
                            />
                        </Grid>
                    </Grid>    
                        
            </Grid>
    );
  }
  export default Lookup;
  