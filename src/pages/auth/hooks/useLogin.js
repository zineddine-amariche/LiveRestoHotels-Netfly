/* eslint-disable */

/** @jsxImportSource theme-ui */

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import useStyles from "./styles/stylesLogin";
import axios from "axios";
import { useNavigate } from "react-router-dom";

setLocale(fr);
import {
  dispatchLogin,
  dispatchLoginError,
} from "../../../redux/actions/authAction";
import { LOGIN, LOGIN_FAILED } from "../../../redux/types/authTypes";
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
  })
  .required();
const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

export default function useLogin(FromClose) {
  // console.log('FromClose', FromClose)
  const classes = useStyles(FromClose);
  const theme = useTheme();
  const navigate = useNavigate();
  const xs = useMediaQuery(theme.breakpoints.down("xs"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const xlg = useMediaQuery(theme.breakpoints.down("xl"));

  const xsU = useMediaQuery(theme.breakpoints.up("xs"));
  const smU = useMediaQuery(theme.breakpoints.up("sm"));
  const mdU= useMediaQuery(theme.breakpoints.up("md"));
  const lgU = useMediaQuery(theme.breakpoints.up("lg"));
  const xlgU = useMediaQuery(theme.breakpoints.up("xl"));
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [authUser, setAuthUser] = useState(initialState);
  const [Faketoken, setFaketoken] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });


  const url = "https://dev500.live-resto.fr/api/customers/auth";

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    // console.log(`value`, value)
    setAuthUser({ ...authUser, [name]: value, err: "", success: "" });
  };
  let configHead = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
    },
  };
  const onSubmit = async (values) => {
    try {
      const res = await axios.post(url, values, configHead);
      // console.log("res", res);
      localStorage.setItem("Login", res.data.customer.id);
      localStorage.setItem("token", res.data.customer.token);
      dispatch({ type: LOGIN, payload: res.data.customer });
    } catch (error) {
      dispatch({ type: LOGIN_FAILED, payload: "email or password wrong" });
    }
  };
  return {
    classes,
    auth,
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    onSubmit,
    handleChangeInput,
    authUser,
    Faketoken,
    xs,
    sm,
    lg,
    xlg,
    md,
    xsU,
    smU,
    lgU,
    xlgU,
    mdU
  };
}
