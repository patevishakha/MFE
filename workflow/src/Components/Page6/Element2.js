import React,{useContext} from 'react'
import { useState } from 'react'
import { TextField } from '@material-ui/core';

import { Context } from "../GlobalData/Store";
import Service1 from "../services/Service1";

function Element2() {
    const [state, setState] = useContext(Context);

    const handleInputValues = (event, values) => {
        const { name, value } = event.target;
        
        setState({
        ...state,
        [name]: value,
        });
        
        const id=state.id;
        Service1.updateData(state, id).then((res) => {});

    };

    return (
        <>
            <TextField
                            id="date6-1"
                            label="HT RTO Date : "
                            type="date"
                            value={state.ht_RTO_Date || " "}
                            name= "ht_RTO_Date"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            onChange={handleInputValues}
            />

            <TextField
                            id="date6-2"
                            label="Order Placed To Ptt Date : "
                            type="date"
                            
                            InputLabelProps={{
                            shrink: true,
                            }}
                            value={state.order_Placed_To_Ptt_Date || " "}
                            name= "order_Placed_To_Ptt_Date"
                            onChange={handleInputValues}
            />
            
            <TextField
                            id="date6-3"
                            label="Ptt Service Delivered Date : "
                            type="date"
                           
                            InputLabelProps={{
                            shrink: true,
                            }}
                            value={state.ptt_Service_Delivered_Date || " "}
                            name= "ptt_Service_Delivered_Date"
                            onChange={handleInputValues}
            />

            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                id="outlined-uncontrolled"
                label="Ptt Service Delivered Date : "
                value={selectedDate}
                onChange={handleDateChange}
                />
            </MuiPickersUtilsProvider> */}
        </>

    )
}

export default Element2


