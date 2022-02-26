import { Box, Paper, TextField } from '@material-ui/core'
import React from 'react'
import useStyles from './Styles'
import SearchIcon from "@material-ui/icons/Search"
function SearcheBox() {
    const classes = useStyles()
    return (
        <Paper className={classes.searcher} elevation={0}>
            {/* <TextField 
            variant="outlined" 
            label="Chercher un restaurant" 
            className={classes.box}
            InputProps={{
                endAdornment:<SearchIcon position="end"/>
            }}

            /> */}
        </Paper>
    )
}

export default SearcheBox
