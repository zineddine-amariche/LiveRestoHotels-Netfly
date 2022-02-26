/** @jsxImportSource theme-ui */

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ( {
  Body: {
    backgroundColor: "#fff",
    // marginTop: 67,
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    // justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    border: "none",
    padding: "0px 0px 0px 10xp",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      marginTop: 70,
    },
  },
  BodyRow: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: "80%",
    maxWidth: "80%",
    border: "none",
    backgroundColor: "#fff",
    overflowY: "scroll",
    // alignItems:"center",
      // justifyContent: "center",
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
  
      },
  },
  HeaderTitle: {
    width: "100%",
    padding: "45px",
    // backgroundColor: '#789',
    borderBottom: "1.5px solid #ccc",
    borderTop: "1.5px solid #ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
    fontWeight: "600",
  },
  BoxBodyFilterCard: {
    display: "flex",
    height: "100%",
    width: "100%",
    backgroundColor: '#689',
    position: "relative",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      // justifyContent: "center",
    width: "100%",

    },
  },
  searcher: {
    height: "40px",
    width: "100%",
    zIndex: 10,
    backgroundColor: "transparent",
    // backgroundColor:'#ccc',
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: "30px",
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
      width: "100%",
      // backgroundColor: "#eee",
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 80,
      width: "100%",
   
    },
  },
  box: {
    width: "20%",
    // backgroundColor:'#fff',
    marginRight: 45,

    "& .MuiPaper-root": {
      color: "#e47",
    },
    [theme.breakpoints.down("md")]: {
      width: "75%",
      display: "flex",
      justifyContent: "center",
      margin: "5px 0px",
      width: "85%",
    },
  },
}));
export default useStyles;
