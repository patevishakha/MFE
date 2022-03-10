import {Grid ,TextField } from '@material-ui/core';
import React from 'react'

function FormElement() {
    return (
            // <Grid item xs={6}>
            <Grid>
                    <TextField
                        size = 'small'
                        variant="outlined"
                        label="Present Stage"
                        inputProps={{ readOnly: true, }}
                        placeholder="backend will update status"
                    />
                    <TextField
                        size = 'small'
                        variant="outlined"
                        label="Number Status"
                        inputProps={{ readOnly: true, }}
                        placeholder="backend will update status"
                    />
                     <TextField
                        size = 'small'
                        variant="outlined"
                        label="Network Address Status"
                        inputProps={{ readOnly: true, }}
                        placeholder="backend will update status"
                    />
                     <TextField
                        size = 'small'
                        variant="outlined"
                        label="Error/Notes"
                        inputProps={{ readOnly: true, }}
                        placeholder="backend will update status"
                    />
            </Grid>
    )
}

export default FormElement
