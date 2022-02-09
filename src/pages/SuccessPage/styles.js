/** @jsxImportSource theme-ui */

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  ContainerError: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      height: "150vh",
    },
  },
  BoxContainer: {
    height: "50%",
    backgroundColor: "#fff",
    // marginTop: 70,
    padding: 10,
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "85px 0px 15px 0",
  },
  LeftCol: {
    width: "50%",
    // backgroundColor: "#d89",
    paddingLeft: 250,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 50,
      width: "80%",
    },
  },
  RightCol: {
    width: "50%",
    // backgroundColor: "#d89",
    margin: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    width: "70%",
    height: "80%",
  },
  num: {
    fontSize: 100,
    color: "#AAC840",
    fontFamily: "Oswald",
    [theme.breakpoints.down("md")]: {
      fontSize: 60,
    },
  },
  Text: {
    fontSize: 28,
    color: "#AAC840",
    fontWeight: 700,
    fontFamily: "Helvetica",
  },
  TextA: {
    fontSize: 18,
    color: "#000",
    fontWeight: "400",
  },
  Btn: {
    backgroundColor: "#5DBCA3",
    color: "#fff",
    fontSize: "18px",
    borderRadius: 5,
    margin: "30px 0px",
  },
  Span: {
    fontWeight: 700,
  },
  BtnHome: {
    margin: "15px 0px 1px 5px",
    backgroundColor: "#5DBCA3",
    fontSize: "18px",
    borderRadius: 5,
    color: "#fff",
    fontWeight: "700",
    padding: "5px 35px",
    "&:hover": {
      color: "#5DBCA3",
    },
  },
}));
export default useStyles;
