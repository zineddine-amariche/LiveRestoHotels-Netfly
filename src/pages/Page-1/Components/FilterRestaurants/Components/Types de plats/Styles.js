/** @jsxImportSource theme-ui */
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  C1: {
    // backgroundColor: "#000",
    width: "95%",
    // height: "15%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "15px 15px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      // backgroundColor: "#eee",
      margin: "15px 5px",
    },
  },
  CH1C: {
    // background:"#789",
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "40px",
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
    paddingLeft: "40px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
  },
}));
export default useStyles;
