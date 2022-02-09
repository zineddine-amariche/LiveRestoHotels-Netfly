/** @jsxImportSource theme-ui */
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  BoxImageHandler: {
    backgroundColor: "#eee1",
    boxShadow: "none",
    width: "100%",
    height: "120vh",
    position: "fixed",
    top: "-15%",
    left: "0%",
    zIndex: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // overflowY: "hidden",
    overflow: "hidden",


    [theme.breakpoints.down("lg")]: {},
    "&:hover": {},
  },
  ImageHandeler: {
    width: "50%",
    height: "50%",
  },
  ImageStyles:{
      width:'100%',
      border:'none',
      borderRadius:20,
      cursor:"pointer"
  }
}));
export default useStyles;

// #5DBCA3  Vert
// #AAC840 Vert clair
// #F8F8F8  gris blanc
