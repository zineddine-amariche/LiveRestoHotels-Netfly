import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DataProvider from "../src/redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n/i18n";
import Loading from "./components/Loading/Loading";
import "simplebar/dist/simplebar.min.css";
import { Box } from "@material-ui/core";

ReactDOM.render(
  <Suspense
    fallback={
      <Box
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loading />
        <Box style={{ fontFamily: "", fontWeight: 600 }}>Chargement ...</Box>
      </Box>
    }
  >
    <DataProvider>
      <App />
    </DataProvider>
  </Suspense>,
  document.getElementById("root")
);
