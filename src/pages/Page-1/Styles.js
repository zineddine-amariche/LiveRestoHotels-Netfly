/** @jsxImportSource theme-ui */

import { makeStyles } from "@material-ui/core/styles";
 const useStyles = makeStyles((theme) => ({
    ContainerHome:{
        backgroundColor: '#dde',
        display:'flex',
        flexDirection:'column',
        width:'100%',
        [theme.breakpoints.up("md")]: {
            // marginTop: 70,
            // alignSelf: 'center',
        //   backgroundColor: "#ee2657",
        // justifyContent: 'center',

      
          },
    }
}));    
export default useStyles