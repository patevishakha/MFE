import React ,{useContext} from 'react'
import { TextField } from '@material-ui/core'

import { Context } from "../GlobalData/Store";
import Service1 from "../services/Service1";

function OperationInprogress() {
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
          id="filled-multiline-static"
          label="Multiline Progress"
          value={state.multiline_operational_progress || " "}
          name= "multiline_operational_progress"
          onChange={handleInputValues}
          multiline
          rows={5}
          variant="filled"
        /> 
        </>
    )
}

export default OperationInprogress
