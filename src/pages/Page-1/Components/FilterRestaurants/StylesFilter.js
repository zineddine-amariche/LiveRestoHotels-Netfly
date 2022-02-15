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
    height: "99.4%",
    // maxWidth: "20%",
    // minWidth: "20%",
    margin: "5px 0px  0px 0px",
    // position: "fixed",
    // justifyContent: 'start',
    overflowY: "scroll",
    flexDirection: "column",
    // height:"100%",
    [theme.breakpoints.down("md")]: {
      // display: "flex",
      // backgroundColor: "#fff",
      // maxWidth:'40%'
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "99%",
      minWidth: "99%",
      position: "abolute",
      left: 0,
      top: 0,
      backgroundColor: "#fff",
    },
    "&:hover": {},
  },
  FixFilter: {
    paddingTop: 90,
  },
}));
export default useStyles;
