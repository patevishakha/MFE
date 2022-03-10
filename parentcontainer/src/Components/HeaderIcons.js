import React from 'react'
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {IconButton, Badge} from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const useStyles = makeStyles({
       BatchColourClass:{
      color : '#fff'
    },
})

function HeaderIcons() {
    const classes = useStyles();
    return (
        <>
            {/* sx={{ backgroundColor : '#1976d2'}} */}
             <Box >
                    <IconButton>
                          <Badge badgeContent={2} className={classes.BatchColourClass}>
                              <NotificationsIcon/>
                          </Badge>
                    </IconButton>
                    <IconButton>
                          <Badge className={classes.BatchColourClass}>
                              <SettingsIcon/>
                          </Badge>
                    </IconButton>
                    <IconButton>
                          <Badge className={classes.BatchColourClass}>
                              <AccountCircleIcon/>
                          </Badge>
                    </IconButton>
                </Box>
        </>
    )
}

export default HeaderIcons




