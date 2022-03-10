import React from 'react'
import {useContext} from 'react'
import { FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';

import { Context } from "../GlobalData/Store";
import Service1 from "../services/Service1";

function Element3() {
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
          <div>
            <form>
                <FormControl variant="outlined"  size="small" >
                <InputLabel id="select-label3">Created Access No : </InputLabel>
                        <Select
                            labelId="select-label3"
                            label="Created Access No"
                            id="select3"
                            value={state.created_Access_No || " "}
                            name= "created_Access_No"
                            onChange={handleInputValues}
                            >
                                <MenuItem value={'Value 1'}>Value 1</MenuItem>
                                <MenuItem value={'Value 2'}>Value 2</MenuItem>
                                <MenuItem value={'Value 3'}>Value 3</MenuItem>
                                
                            </Select>
                        </FormControl>
            </form>
        </div>
    )
}

export default Element3
