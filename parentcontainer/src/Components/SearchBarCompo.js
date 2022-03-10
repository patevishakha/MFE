import {
    createStyles,
    fade,
    Theme,
    makeStyles,
  } from '@material-ui/core/styles';
  import React from 'react';
  import SearchIcon from '@material-ui/icons/Search';
  import InputBase from '@material-ui/core/InputBase';
  import SearchBar from "material-ui-search-bar";
  import { useState } from 'react';
  
  const useStyles = makeStyles((theme) =>
    createStyles({
      search: {
        position: 'relative',
        // border : '1px solid black',
        // borderRadius: '4px',
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          height : "30px",
          width: 'auto',
        },
      },
    })
  );
  
  export default function SearchBarCompo() {
    const classes = useStyles();
    const [state, setstate] = useState("");
    const onChangeHandler = (e)=>{
        setstate(e.target.value);
        console.log(e.target.value);
    }
    return (
        <SearchBar className={classes.search}
            value={state}
            onChange={(e) => console.log('onChange')}
            // onRequestSearch={() => doSomethingWith(this.state.value)}
        />
    
    );
  }

