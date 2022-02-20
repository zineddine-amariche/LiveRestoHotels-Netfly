/** @jsxImportSource theme-ui */
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
// #5DBCA3  Vert
// #AAC840 Vert clair
// #F8F8F8  gris blanc

import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../../../../utils/theme";

const useStyles = makeStyles((theme) => ({
  ContainerValidation: {
    // backgroundColor: "#eee",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    overflowY: "scroll",
    height: "80%",

    [theme.breakpoints.down("lg")]: {},
    "&:hover": {},
  },
  InformationTitre: {
    color: COLORS.PRIMARY,
    fontSize: "18px",
    fontWeight: "700",
    paddingLeft: 10,
  },
  DetailsPersonnel: {
    // padding: 20,
    backgroundColor: "#fff",
    with: "100%",
  },
  Dates: {
    padding: 20,
    display: "flex",
  },
  ModePaiement: {
    width: "100%",
  },
  Select: {
    width: "90%",
    display: "flex",
    alignSelf: "center",
    marginLeft: 15,
  },
  SelectionerText: {
    fontSize: "14px",
    padding: "20px",
    fontWeight: "500",
  },
  Remarques: {
    width: "100%",
    marginTop: 25,
  },
  ContainerTextArea: {
    // width:"90%"
    margin: 10,
  },
  BTNM: {
    backgroundColor: "#5DBCA3",
    color: "#fff",
    fontSize: "17px",
    fontWeight: "600",
    margin: "5px 5px",
    width: "90%",
    padding: 10,
    // marginRight: ,
  },
  Container: {
    width: "100%",
    margin: 5,
  },
  circularProgress: {
    marginLeft: 10,
    // marginRight: theme.spacing(1),
  },
  dateContainer: {
    // backgroundColor: "#ccc",
    width: "100%",
    marginTop: 10,
  },
  DatesMap: {
    // backgroundColor: "#ccc",
    display: "flex",
    alignItems: "center",
  },
  DatesContainer: {
    display: "flex",
    color: "#000",
    fontSize: "16px",
    fontWeight: "600",
  },
  InformationItem: {
    margin: 5,
    fontSize: "16px",
    fontWeight: "600",
  },
  BoxRadio: {
    // backgroundColor: "#ccc",
    margin: "10px",
    width: "90%",
    display: "flex",
    flexWrap: "wrap",
  },
  dataHeursReson: {
    padding: 25,
    color: "red",
    marginTop: -30,
  },
  spanError: {
    color: "#f00",
    width: "100%",
    display: "flex",
    marginBottom: 4,
    fontFamily: "",
  },
  IndexPanier: {
    backgroundColor: "#fff",
    width: "98%",
    height: "82%",
    marginTop: -15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "scroll",
    overflowX: "hidden",
  },
  FormikHotelInfo: {
    width: "100%",
  },
  FormikHotelInfoForm: {
    width: "100%",
    margin: 4,
  },
  Field: {
    width: "100%",
    // margin: 15,
    display: "flex",
    flexDirection: "column",
  },
  rowInputs: {
    display: "flex",
    width:"100%",
    backgroundColor: "#eee",
    alignItems: 'center',
  },
  ReactFlagsSelect:{
    width:'70px',
    border:"1px solid #eee"
  },
  FormControleCheckBox: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ccc",
  },
  BoxColumnCheck: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    // backgroundColor: '#cecc',
  },
  FormItemsPaiements: {
    padding: 20,
  },
  checkBoxItem: {
    width: 20,
    height: 20,
    marginRight: 15,
    color: "#5DBCA3",
    "&$checked ": {
      color: "#5DBCA3",
    },
  
  },
  rowItemBoxes: {
    display: "flex",
    alignItems: "center",
    justifyContent: "star",
    width: "100%",
    margin: "5px 0",
    justifyContent: "space-between",
  },
  LeftInputItem: {
    width: "50%",
  },
  ItemRight: {
    display: "flex",
    alignItems: "center",
  },
  Inpt: {
    width: "70%",
    paddingLeft: 5,
  },
  labelCheck: {
    fontWeight: 700,
  },
}));
export default useStyles;
