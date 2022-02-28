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
    CARDBUTTON: {
      position: "fixed",
      bottom: -10,
      left: 0,
      backgroundColor: "#fff",
      width: "100%",
      height: "8vh",
      display: "flex",
      padding: 10,
    },
    BtnContainer: {
      backgroundColor: "#5dbca3",
      margin: "5px",
      fontSize: "22px",
      color: "#fff",
      fontWeight: "700",
      "& hover": {
        backgroundColor: "#5dbca3",
      },
    },
    Icon: {
      fontSize: "22px",
      color: "#fff",
      fontWeight: "700",
    },
  };
});
export default useStyles;

// #5DBCA3  Vert
// #AAC840 Vert clair
// #F8F8F8  gris blanc
