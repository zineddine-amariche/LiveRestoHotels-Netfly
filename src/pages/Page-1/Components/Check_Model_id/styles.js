/** @jsxImportSource theme-ui */
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  Title: {
    fontSize: 25,
    fontFamily: "Realway",
    fontWeight: "600",
    color: "#f00",
  },
  Table: {
    display: "flex",
    // backgroundColor: "#fff",
    width: "100%",
    // justifyContent: "space-between",
    padding: 10,
    fontSize: 16,
    fontWeight: 600,
  },
  TableBody: {
    display: "flex",
    backgroundColor: "#e7e7e7",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    fontSize: 16,
    fontWeight: 600,
    margin: "15px 0",
  },
  Header: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    margin: "10px 0px",
    padding: 10,
  },
  bodyText: {
    padding: "20px 20px 40px 20px",
    color: "#000",
    fontSize: 18,
    fontWeight: 600,
  },
  item: {
    //   backgroundColor: "#eee",
    //   marginRight:15,
    width: "20%",
  },
  Body: {
    overflowY: "scroll",
  },
}));
export default useStyles;
