import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";

setLocale(fr);

const schema = yup
  .object({
    fullName: yup.string().email().required(),
    voucher_code: yup.number().min(5).required(),
    phone: yup.number().min(10).required(),
    apartement: yup.string().min(10).required(),
  })
  .required();

export function useValidation(
  Hotel,
  orderState,
  billaddress,
  Products,
  Payments
) {
  const [hotel, setValues] = useState(Hotel);
  const [order, setOrder] = useState(orderState);
  const [bill, setbillEmail] = useState("");
  const [code, setCode] = useState(false);

  const [products, setProducts] = useState(Products);
  const [payments, setPayments] = useState(Payments);
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handelChange = (e) => {
    setValue(e.target.value);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...hotel,
      [name]: value,
    });
  };
  const handleInputChangebillEmail = (e) => {
    const { name, value } = e.target;
    setbillEmail(e.target.value);
    // ...bill,
    // [name]: value,
  };
  const handleInputChangeOrder = (e) => {
    const { name, value } = e.target;
    setOrder({
      ...order,
      [name]: value,
    });
  };
  const handleInputChangeOrderProducts = (e) => {
    const { name, value } = e.target;
    setProducts({
      ...Products,
      [name]: value,
    });
  };
  const handleInputChangeOrderPayements = (e) => {
    const { name, value } = e.target;
    setPayments({
      ...payments,
      [name]: value,
    });
  };
  const HandelCode = () => {
    setCode(!code);
    console.log(`code`, code);
  };

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log(data);
    await dispatch({ type: "LOGIN_REQUEST", payload: data });
  };

  const navigateToSuccess = () => {
    navigate("/succes");
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    onSubmit,
    handleInputChange,
    hotel,
    setValues,
    code,
    HandelCode,
    handleInputChangeOrder,
    order,
    setOrder,
    handleInputChangebillEmail,
    bill,
    setProducts,
    setPayments,
    products,
    payments,
    handleInputChangeOrderProducts,
    handleInputChangeOrderPayements,
    value,
    handelChange,
    dispatch,
    navigateToSuccess,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "95%",
      margin: theme.spacing(1),
    },
  },
}));
// export function Forms(props) {
//   const classes = useStyles();
//   const { children, ...other } = props;
//   return (
//     <Formik className={classes.root} autoComplete="off" {...other}
//     initialValues={order}>
//       {(formik) => {
//         console.log("formik", formik);
//         return [children];
//       }}
//     </Formik>
//   );
// }
