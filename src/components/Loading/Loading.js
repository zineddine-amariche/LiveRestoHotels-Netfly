/** @jsxImportSource theme-ui */

import { Box, CircularProgress } from '@material-ui/core'
import useStyles from  './stylesLoading'

import { teal } from '@mui/material/colors';

const color = teal[700];

function Loading() {
    const classes = useStyles()
    return (
        <Box className={classes.boxLoading}>
        <CircularProgress  color={color} />
      </Box>
    )
}

export default Loading
    