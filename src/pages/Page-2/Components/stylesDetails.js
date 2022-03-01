/** @jsxImportSource theme-ui */
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

import { makeStyles } from "@material-ui/core/styles";

import { COLORS } from "../../../utils/theme";

const useStyles = makeStyles((theme) => {
  return {
    ContainerDetails: {
      backgroundColor: "#fff",
      display: "flex",
      width: "100%",
      margin: "75px 0 0px 0px",
      flexDirection: "column",
      "&:hover": {},
    },
    Fab: {
      position: "absolute",
      right: 10,
      bottom: 10,
      backgroundColor: "#485",
      zIndex: 205,
      "&:hover": {
        backgroundColor: "#485",
        color: "#000",
        transition: ".5s ease-in",
      },
    },
    LeftCol: {
      width: "80%",
      backgroundColor: "#fff",
      position: "fixed",
      position: "relative",
      top: 0,
      [theme.breakpoints.down("lg")]: {
        // display: "none",
        width: "75%",
      },
      [theme.breakpoints.down("md")]: {
        // display: "none",
        width: "65%",
      },
      [theme.breakpoints.down("sm")]: {
        // display: "none",
        width: "100%",
      },
      [theme.breakpoints.down("xs")]: {
        // display: "none",
        width: "100%",
      },
    },
    CloseSHopCard: {
      backgroundColor: "#ccc7",
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 10,
    },
    HeaderDetailsContainer: {
      // backgroundColor: "#0d4",
      width: "100%",
      // height: "100vh",
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "#0d4",
      },
    },
    Image: {
      width: "100%",
      height: "100%",
    },
    ImageX: {
      width: "100%",
      height: "100%",
      zIndex: 10,
    },
    BoxHeaderImage: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      // maxHeight:"200px"
    },
    ColBodyMenu: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "100%",
      flexWrap: "wrap",
      backgroundColor: "#fff",
      [theme.breakpoints.down("md")]: {
        maxWidth: "100%",
      },
    },
    BottomHeaderDeatils: {
      height: "60%",
      width: "100%",
      outline: "hidden",
      display: "flex",
      padding: 10,
      backgroundColor: "#fff",
      position: "relative",
      boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
      [theme.breakpoints.down("md")]: {
        // display: "none",
        // width: "100%",
      },
    },
    CircleImageContainer: {
      width: "170px",
      height: "140px",
      outline: "hidden",
      overflow: "hidden",
      position: "absolute",
      left: "43%",
      top: -70,
      transition: "1s ease-in",

      [theme.breakpoints.down("md")]: {
        top: -80,
        left: "35%",
        transition: "1s ease-in",
      },
    },
    Title: {
      display: "flex",
      justifyContent: "space-between",
      padding: "30px 40px 10px 40px",
      overflow: "hidden",
      // backgroundColor: "#eee",
      borderRadius: "8px",
    },
    LeftTitleBody: {
      width: "70%",
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
    },
    RightTitleBody: {
      // width: "",
      // backgroundColor:'#000',
      display: "flex",
      justifyContent: "flex-end",
      height: "40px",
      alignItems: "center",
      justifyContent: "space-between",
    },
    CommentStarts: {
      color: "#ccc",
      fontSize: "14px",
      textDecoration: "underline",
      fontWeight: "600",
      marginTop: 5,
      marginRight: 5,
    },
    TitleText: {
      fontFamily: "Helvetica",
      fontSize: "28px",
      fontWeight: "700",
      color: "#000",
    },
    SubTitleText: {
      fontFamily: "",
      fontSize: "18px",
      fontWeight: "600",
      color: "gold",
    },
    BacYellow: {
      height: "8px",
      backgroundColor: "#FCD647",
      width: "140px",
      position: "absolute",
      top: 70,
      left: 40,
    },
    VoirPlus: {
      color: "#AAC840",
      textDecoration: "underline",
      cursor: "pointer",
      width: "150px",
    },
    body2: {
      color: "#000",
      marginTop: 20,
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: "Helvetica",
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "#d44",
        width: "140%",
        marginLeft: -20,
        fontSize: "13px",
        padding: "5px 7px",
        transition: "1s ease-in",
      },
      [theme.breakpoints.down("sm")]: {
        // backgroundColor: "#d44",
        width: "168%",
        marginLeft: -40,
        fontSize: "11px",
        padding: "5px 7px",
        transition: "1s ease-in",
      },
    },
    IconF: {
      color: "#485",
    },
    IconFV: {
      color: "#485",
      width: "60px",
      height: "40px",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#F8F8F8",
      [theme.breakpoints.down("xs")]: {
        // margin: "0px 0px 0 -20px ",
        // transition: "1s ease-in",
      },
    },
    IconB: {
      color: "#d478",
    },
    ContainerDetailsMenue: ({ actAppBare }) => {
      return {
        display: "flex",
        flexDirection: "column",
        padding: "10px 10px 0 10px",
        backgroundColor: "#fff",
        [theme.breakpoints.down("md")]: {
          margin: "10px 0px",
          width: "100%",
          padding: "5px",
        },
      };
    },
    private: {
      backgroundColor: "#485",
      margin: "0px 0px 0px -5px",
      color: "#000",
      width: "80%",
      "& .MuiTabs-indicator": {
        backgroundColor: "#e78",
      },
    },
    private2: {
      backgroundColor: "#485",
    },
    ContainerTitleBoxBody: {
      width: "100%",
      backgroundColor: "#transparent",
      alignSelf: "center",
      display: "flex",
      height: "60px",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
    },
    BoxBody: {
      width: "100%",
      backgroundColor: "#fff",
      height: "100%",
      display: "flex",
      alignItems: "center",
      color: "#aac840",
      fontSize: "18px",
      fontWeight: "600",
      padding: "10px 20px",
    },
    ContR: {
      position: "relative",
    },
    fixed: {
      position: "fixed",
      top: 0,
      backgroundColor: "#fff",
      width: "100%",
      zIndex: 100,
    },
    fixednull: {
      // position: "absolute",
      // top: 0,
      // left: 0,
      // zIndex: 50,
      // backgroundColor: "#fff",
    },
    BTNOpenABS: {
      position: "absolute",
      top: 0,
      right: 0,
      backgroundColor: "#5DBCA3",
      color: "#fff",
      borderRadius: "3px",
      cursor: "pointer",
      width: "35px",
      height: "35px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    RightCol: {
      height: "100vh",
      width: "20%",
      boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
      backgroundColor: "#ccc",
      position: "fixed",
      right: 0,
      zIndex: 10,

      [theme.breakpoints.down("lg")]: {
        // display: "none",
        width: "25%",
      },
      [theme.breakpoints.down("md")]: {
        // display: "none",
        width: "35%",
      },
      [theme.breakpoints.down("sm")]: {
        // display: "none",
        width: "55%",
      },
      [theme.breakpoints.down("xs")]: {
        // display: "none",
        width: "85%",
      },
    },
    containerHeaderShop: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      // backgroundColor: "#ccc",
      // overflowY: "scroll",
      // height: "90%",
    },
    BoxHeaderShop: {
      width: "100%",
      display: "flex",
      // backgroundColor: "#ccc",
      alignItems: "center",
      padding: 20,
    },
    Firstrow: {
      display: "flex",
      // backgroundColor: "#ddd",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 25,
    },
    row: {
      display: "flex",
      // backgroundColor: "#ddd",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    BoxHeader: {
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    rowDelete: {
      display: "flex",
      alignItems: "center",
      // backgroundColor: "#ccc",
      padding: "10px 0px",
      color: "#000",
      fontSize: "17px",
      fontWeight: "600",
      cursor: "pointer",
      marginBottom: "25px",
      padding: 10,
      width: "90%",
      boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",

      "&:hover ": {
        // backgroundColor: "red",
        color: "red",
        fontSize: "17px",
        padding: 10,
        boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
    },
    TitleDelete: {
      paddingLeft: 15,
    },
    Delete: {
      color: "red",
      marginLeft: 10,
      fontSize: 25,
      marginRight: "15px",
    },
    logoReturn: {
      backgroundColor: COLORS.PRIMARY,
      height: 40,
      width: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      cursor: "pointer",
    },
    imgReturn: {
      width: "80%",
      height: "80%",
    },
    TitleHeaderShop: {
      color: "#000",
      fontSize: 28,
      padding: 10,
      fontWeight: "600",
      fontFamily: "",
    },
    BoxHeaderShopBody: {
      width: "99%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#fff",
      border: "none",
      // height: "80%",
      // overflowY: "scroll",
      // overflowX: "hidden",
    },
    BoxHeaderShopBodyItems: {
      height: "53vh",
      overflowY: "scroll",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#fff",
      marginBottom: 10,
      width:'100%'
    },
    BoxMony: {
      backgroundColor: "#fff",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "absolute",
      bottom:90,
      right:0
    },
    RowST: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "5px 10px 5px 10px",
    },
    BTNM: {
      backgroundColor: "#5DBCA3",
      width: "100%",
      color: "#fff",
      fontSize: "18px",
      fontWeight: "600",
      margin: 5,
    },
    IconR: {
      fontSize: 41,
      margin: "60px 10px 10px 10px",
      color: "#485",
      opacity: 0.6,
    },
    TitllePanier: {
      fontSize: "22px",
      fontWeight: "700",
      fontFamily: "",
    },
    PanierText: {
      textAlign: "center",
      color: "#ccc",
    },
    OrderContainer: {
      maxWidth: "100%",
      display: "flex",
      // marginTop: 25,
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      overflowY: "scroll",
      height: "82vh",
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "#748",
        width: "100%",
        height: "80vh",
        backgroundColor: "#ccc",
      },
      [theme.breakpoints.down("lg")]: {
        // backgroundColor: "#748",
        width: "100%",
      },
    },

    AddClassOrder: {
      backgroundColor: "#fff",
      width: "90%",
      padding: "20px 90px",
      [theme.breakpoints.down("lg")]: {
        // backgroundColor: "#eee",
      },
    },
    TitileOrderOpen: {
      fontSize: "18px",
      fontWeight: "600",
      padding: "8px 10px",
    },
    BoxItemButtonAdd: {
      height: "80px",
      width: "100%",
      // backgroundColor: "#ccc",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    LeftItem: {
      width: "40%",
      // backgroundColor: "#789",
      marginRight: "15px",
      height: "58%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    RightItem: {
      width: "40%",
      // backgroundColor: "#789",
      [theme.breakpoints.down("xs")]: {
        // backgroundColor: "#eee",
        marginLeft: 35,
        transition: "1s ease-in",
      },
    },
    btnAjouter: {
      backgroundColor: "#485",
      color: "#fff",
      fontSize: "18px",
      width: "100%",
    },
    IconPlus: {
      backgroundColor: "#eee",
      width: "60px",
      margin: " 10px 20px",
      padding: "1px 0",
      height: "30px",
    },
    Wraper: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      // justifyContent: "center",
      paddingLeft: 0,
      // backgroundColor: "#ccc",
    },
    ItemOrderBOX: {
      display: "flex",
      justifyContent: "space-between",
      width: "49%",
      // marginBottom: 10,
      backgroundColor: "#F8F8F8",
      margin: "15px 0px 5px 5px",
      height: "136px",
      overflow: "hidden",
      border: " 1px solid #E5E5E7",

      [theme.breakpoints.down("md")]: {
        display: "flex",
        width: "90%",
        margin: "15px 10px 5px 10px",
        justifyContent: 'center',
        
      },
      [theme.breakpoints.down("lg")]: {
        display: "flex",
        width: "95%",
      },
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        width: "100%",
        margin: "15px 10px 5px 10px",

      },
    },
    BoxItemBody: {
      backgroundColor: "#cee",
      width: "100%",
    },
    ImageRightBoxDétails: {
      width: "25%",
      backgroundColor: "#F8F8F8",
    },
    imageDétails: {
      cursor: "pointer",
      width: "200px",
      height: "100%",
    },
    ItemOrderLeft: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      padding: 15,
      backgroundColor: "#F8F8F8",
    },
    TitleBoxOrder: {
      fontSize: 19,
      fontFamily: "",
      fontWeight: 600,
    },
    TextBoxOrder: {
      color: "#000",
      width: "100%",
      fontSize: 14,
      fontFamily: "",
      fontWeight: 400,
      opacity: 0.7,
    },
    PriceBoxOrder: {
      color: "#485",
      width: "50%",
      marginTop: 15,
      fontSize: 19,
      fontFamily: "",
      fontWeight: 800,
    },
    ButtonOrder: {
      height: "40px",
      width: 40,
      color: "#485",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    BoxCardShop: {
      // height: "110px",
      width: "90%",
      backgroundColor: "#F8F8F8",
      display: "flex",
      alignItems: "center",
      marginBottom: 10,
    },
    LeftCardShopItem: {
      backgroundColor: "#F8F8F8",
      width: "70%",
      height: "95%",
      margin: 5,
      display: "flex",
      alignItems: "center",
    },
    RightCardShopItem: {
      backgroundColor: "#F8F8F8",
      width: "28%",
      height: "95%",
      margin: 5,
    },
    RSIText: {
      color: "#000",
      fontSize: "18px",
      fontWeight: "600",
      marginTop: 10,
      marginLeft: 15,
    },
    BTS: {
      // backgroundColor: "#ccc",
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      marginTop: 25,
      padding: "0px 8px",
      cursor: "pointer",
    },
    BTS1: {
      backgroundColor: "#5DBCA3",
      width: "30px",
      // height: "40px",
      margin: "0px 2px 0px 0px",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontWeight: "bold",
    },
    NC: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      justifyContent: "center",
    },
    RowNc: {
      display: "flex",
      // backgroundColor: "#458",
    },
    RowNcText: {
      color: "#aac840",
      width: "40px",
      display: "flex",
      // alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      paddingTop: 10,
      fontSize: 18,
    },
    LeftRowNc: {},
    LeftRowNcTitle: {
      color: "#000",
      fontSize: "18px",
      fontWeight: "700",
      paddingTop: 10,
    },
    LeftRowNcTxt: {
      color: "#ccc",
      fontSize: "12px",
    },
    BottomNct: {
      // backgroundColor: "#425",
      padding: 5,
      display: "flex",
      paddingLeft: 40,
      color: "#AAC840",
      textDecoration: "underline",
      fontWeight: "600",
    },
    LinkTo: {
      cursor: "pointer",
      margin: "10px",
    },
  };
});
export default useStyles;

// #5DBCA3  Vert
// #AAC840 Vert clair
// #F8F8F8  gris blanc
