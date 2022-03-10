import React from 'react'
import { useState } from 'react';
import HeaderIcons from './HeaderIcons';

import {List,ListItem} from '@material-ui/core';
import {AppBar,Toolbar,Box, Typography, Grid, IconButton, Badge} from '@material-ui/core';
import {useScrollTrigger,Drawer} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {Menu} from '@material-ui/icons';
import DehazeIcon from '@mui/icons-material/Dehaze';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';


function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles({

    rootClass : {
      '& .MuiPaper-root':{
        backgroundColor : '#1976d2',
      },
    },

    AppBarClass:{
      position: "fixed",
      backgroundColor : '#1976d2',
      // backgroundImage: 'linear-gradient(147deg, #923cb5 0%, #000000 74%)'
    },
   
    BatchColourClass:{
      // backgroundColor : '#fff',
      color : '#fff'
    },
    MarginClass:{
      marginRight : '1%',
    },
    
    GridClass:{
      display:'flex',
      justifyContent : 'space-between',
      width:'100%'
    },

    DrawerStyleClass:{
      width : '210px',
      height:'100%',
      color : '#000',
      // backgroundImage: 'linear-gradient(147deg, #923cb5 0%, #000000 74%)',
      // backgroundImage: 'linear-gradient(315deg, #f0ecfc 0%, #c797eb 74%)',
      textAlign : 'center',
      fontWeight : 'bold',
    }
})

function Header() {
  const classes = useStyles();
  const [open,setOpen] = useState(false);

  const handleDrawerOpen = ()=>{
    setOpen(true);
  }

  const handleDrawerClose = ()=>{
    setOpen(false);
  }

    return (
        <Box className={classes.rootClass} sx={{ flexGrow: 1 }}>
        <ElevationScroll>
        <AppBar className={classes.AppBarClass}>
          <Toolbar>
          <Box className={classes.GridClass}> 
                <Box >         
                  <IconButton onClick={handleDrawerOpen} className={classes.MarginClass}>
                    <Badge className={classes.BatchColourClass}>
                        <DehazeIcon/>
                    </Badge>
                  </IconButton>
                
                  <Drawer
                    variant = "persistent"
                    anchor = "left"
                    open={open}
                    // onClose={()=>{setOpen(false);}}
                  >
                  <div  className={classes.DrawerStyleClass}>
                      <IconButton  onClick={handleDrawerClose}>
                        <Badge>
                            <KeyboardDoubleArrowLeftIcon/>
                        </Badge>
                      </IconButton>
                      
                      <List>
                        <ListItem button>Home</ListItem>
                        <ListItem button>About</ListItem>
                        <ListItem button>Contact Us</ListItem>
                      </List>
                  </div>
                  </Drawer>  
                
                </Box>
                {/* <Grid item sm></Grid>   */}
                <Box >
                  <Typography variant="h4" style={{marginTop:'4px'}}>Call Traffic Controller</Typography>
                </Box>

                <HeaderIcons/>
            </Box>
          </Toolbar>
        </AppBar>
        </ElevationScroll>
        </Box>
    )
}

export default Header
