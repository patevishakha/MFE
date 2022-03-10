import React, {useState,useEffect} from 'react'
import  TextField  from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'; 
import  InputLabel  from '@material-ui/core/InputLabel';
import  FormControlLabel  from '@material-ui/core/FormControlLabel';
import  Checkbox  from '@material-ui/core/Checkbox';
import  Box  from '@mui/system/Box';

export const Col1 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
  fetch("http://localhost:5000/Account")
  .then((response) => response.json())
  .then((data) => setData(data));
  //console.log(data);
  });
  
  const [data2, setData2] = useState([]);
  useEffect(() => {
  fetch("http://localhost:5000/CC")
  .then((response) => response.json())
  .then((data2) => setData2(data2));
  //console.log(data);
  });
    return (
        <div>
            <Autocomplete
        
        multiple
        variant="standard"
        options={data}
        //getOptionLabel={(option) => option.CO}
        
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Revenue Owners"
            
          />
        )}
      />
      <Autocomplete
        
        multiple
        
        options={data2}
        //getOptionLabel={(option) => option.title}
        style={{maxHeight: 90, overflow: 'auto'}}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField 
            {...params}
            label="Corps"
            
          />
        )}
      />
      <br/>
      <Box>
            <InputLabel sx={{m:1}}>Product Type </InputLabel>
                <FormControlLabel sx={{m:1}} control={<Checkbox defaultChecked />} label="National" />
                <FormControlLabel sx={{m:1}} control={<Checkbox />} label="International" />
            </Box>
        </div>
    )
}
