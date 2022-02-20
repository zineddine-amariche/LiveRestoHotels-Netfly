import * as React from "react";
import Box from "@mui/material/Box";
import DétailsMenus from "./DétailsMenus";
import { useSelector } from "react-redux";
import Loading from "../../../../../components/Loading/Loading";
import { Paper } from "@material-ui/core";
import useStyles from "../../../stylesDetails";

export default function LabTabs(props) {
  const restoOne = useSelector((state) => state.Restaurant);
  const { OneResto } = restoOne;
  const { categories } = OneResto;
  const { loading,actAppBare } = props;
  const classes = useStyles();
  return (
    <Paper elevation={0} >
      {loading ? (
        <Box>
          <DétailsMenus categories={categories} />
        </Box>
      ) : (
        <Box
          style={{
            width: "100%",
            height: "35vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loading />
          <Box style={{ fontFamily: "", fontWeight: "600", color: "#237a59" }}>
            Chargement ...
          </Box>
        </Box>
      )}
    </Paper>
  );
}
