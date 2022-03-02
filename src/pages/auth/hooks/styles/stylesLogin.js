/** @jsxImportSource theme-ui */
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

import { makeStyles } from "@material-ui/core/styles";

import background from "../../../../assets/page1.gif";

import FImage from "../../../../assets/unsplash_LR559Dcst70.svg";
import FImage2 from "../../../../assets/unsplash_2RrBE90w0T8.svg";
import FImage3 from "../../../../assets/unsplash_UC0HZdUitWY.svg";
import image1 from "../../../../assets/resto.gif";
import image3 from "../../../../assets/choix-plat.gif";
import image4 from "../../../../assets/sonnette.gif";
import image5 from "../../../../assets/gif-payement.gif";

const drawerWidth = "25%";

const useStyles = makeStyles((theme) => {
  return {
    drawerPaper: (FromClose) => {
      // console.log('FromClose..', FromClose)
      return {
        width: drawerWidth,
        padding: 10,
        display: "flex",
        backgroundColor: "#fff",
        [theme.breakpoints.down("lg")]: {
          width: "25%",
          display: "flex",
          backgroundColor: "#fff",
          display: "flex",
        },
        [theme.breakpoints.down("md")]: {
          width: "35%",
          display: "flex",
          backgroundColor: "#fff",
          display: "flex",
        },
        [theme.breakpoints.down("sm")]: {
          width: "40%",
          display: "flex",
          backgroundColor: "#fff",
        },
      };
    },
    ContainerLogin: {
      backgroundColor: "#fff",
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      margin: 0,
      padding: 0,
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
      },
    },
    LoginNotMatches: {
      // backgroundColor: "#edd",
      width: "80%",
    },
    loginCarousel: {
      height: "100vh",
      backgrouColor: "#000",
      width: "100%",
    },
    carouselImages: {
      height: "100vh",
    },
    circularProgress: {
      marginLeft: 0,
      marginRight: theme.spacing(1),
    },
    HoldBox: {
      height: "100%",
      justifyContent: "center",
      display: " flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "10px 0",
      // backgroundColor: "#eee",
    },
    boxPaper: {
      width: "100%",
      // backgroundColor: "#ccc",
      // display: "flex",
      // flexDirection: "column",
      // alignItems: "center",
      // justifyContent: "center",
      // height: "45vh",
      // marginBottom:60
      padding: "15px 0",
    },
    title: {
      fontWeight: "700",
      fontSize: "25px",
      width: "100%",
      fontFamily: "Playfair Display serif",
      // backgrouColor: "#087",
      width: "90%",
      padding: "20px",
      color: "#237a59",
    },
    textBOx: {
      fontSize: "20px",
      fontWeight: "600",
      padding: "15px 25px",
      fontFamily: "Playfair Display serif",
      backgroundColor: "#237a57",
      margin: 10,
      color: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    textBOx2: {
      fontSize: "18px",
      fontWeight: "600",
      padding: "15px 25px",
      fontFamily: "Playfair Display serif",
      margin: 10,
      color: "#000",
      opacity: 0.6,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
    },
    containerFab: {
      backgrouColor: "#ccc",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: "35px 10px 0 0",
    },
    inputStyles: {
      width: "100%",
      height: "83%",
      marginTop: "15px",
      "& .Mui-focused": {
        color: "#237a57",
        fontWeight: "bold",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: ".5px solid #ccc",
        },
        "&:hover fieldset": {
          border: "2px solid #237a57",
        },
        "&.Mui-focused fieldset": {
          border: "2px solid #237a57",
        },
      },
    },
    Heighter: {
      display: "flex",
      width: "100%",
      // backgroundColor: "#3cc",
    },

    ContainerPaperCarousel: {
      // backgroundColor: "#d3d",
      width: "75%",
      [theme.breakpoints.down("lg")]: {
        width: "75%",
      },
      [theme.breakpoints.down("md")]: {
        width: "65%",
        // backgroundColor: "#ccc",
      },
      [theme.breakpoints.down("sm")]: {
        // width: "0%",
        // backgroundColor: "#d3d",
        width: "60%",
      },
    },
    MenueBtn: {
      position: "absolute",
      right: 40,
      top: 40,
      zIndex: 20,
    },

    // BoxContainerForm:{
    //   backgroundColor: "#ccc",
    //   width: "25%",
    //   [theme.breakpoints.down("md")]: {
    //     width: "20%",
    //   backgroundColor: "#000",

    //   },
    // },

    BoxImage: {
      width: "30%",
      marginRight: 25,
      [theme.breakpoints.down("md")]: {
        width: "15%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "20%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "30%",
      },
    },
    ContainerLoginItems: {
      backgroundColor: "#e7e7e7",
      margin: "20px",
      width: "60%",
      height: "80vh",
      [theme.breakpoints.down("md")]: {
        backgroundColor: "#fff",
        width: "65%",
      },
      [theme.breakpoints.down("sm")]: {
        backgroundColor: "#fff",
        width: "50%",
      },
      [theme.breakpoints.down("xs")]: {
        backgroundColor: "#fff",
        width: "80%",
      },
    },
    ImageBoxContainer: {
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: ".5s ease-in",
      [theme.breakpoints.down("md")]: {
        backgroundColor: "#fff",
        marginBottom: 35,
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: 25,
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: 35,
      },
    },
    Abolute: {
      position: "absolute",
      zIndex: 150,
    },
    PaperConatinerSilder: {
      height: "100vh",
      backgroundColor: "#5dbca3",
      width: "100%",
      padding: 20,
      [theme.breakpoints.down("md")]: {
        padding: 10,
        with: "100%",
        // backgroundColor: "#796ddd",
      },
      [theme.breakpoints.down("sm")]: {
        padding: 1,
        // backgroundColor: "#796ddd",
      },
    },
    PaperConatinerSilder2: {
      height: "100vh",
      backgroundColor: "#aac840",
      width: "100%",
      padding: 20,
      [theme.breakpoints.down("sm")]: {
        padding: 5,
      // backgroundColor: "#aac",

      },
      [theme.breakpoints.down("lg")]: {
        padding: 5,
      },
    },
    BoxCenterContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "transparent",
      justifyContent: "space-between",
      [theme.breakpoints.down("lg")]: {
        width: "90%",
        // backgroundColor: "#796ddd",
        marginLeft: 40,
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        // backgroundColor: "#796ddd",
        margin: 0,
        padding:0
      },
      [theme.breakpoints.down("md")]: {
        width: "100%",
        // backgroundColor: "#796ddd",
        margin: 0,
        padding:0
      },
    },
    TextNumber: {
      fontFamily: "Oswald",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "100px",
      lineHeight: "148px",
      color: "#fff",
      minWidth: "193.93px",
      height: "155.78px",
      paddingLeft: 20,
      [theme.breakpoints.down("md")]: {
        fontSize: "80px",
        paddingLeft: 0,
        minWidth: "20px",
        height: "60px",
        // backgroundColor:'#c96',
        position: "absolute",
        top: 40,
        left: 15,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "50px",
        paddingLeft: 0,
        minWidth: "20px",
        height: "60px",
        // backgroundColor:'#c96',
        position: "absolute",
        top: -40,
        left: 15,
      },
    },
    TextNumberBottom: {
      fontFamily: "Oswald",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "100px",
      lineHeight: "148px",
      color: "#fff",
      minWidth: "193.93px",
      height: "155.78px",
      paddingLeft: 20,
      [theme.breakpoints.down("md")]: {
        fontSize: "80px",
        paddingLeft: 0,
        minWidth: "20px",
        height: "60px",
        // backgroundColor:'#c96',
        position: "absolute",
        top: -10,
        left: 15,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "50px",
        paddingLeft: 0,
        minWidth: "20px",
        height: "60px",
        // backgroundColor:'#c96',
        position: "absolute",
        top: -40,
        left: 15,
      },
    },
    TextNumberMidel: {
      fontFamily: "Oswald",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "100px",
      lineHeight: "148px",
      color: "#fff",
      minWidth: "193.93px",
      height: "155.78px",
      paddingLeft: 20,

      [theme.breakpoints.down("md")]: {
        fontSize: "80px",
        paddingLeft: 0,
        minWidth: "20px",
        height: "60px",
        // backgroundColor:'#c96',
        position: "absolute",
        top: -15,
        left: 15,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "50px",
        paddingLeft: 0,
        minWidth: "20px",
        height: "60px",
        // backgroundColor:'#c96',
        position: "absolute",
        top: -40,
        left: 5,
      },
    },
    TextInfo: {
      padding: 10,

      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "18px",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        width: "70%",
      },
    },
    TextInfoF: {
      padding: 10,

      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "18px",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        width: "100%",
      },
    },
    TextInfoF: {
      padding: 10,

      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "18px",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        width: "100%",
      },
    },
    TextInfoBottom: {
      padding: 10,

      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "18px",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        width: "90%",
        padding:'0px 15px 0px 10px'
      },
    },

    TextInfBig: {
      padding: 10,

      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "27.6px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "17px",
        padding: "10px 15px",
        width: "70%",
      },
    },
    TextInfBigBottom: {
      padding: 10,

      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "27.6px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "17px",
        padding: "10px 15px",
        width: "100%",
      },
    },
    TextTitle: {
      width: "486.29px",
      height: "75.66px",
      fontFamily: " Helvetica",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "64px",
      lineHeight: "74px",
      color: "#ffffff",
      [theme.breakpoints.down("md")]: {
        fontSize: "34px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "37px",
        padding: "10px 15px",
      },
    },

    TextTitleBottom: {
      width: "486.29px",
      height: "75.66px",
      fontFamily: " Helvetica",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "64px",
      lineHeight: "74px",
      color: "#ffffff",
      [theme.breakpoints.down("md")]: {
        fontSize: "34px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "37px",
        padding: "0px 10px",
      },
    },
    ContentText: {
      width: "445.28px",
      height: "170.7px",
      color: "#fff",
      paddingTop: "40px",
      [theme.breakpoints.down("lg")]: {
        width: "395.28px",
        height: "170.7px",
        paddingLeft: "30px",
        marginTop: 30,
        // backgroundColor: "#c99",

      },
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "#ccc",
        width: "395.28px",
        height: "170.7px",
        paddingLeft: "30px",
        marginTop: 30,
      },
      [theme.breakpoints.down("sm")]: {
        // backgroundColor: "#999",
        width: "295.28px",
        height: "100%",
        paddingLeft: "30px",
      },
    },
    ContentTextBottom: {
      width: "445.28px",
      height: "170.7px",
      color: "#fff",
      paddingTop: "40px",
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "#ccc",
        width: "395.28px",
        height: "170.7px",
        paddingLeft: "20px",
        marginTop: 30,
      },
      [theme.breakpoints.down("sm")]: {
        // backgroundColor: "#d45",
        width: "35vw",
        height: "100%",
        paddingLeft: "5px",
      },
    },

    ContentTextMidel: {
      width: "445.28px",
      height: "170.7px",
      color: "#fff",
      paddingTop: "40px",
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "#ccc",
        width: "395.28px",
        height: "170.7px",
        paddingLeft: "30px",
        marginTop: 30,
      },
      [theme.breakpoints.down("sm")]: {
        // backgroundColor: "#ddd",
        width: "295.28px",
        height: "100%",
        paddingLeft: "20px",
        paddingTop: "10px",
      },
    },
    ContentTextMidels: {
      width: "50%",
      color: "#fff",
      paddingTop: "40px",
      height: "70%",
      paddingLeft: "30px",
      marginTop: 0,
      // backgroundColor: "#ccc",

      [theme.breakpoints.down("lg")]: {
        // backgroundColor: "#ccc",
        width: "395.28px",
        height: "70%",
        paddingLeft: "30px",
        marginTop: 0,
      },
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "#ccc",
        width: "395.28px",
        height: "70%",
        paddingLeft: "30px",
        marginTop: 30,
      },
      [theme.breakpoints.down("sm")]: {
        // backgroundColor: "#ddd",
        width: "100%",
        height: "70%",
        paddingLeft: "2px",
        paddingTop: "10px",
      },
    },
    LeftSlid: {
      display: "flex",
      backgroundColor: "transparent",
      height: "40vh",
      [theme.breakpoints.down("md")]: {
        height: "30vh",
        width: "100%",
        paddingBottom: 10,
      },
      [theme.breakpoints.down("sm")]: {
        // flexDirection: "column",
        // backgroundColor: '#ced',
        width: "90%",
        height: "100%",
      },
    },
    LeftSlidBottom: {
      display: "flex",
      backgroundColor: "transparent",
      height: "40vh",
      [theme.breakpoints.down("md")]: {
        height: "40vh",
        paddingBottom: 10,
        // backgroundColor: '#c365ed',

      },
      [theme.breakpoints.down("sm")]: {
        // flexDirection: "column",
        // backgroundColor: '#ced',
        width: "100%",
        height: "100%",
      },
    },
    LeftSlidMidle: {
      display: "flex",
      backgroundColor: "transparent",
      height: "40vh",
      alignItems: "baseline",
      paddingLeft: 0,
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },
    LeftSlid2: {
      display: "flex",
      backgroundColor: "transparent",
      height: "40vh",
      [theme.breakpoints.down("sm")]: {
        // backgroundColor: "#666",
        // display: "flex",
        height: "100%",
        width: "100%",
        // justifyContent: 'center',
        // alignItems: 'center',
      },
    },
    RowTitles: {},
    BoxImageGif: {
      width: "279.78px",
      height: "279.78px",
      backgroundImage: "url(" + background + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      [theme.breakpoints.down("lg")]: {
        width: "220.78px",
        height: "200.78px",
        marginTop: 30,
        // backgroundColor: "#c99",

      },
      [theme.breakpoints.down("md")]: {
        width: "209.78px",
        height: "209.78px",
        marginTop: 30,
      },
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        // backgroundColor: "#c99",
        width: "153.78px",
        height: "171.78px",
        marginRight: 20,
      },
    },
    BoxImageGif2: {
      minWidth: "279.78px",
      height: "279.78px",
      backgroundImage: "url(" + image1 + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      [theme.breakpoints.down("sm")]: {
        // minWidth: "379.78px",
        display: "flex",
      },
      [theme.breakpoints.down("md")]: {
        minWidth: "209.78px",
        height: "209.78px",
      },
    },
    BoxImageGif3: {
      minWidth: "279.78px",
      height: "279.78px",
      backgroundImage: "url(" + image3 + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      marginBottom: 100,
      backgroundColor: "transparent",
      marginLeft: 86,
      marginTop: "5%",
      [theme.breakpoints.down("md")]: {
        marginLeft: -16,
        minWidth: "179.78px",
        height: "179.78px",
        marginBottom: "5px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "179.78px",
        height: "179.78px",
        // backgroundColor: "#eee",
        marginLeft: -30,
        marginBottom: 0,
      },
    },

    BoxImageGif4: {
      minWidth: "279.78px",
      height: "279.78px",
      backgroundImage: "url(" + image5 + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      marginBottom: 100,
      backgroundColor: "transparent",
      marginLeft: 36,
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        // backgroundColor: "#ccc",
      },
      [theme.breakpoints.down("lg")]: {
        minWidth: "190.78px",
        height: "179.78px",
        marginTop: 61,
        // backgroundColor: "#ccc",
        marginRight:70
      },
      [theme.breakpoints.down("md")]: {
        minWidth: "140.78px",
        height: "149.78px",
        marginTop: 61,
        // backgroundColor: "#ccc",
        marginRight:70
      },
    },
    BoxImageGif5: {
      minWidth: "279.78px",
      height: "279.78px",
      backgroundImage: "url(" + image4 + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      marginBottom: 100,
      backgroundColor: "transparent",
      marginLeft: 86,
      [theme.breakpoints.down("sm")]: {
        display: "flex",
      },
      [theme.breakpoints.down("md")]: {
        minWidth: "179.78px",
        height: "179.78px",
        marginLeft: 36,
        marginTop:60
      },
    },
    ImagesSlideHor: {
      backgroundColor: "transparent",
      width: "80%",
      height: 400,
      position: "absolute",
      top: "50%",
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "#d0dd",
        width: "98%",
        marginTop: 25,
      },
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "#d0dd",
        width: "98%",
        marginTop: 55,
        flexDirection: "column",
      },
    },
    BoxTopSlid: {
      width: "95%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "transparent",
      marginTop: 80,
      paddingRight: 45,
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "#999",
        paddingRight: 0,
        marginTop: "25px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        flexDirection: "row",
        height: "50vh",
      },
      [theme.breakpoints.down("sm")]: {
        paddingRight: 0,
        marginTop: "50px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        flexDirection: "row",
        height: "50vh",
      },
    },
    BoxBottomSlid: {
      width: "95%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "transparent",
      marginTop: 80,
      paddingRight: 45,
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "#999",
        paddingRight: 0,
        marginTop: "25px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        flexDirection: "row",
        height: "50vh",
      },
      [theme.breakpoints.down("sm")]: {
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        flexDirection: "row",
        height: "50%",
        // backgroundColor: "#222",
        margin:'10px 0px',
        overflow:"hidden"
      },
    },
    BoxTopSlidMidle: {
      width: "90%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "transparent",
      marginTop: 80,
      paddingRight: 45,
      // backgroundColor: "#333",

      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 50,
        height: "45%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginTop: 5,
        height: "49%",
        // backgroundColor: "#333",
      },
    },
    BoxTopSlid2: {
      position: "relative",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "transparent",
      width: "90%",
      height: "45%",
      display: "flex",
      flexDirection: "row",
      margin: "2px 0px 50px 0px",
      // backgroundColor: "#111",

      [theme.breakpoints.down("lg")]: {
        width: "100%",
        height: "45%",
        display: "flex",
        flexDirection: "row",
        marginTop: 2,
        margin: "0px 0px 50px 0px",
      },
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "#111",
        width: "100%",
        height: "45%",
        display: "flex",
        flexDirection: "row",
        marginTop: 2,
        margin: "0px 0px 50px 0px",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "row",
        marginTop: 2,
        // backgroundColor: "#000",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "space-between",
      },
    },
    BoxTopSlid2Bottom: {
      position: "relative",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "transparent",
      width: "90%",
      height: "45%",
      display: "flex",
      flexDirection: "row",
      margin: "2px 0px 50px 0px",
      // backgroundColor: "#111",

      [theme.breakpoints.down("lg")]: {
        width: "100%",
        height: "45%",
        display: "flex",
        flexDirection: "row",
        marginTop: 2,
        margin: "0px 0px 50px 0px",
      },
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "#111",
        width: "100%",
        height: "45%",
        display: "flex",
        flexDirection: "row",
        marginTop: 2,
        margin: "0px 0px 50px 0px",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "row",
        marginTop: 2,
        // backgroundColor: "#000",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "space-between",
      },
    },
    LeftItemsSTEP: {
      [theme.breakpoints.down("sm")]: {
        // flexDirection: "row-reverse",
        // marginTop: 2,
        backgroundColor: "#fff",
        // overflow:'hidden',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        minWidth: "30vw",
        height: "90%",
        margin: "0px 0px 0px 100px",
      },
    },
    FirstImageH: {
      background:
        "linear-gradient(180deg, rgba(0, 0, 0, 0) 60.73%, rgba(0, 0, 0, 0.8) 100%)",
      borderRadius: "5px",
      width: "25%",
      margin: "40px 10px",
      backgroundImage: "url(" + FImage + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position: "relative",
      [theme.breakpoints.down("md")]: {
        width: "98%",
        // backgroundColor: "#ccc",
        height: "13vh",
        margin: "5px 0px 10px 0px",
        alignItems: "center",
        justifyContent: "center",
      },
      [theme.breakpoints.down("sm")]: {
        width: "98%",
        // backgroundColor: "#ccc",
        height: "13vh",
        margin: "5px 0px 10px 0px",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    FirstImageH2: {
      background:
        "linear-gradient(180deg, rgba(0, 0, 0, 0) 60.73%, rgba(0, 0, 0, 0.8) 100%)",
      borderRadius: "5px",
      width: "25%",
      margin: "40px 10px",
      backgroundImage: "url(" + FImage2 + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position: "relative",
      [theme.breakpoints.down("md")]: {
        width: "98%",
        // backgroundColor: "#ccc",
        height: "13vh",
        margin: "5px 0px 10px 0px",
        alignItems: "center",
        justifyContent: "center",
      },
      [theme.breakpoints.down("sm")]: {
        width: "98%",
        // backgroundColor: "#ccc",
        height: "13vh",
        margin: "5px 0px 10px 0px",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    FirstImageH3: {
      background:
        "linear-gradient(180deg, rgba(0, 0, 0, 0) 60.73%, rgba(0, 0, 0, 0.8) 100%)",
      borderRadius: "5px",
      width: "25%",
      margin: "40px 10px",
      backgroundImage: "url(" + FImage3 + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position: "relative",
      [theme.breakpoints.down("md")]: {
        width: "98%",
        // backgroundColor: "#ccc",
        height: "13vh",
        margin: "5px 0px 10px 0px",
        alignItems: "center",
        justifyContent: "center",
      },
      [theme.breakpoints.down("sm")]: {
        width: "98%",
        // backgroundColor: "#ccc",
        height: "13vh",
        margin: "5px 0px 10px 0px",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    TextNomPlat: {
      position: "absolute",
      left: "39%",
      right: "0%",
      top: "78.18%",
      bottom: "0%",
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "18px",
      lineHeight: "21px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      color: "#fff",
      textShadow: "1px 2px 3px #000",
    },
    BoxContainerHold: {
      height: "60vh",
      // backgroundColor: "#ccc",
    },
    HoldBoxSec: {
      justifyContent: "center",
      display: " flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "10px 10px",
      backgroundColor: "#fff",
    },
    InputContainer: {
      display: "flex",
      flexDirection: "column",
    },

    spanError: {
      color: "red",
    },
    LangContainer: {
      // backgroundColor: "#ddd",
      display: "flex",
      justifyContent: "flex-end",
      margin: 10,
    },
  };
});

export default useStyles;
