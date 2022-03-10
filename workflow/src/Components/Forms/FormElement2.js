import {Grid ,TextField } from '@material-ui/core';
import { FormControl,InputLabel,Select,MenuItem,FormControlLabel,Checkbox,Button} from '@material-ui/core';
import { useContext } from 'react';
import { makeStyles,ThemeProvider } from '@material-ui/core';
import React from 'react'
import theme from '../Theme';

import { Context } from "../GlobalData/Store";
import Service1 from "../services/Service1";


 const useStyle = makeStyles(theme=>({
     rootClass : {
 
         '& .MuiAutocomplete-root' : {
         width:'50%',
         margin:theme.spacing(1)
         },     
     }
 }))
 
function FormElement2() {
    const classes = useStyle();

    const [state, setState] = useContext(Context);

    const handleInputValues = (event, values) => {
        const { name, value } = event.target;
    
        if (name === "isMultiBuild") {
            setState({
                ...state,
             ["isMultiBuild"]:event.target.checked
              });
        }
        else{
        setState({
            ...state,
            [name]: value,
        });
        }
        
        const id=state.id;
        Service1.updateData(state, id).then((res) => {});

    };

    

    return (
        
            <form>
                    <TextField
                        size = 'small'
                        variant="outlined"
                        label="Request No"
                        value={state.requestNO || " "}
                        name= "requestNO"
                        onChange={handleInputValues}
                    />
                    <FormControl  variant="outlined"  size="small" >
                            <InputLabel id="select-label1">Country Of Origin</InputLabel>
                            <Select
                                labelId="select-label1"
                                value={state.countryOfOrigin || " "}
                                id="select1"
                                label="countryOfOrigin"
                                name= "countryOfOrigin"
                                onChange={handleInputValues}
                            >
                                <MenuItem value="Value1">Value 1</MenuItem>
                                <MenuItem value="Value2">Value 2</MenuItem>
                                <MenuItem value="Value3">Value 3</MenuItem>

                            </Select> 
                    </FormControl>
                    
                    <FormControl variant="outlined"  size="small" >
                        <InputLabel id="select-label2">Inbound Access Type</InputLabel>
                        <Select
                                labelId="select-label2"
                                value={state.inboundAccessType || " "}
                                label="inboundAccessType"
                                id="select2"
                                name= "inboundAccessType"
                                onChange={handleInputValues}
                            >
                                <MenuItem value="Value1">Value 1</MenuItem>
                                <MenuItem value="Value2">Value 2</MenuItem>
                                <MenuItem value="Value3">Value 3</MenuItem>
                                
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined"  size="small" >
                        <InputLabel id="select-label3">Bulk Access No Workflow</InputLabel>
                            <Select
                                labelId="select-label3"
                                value={state.bulkAccessNoWorkflow || " "}
                                label="bulkAccessNoWorkflow"
                                id="select3"
                                name= "bulkAccessNoWorkflow"
                                onChange={handleInputValues}
                            >
                                <MenuItem value={1}>NO 1</MenuItem>
                                <MenuItem value={2}>NO 2</MenuItem>
                                <MenuItem value={3}>NO 3</MenuItem>
                                
                            </Select>
                    </FormControl>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={6}>
                                  
                            <TextField
                                label="SIO Acceptatnce Date"
                                id= "date1"
                                type="date"
                                value={state.sioAcceptatnceDate || " "}
                                // defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name= "sioAcceptatnceDate"
                                onChange={handleInputValues}
                                // onChange={(e)=>setForm({SIOAcceptatnceDate:e.target.value})}
            
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                label="Customer Commit Date"
                                type="date"
                                id = "date2"
                                value={state.customerCommitDate || " "}
                                // defaultValue="2017-05-24"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                name= "customerCommitDate"
                                onChange={handleInputValues}
                                // onChange={(e)=>setForm({customerCommitDate:e.target.value})}
                            />
                        </Grid>
                    </Grid>  

                    <FormControlLabel
                        control={<Checkbox  color="primary" />}
                        label="Multi Build"
                        checked={state.isMultiBuild ? true : false}
                        value={state.isMultiBuild ? true : false}
                        name= "isMultiBuild"
                        onChange={handleInputValues}
                    /> 
                    
            </form>
           
    )
}

export default FormElement2
