/** @jsxImportSource theme-ui */
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  ConatinerFilter: {
    backgroundColor: "#fff",
    display: "flex",
    // height:'100%',
    maxWidth: "20%",
    minWidth: "20%",
    margin: "5px 0 0px 0px",
    position: "sticky",
    // justifyContent: 'start',
    left: 0,
    top: 0,
    overflowY: "scroll",
    flexDirection: "column",
    alignItems: "space-evenly",
    // height:"100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      backgroundColor: "#fff",
      maxWidth:'40%'
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth:'45%'
    },
    "&:hover": {},
  },
  FixFilter:{
    paddingTop:90
  }
}));
export default useStyles;
