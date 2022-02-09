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
    marginTop: 70,
    padding: 10,
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  LeftCol: {
    width: "50%",
    // backgroundColor: "#d89",
    paddingLeft:360,
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
  },
  Text: {
    fontSize: 28,
    color: "#AAC840",
  },
  TextA: {
    fontSize: 18,
    color: "#000",
  },
  Btn: {
    backgroundColor: "#5DBCA3",
    color: "#fff",
    fontSize:'18px',
    borderRadius:5,
    margin:'30px 0px'
  },
}));
export default useStyles;
