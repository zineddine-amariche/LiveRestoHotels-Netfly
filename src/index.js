import React ,{Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DataProvider from "../src/redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n/i18n'; 
import Loading from "./components/Loading/Loading"

ReactDOM.render(
  <Suspense fallback={<Loading />}>
      <DataProvider>
        <App />
      </DataProvider>
  </Suspense>,
  document.getElementById("root")
);
