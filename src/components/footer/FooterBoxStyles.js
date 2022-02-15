/** @jsxImportSource theme-ui */

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  ContainerFooter: {
    backgroundColor: "#3D3D3D",
    width: "100%",
    height: "35vh",
    color: "#000",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",

    [theme.breakpoints.down("lg")]: {
      height: "50vh",
      backgroundColor: "#3D3D3D",
    },
    [theme.breakpoints.down("md")]: {
      height: "80vh",
      backgroundColor: "#3D3D3D",
    },
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "110vh",
    },
  },
  spano: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  FirstCol: {
    width: "98%",
    backgroundColor: "#3D3D3D",
    display: "flex",
    margin: "0px 10px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  LeftColF: {
    width: "50%",
    display: "flex",
    // backgroundColor: "#3d3d",
    margin: 5,
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "#eee",
      width: "100%",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: "#eee",
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  RightColF: {
    width: "50%",
    // backgroundColor: "#3d3d",
    margin: 5,
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "#eee",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: "#eee",
      width: "110%",
      display: "flex",
      alignItems: "center",
    },
  },
  ScondCol: {
    width: "98%",
    // backgroundColor: "#ccc",
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    display: "flex",
    height: 80,
    justifyContent: "space-between",
    padding: "10px 40px",
  },
  FirstBox: {
    // backgroundColor: "#485",
    width: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Tetx: {
    color: "#fff",
    fontSize: "25px",
    fontWeight: "800",
    fontFamily: "",
  },
  ImageX: {
    width: "50%",
    cursor: "pointer",
  },
  ClassPaper: {
    height: "100%",
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    color: "#fff",
    backgroundColor: "transparent",
    // backgroundColor: "#896",
  },
  PaperScond: {
    backgroundColor: "transparent",
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 15px",
    color: "#fff",
    fontWeight: "600",
    fontFamily: "",
    fontSize: "20px",
  },
  iCons: {
    // backgroundColor: '#485',
    width: "70%",
    height: "100%",
    color: "#fff",
  },
  Div: {
    width: "97%",
    margin: "10px 0px 10px 0",
    color: "#000",
    backgroundColor: "#fff",
    height: "2px",
  },
  IconsFotter: {
    margin: "0px 6px 0px 0px",
    "&:hover": {
      color: "#485",
    },
  },
  ThirdCol: {
    display: "flex",
    width: "98%",
    justifyContent: "space-between",
    backgroundColor: "#3d3d3d",
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "#eee",
      width: "90%",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  LinksFooter: {
    display: "flex",
    alignItems: "center",
    width: "30%",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    padding: "20px 0px 0px  10px",
    marginLeft: 45,
    color: "#ccc",
    fontSize: 17,
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "#eee",
      width: "50%",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: "#eee",
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "#eee",
      width: "90%",
      flexDirection: "column",
    },
  },
  ItemLinks: {
    cursor: "pointer",
    // "&:hover":{
    //   color:"#485"
    // }
  },
  Image: {
    width: "80%",
    height: "95%",
  },
  ImageL: {
    width: "120px",
    height: "120px",
    cursor: "pointer",
  },
  ImageText: {
    width: "153",
    height: "16px",
    cursor: "pointer",
  },
  LogoBox: {
    width: "300px",
    // height: "100%",
    // backgroundColor: "#ddd",
    margin: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  ColTitle: {
    backgroundColor: "#3d3d3d",
    margin: "10px 0",
    height: "33%",
    padding: 10,
  },
  BoxLeftTextS: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#3d3d3d",
    padding: "0px 10px",
    marginLeft: 25,
  },
  Apropos: {
    // backgroundColor: "#ddd",
    height: "100%",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    marginTop: 15,
    paddingLeft: 15,
    padding: "10px 20px",
  },
  Recontre: {
    // backgroundColor: "#d99995",
    height: "100%",
    margin: "10px 5px",
    padding: "10px 20px  0px 0px",
  },
  News: {
    // backgroundColor: "#d99995",
    height: "100%",
    margin: "10px",
    display: "felx",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",
  },
  titles: {
    fontSize: "20px",
    color: "#aac840",
    fontFamily: "",
    lineHeight: "24px",
    fontWeight: "bold",
  },
  textList: {
    fontSize: "18px",
    color: "#fff",
    fontFamily: "",
    cursor: "pointer",
    display: "flex",
    padding: "10px 0px 0px 0px",
    // backgroundColor:"#ccc",
    width: "70%",
    justifyContent: "space-between",
  },
  ItemLinksFooter: {
    margin: "2px 5px",
    fontSize: "18px",
    "&:hover": {
      color: "#485",
    },
  },
  rowTitle: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#3d3d3d",
    margin: "10px 0",
    height: "33%",
    padding: 10,
  },
  PaerTextFeild: {
    padding: 8,
    display: "flex",
    alignItems: "center",
    marginTop: 15,
    height: "80px",
    width: "90%",
    backgroundColor: "#3d3d3d",
  },

  Inputa: {
    width: "98%",
    backgroundColor: "#fff",
    padding: 5,
    "& .Mui-focused": {
      color: "#5DBCA3",
      fontWeight: "bold",
      paddingLeft: 10,
      paddingTop: 5,
      borderBottomColor: "#5DBCA3",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: ".5px solid #5DBCA3",
      },
      "&:hover fieldset": {
        border: "2px solid #5DBCA3",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid #5DBCA3",
      },
      "& .fieldset": {
        paddingLeft: 5,
      },
    },
    "&  .MuiFormLabel-root": {
      paddingLeft: 15,
      borderBottomColor: "#5DBCA3",
    },
  },

  button: {
    backgroundColor: "#5DBCA3",
    marginLeft: "15px",
    height: "91%",
    color: "#fff",
    fontWeight: "700",
    width: "40%",
    marginTop: -5,
  },
  textListBottom: {
    fontSize: "15px",
    color: "#ccc",
    fontFamily: "",
    fontWeight: "500",
    marginLeft: 9,
    width: "70%",
  },
  Langue: {
    color: "#fff",
    width: "5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    [theme.breakpoints.down("md")]: {
      marginTop: 20,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 25,
      marginRight: 20,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 25,
      marginLeft: 70,
    },
  },
  achrf: {
    textDecoration: "none",
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  },
}));
export default useStyles;
