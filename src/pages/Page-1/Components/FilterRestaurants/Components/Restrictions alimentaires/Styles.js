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
    height: "100%",
    width: "20%",
    margin: "5px 0 0px 0px",
    position: "sticky",
    left: 0,
    top: 0,
    flexDirection:'column',
    [theme.breakpoints.down("md")]: {
      width:"40%"
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    "&:hover": {},
  },
  C1: {
    // backgroundColor: "#ccc",
    width: "100%",
    height: "15%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin:'15px 0px',
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    // backgroundColor: "#eee",
    margin:'15px 5px',

    },
  },
  CH1C: {
    // background:"#789",
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft:'40px'

  
  },
  TitleC1: {
    // backgroundColor: '#456',
    width: "100%",
    display: "flex",
    alignItems: "center",
    color: "#AAC840",
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "40px",
    paddingLeft:'40px',
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",

    },
  },
}));
export default useStyles;
