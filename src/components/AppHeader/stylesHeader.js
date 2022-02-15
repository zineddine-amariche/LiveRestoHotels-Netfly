/** @jsxImportSource theme-ui */

import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  appRoot: {
    // width: "1440px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  toolbare: {
    display: "flex",
    justifyContent: "space-between",
    alignSelf: "center",
    border: "none",
  },
  image: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  IconReturn: {
    // backgroundColor: "#eee",
    paddingRight: 10,
  },
  logoLg: {
    paddingLeft: theme.spacing(1),
    // backgroundColor: "#ccc",
    width: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      // display: "none",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      // width: "40%",
      // backgroundColor: "#eee",
      display: "none",
    },
  },
  textLogo: {
    fontSize: "28px",
    fontFamily: "",
    fontWeight: "700",
  },
  BtnLgn: {
    color: "#fff",
    fontWeight: "600",
    backgroundColor: "#5DBCA3",
    border: "none",
    "&:hover": {
      backgroundColor: "#5DBCA3",
    },
  },
  textName: {
    fontSize: "18px",
    fontFamily: "",
    fontWeight: "700",
  },
  logoSm: {
    display: "block",
    // marginLeft: 5,
    fontSize: 40,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    // color: "#000",
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    // borderRadius: theme.shape.borderRadius,
    width: "30%",
    // padding: 3,
    // [theme.breakpoints.down("sm")]: {
    //   display: (props) => (props.open ? "flex" : "none"),
    // },
  },
  LangueBox: {
    display: "flex",
    alignItems: "center",
    // backgroundColor: "#777",
    justifyContent: 'space-between',
    // width:'20%'
    // marginLeft:90
  },
  iconC: {
    color: "#237a59",
    fontSize: 27,
  },
  inputa: {
    marginLeft: theme.spacing(2),
    color: "#000",
  },
  icosn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "#ccc",
  },
  ChipName: {
    backgroundColor: "#237a59",
    color: "#fff",
    fontSize: "16px",
    border: "1px solid #ccc",
    fontWeight: "600",
    height: "35spx",
    "& .MuiChip-label": {
      color: "#fff",
    },
    [theme.breakpoints.down("md")]: {},
  },
  ChipP: {
    marginRight: 15,
    paddingLeft: 5,
    backgroundColor: "#000",
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    "& .MuiChip-label": {
      color: "#fff",
    },
  },
  Avata: {
    color: "white",
  },
  CarteShopImage: {
    backgroundColor: "#fff",
    color: "#fff",
    height: "40px",
    width: "40px",
    padding: 5,
    borderRadius: "8px",
    overflow: "hidden",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      height: "90%",
    },
  },
  imageReturn: {
    cursor: "pointer",
  },
  boxIconImage: {
    // backgroundColor:"#000",
    display: "flex",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      marginRight: 5,
    },
  },
  ImageInd: {
   width:'50px',
   height:25,

  },
  GroupBtn: {
    // backgroundColor: "#ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin:"0px 15px",
    padding:0,
    height:50,
   width:'100px'

  },
  ItemNombre: {
    position: "absolute",
    top: -15,
    right: -12,
    color: "#237a59",
    backgroundColor: "#fff",
    width: 22,
    height: 22,
    borderRadius: 11,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600",
    border: "1.5px solid #237a59",
    [theme.breakpoints.down("md")]: {
      top: -10,
      right: -13,
      width: 20,
      height: 20,
    },
  },

  lefticons: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: 15,
    alignItems: "center",
    backgroundColor: "#ccc",
    overflow: "hidden",
  },
  icosnBox: {
    margin: 5,
    cursor: "pointer",
  },
  searchBtn: {
    margin: 5,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  Langue: {
    display: "flex",
    paddingLeft: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  boxContainer: {
    width: "100%",
  },
  BarreNav: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      marginRight: 40,
    },
  },
  containerRow: {
    display: "flex",
    alignItems: "center",
    width: "80px",
    height: "80px",
    padding: "0px 5px",
    // backgroundColor: "#fff",
    "& .MuiTypography-root": {
      color: "#fff",
    },
    // backgroundColor: "#ccc",
    // lg
    [theme.breakpoints.down("lg")]: {
      // width: "25%",
      // backgroundColor: "#eee",
      padding: 1,
      fontSize: "17px",
    },
    [theme.breakpoints.down("md")]: {
      width: "30%",
      padding: 1,

      // backgroundColor: "#eee",
    },
    [theme.breakpoints.down("sm")]: {
      // width: "40%",
      // backgroundColor: "#eee",
    },
  },
  ItemMenue: {
    color: "#fff",
  },
}));
