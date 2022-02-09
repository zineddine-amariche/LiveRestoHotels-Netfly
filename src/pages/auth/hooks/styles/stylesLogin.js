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

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
    padding: 10,
    display: "flex",
  },
  ContainerLogin: {
    backgroundColor: "#fff",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  LoginNotMatches: {
    backgroundColor: "#edd",
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
  },
  boxPaper: {
    width: "100%",
    // backgroundColor: "#ccc",
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    height: "45vh",
    // marginBottom:60
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
    maxHeight: "100vh",
    display:'flex',
    justifyContent:'space-between',
    width:"100%"
  },

  ContainerPaperCarousel: {
    backgroundColor: "#000",
    width: "75%",
  },
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
    width: "50%",
    [theme.breakpoints.down("md")]: {
      backgroundColor: "#fff",
      width: "55%",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#fff",
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "#fff",
      width: "90%",
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
  },
  PaperConatinerSilder2: {
    height: "100vh",
    backgroundColor: "#aac840",
    width: "100%",
    padding: 20,
  },
  BoxCenterContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "transparent",
    // backgroundColor: "#aac840",
    // backgroundColor: "#ccc",

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
  },
  TextInfo: {
    padding: 10,

    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "18px",
  },

  TextInfBig: {
    padding: 10,

    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "27.6px",
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
  },
  ContentText: {
    width: "445.28px",
    height: "170.7px",
    color: "#fff",
    paddingTop: "40px",
  },
  LeftSlid: {
    display: "flex",
    backgroundColor: "transparent",
    height: "40vh",
    // alignItems: "center",
    // backgroundColor: "#d47",
  },
  LeftSlidMidle:{
    display: "flex",
    backgroundColor: "transparent",
    height: "40vh",
    alignItems: "baseline",
    paddingLeft: 0,
  },
  LeftSlid2: {
    display: "flex",
    backgroundColor: "transparent",
    height: "40vh",
  },
  RowTitles: {},
  BoxImageGif: {
    width: "279.78px",
    height: "279.78px",
    backgroundImage: "url(" + background + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  BoxImageGif2: {
    minWidth: "279.78px",
    height: "279.78px",
    backgroundImage: "url(" + image1 + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
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
  },

  BoxImageGif4: {
    minWidth: "279.78px",
    height: "279.78px",
    backgroundImage: "url(" + image4 + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginBottom: 100,
    backgroundColor: "transparent",
    marginLeft: 36,
  },
  BoxImageGif5: {
    minWidth: "279.78px",
    height: "279.78px",
    backgroundImage: "url(" + image5 + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginBottom: 100,
    backgroundColor: "transparent",
    marginLeft: 86,
  },
  ImagesSlideHor: {
    backgroundColor: "transparent",
    width: "80%",
    height: 400,
    position: "absolute",
    top: "50%",
    display: "flex",
    justifyContent: "center",
  },
  BoxTopSlid: {
    width: "95%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    marginTop: 80,
    // backgroundColor: "#ddd",
    paddingRight: 45,
  },
  BoxTopSlidMidle:{
    width: "97%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    marginTop: 80,
    // backgroundColor: "#ccc",
    paddingRight: 45,
  },
  BoxTopSlid2: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    marginTop: 20,
    width: "95%",
    // backgroundColor: "#ccc",
    padding:'0px 30px'

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
  BoxContainerHold:{
    height: "60vh",
    // backgroundColor: "#ccc",

  },
  HoldBoxSec:{
    justifyContent: "center",
    display: " flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 10px",
    backgroundColor: "#fff",
  }
}));

export default useStyles;
