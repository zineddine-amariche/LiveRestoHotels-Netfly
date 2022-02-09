import { Button, CircularProgress, Paper } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { submitValidation } from "../../../../redux/actions/validation/actionValidation";
import Dates from "./components/Dates";
import DetailsPersonnel from "./components/DetailsPersonnel";
import ModePaiment from "./components/ModePaiment";
import Remarques from "./components/Remarques";
import { useValidation } from "./Hooks/useValidation";
import useStyles from "./styles";
import { Form, Field, Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import * as Yup from "yup";

let Hotel = {
  fullName: "",
  phone: "",
  apartement: "",
};
let billaddress = {};

let Products = "";
let Payments = "";

let orderState = {
  customer_id: "",
  establishment_id: "",
  for_when: "",
  delivery_address_id: "",
  bill_address_id: "",
  voucher_code: "",
  use_loyalty: "",
  comment: "",
  origin_id: "",
  total: "",
};

function ValidationForm(props) {
  const { closeValidate } = props;
  const classes = useStyles();
  let params = useParams();
  let { id } = params;
  const state = useSelector((state) => state.handleCart);
  const auth = useSelector((state) => state.auth);
  const Validate = useSelector((state) => state.Validate);
  const { data, token } = auth;
  const { customer } = data;
  const [hotel, setdata] = useState(Hotel);

  // console.log("Validate.Validate", Validate.loading);
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    order,
    onSubmit,
    handleInputChange,
    setOrder,
    code,
    HandelCode,
    handleInputChangeOrder,
    handleInputChangebillEmail,
    bill,
    products,
    setProducts,
    payments,
    setPayments,
    value,
    handelChange,
    dispatch,
    navigateToSuccess,
  } = useValidation(Hotel, orderState, billaddress, Products, Payments);

  const Resto = useSelector((state) => state.Restaurants);
  const { Delivery } = Resto;

  let sum = 0;
  let all = 0;
  state.map((i) => {
    sum += i.quantity * i.price;
    all = sum + Delivery;
  });

  const handelTotal = () => {
    customer &&
      setOrder({
        ...order,
        ["total"]: all.toFixed(2),
        ["establishment_id"]: id,
        ["origin_id"]: customer.origin_id,
        // ["origin_id"]: 2,
        ["customer_id"]: customer.id,
        ["profile_id"]: customer.profile_id,
        ["use_loyalty"]: customer.loyalty,
        ["bill_address_id"]: 14808,
        ["delivery_address_id"]: 14808,
      });
  };
  const HandelProducts = () => {
    customer &&
      setProducts(
        state.map((i) => ({
          id: i.id,
          quantity: i.quantity,
          comment: null,
          extras: null,
        }))
      );
  };
  const HandelPayments = () => {
    customer &&
      setPayments([
        {
          id: value,
          amount: all.toFixed(2),
        },
      ]);
  };
  const HandelHotel = (values) => {
    setdata(values);
  };
  useEffect(() => {
    handelTotal();
    HandelProducts();
    HandelPayments();
  }, [sum, state, value]);

  let orders = {
    hotel,
    order: {
      customer_id: order.customer_id,
      establishment_id: order.establishment_id,
      for_when: order.for_when,
      delivery_address_id: order.delivery_address_id,
      bill_address_id: order.bill_address_id,
      voucher_code: order.voucher_code,
      use_loyalty: order.use_loyalty,
      comment: order.comment,
      origin_id: order.origin_id,
      total: order.total,
      payments,
      products,
    },
    bill: bill,
  };
  // console.log("orders", orders);

  const Token = localStorage.getItem("token");

  let configHead = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
      Authorization: `Bearer ${Token}`,
    },
  };
  const lengthRegEx = /(?=.{8,})/;
  const phoneRegex =
    /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;

  let validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(8, "fullName is too short - should be 8 chars Minimum.")
      .max(35, "fullName is too long - should be 35 chars Maximum.")
      .matches(lengthRegEx, "Must contain at least 8 characters!")
      .required("fullName is required"),

    phone: Yup.string()
      .min(10, "Numéro téléphone is too short - should be 10 number Minimum.")
      .matches(phoneRegex, "Must Valide number!")
      .required("Numéro téléphone is required"),

    apartement: Yup.number()
      .max(2, "Numéro apartement is too long - should be 2 number Maximum.")
      .required("Numéro apartement is required"),
    voucher_code: Yup.string().min(
      4,
      "voucher_code,is too short - should be 4 characters Minimum "
    ),
  });
  const Hours = useSelector((state) => state.Hours);
  // console.log("dataHotel", hotel);
  return (
    <Paper className={classes.IndexPanier} elevation={0}>
      {/* Hotel Info client */}
      <Formik
        className={classes.FormikHotelInfo}
        initialValues={hotel}
        validationSchema={validationSchema}
      >
        {(formik) => {
          // console.log("formik", formik);
          HandelHotel(formik.values);
          return [
            <Form
              autoComplete="on"
              name="hotel"
              className={classes.FormikHotelInfoForm}
            >
              <DetailsPersonnel
                formik={formik}
                code={code}
                order={order}
                HandelCode={HandelCode}
              />
            </Form>,
          ];
        }}
      </Formik>
      <Dates handleInputChangeOrder={handleInputChangeOrder} order={order} />

      <ModePaiment handelChange={handelChange} value={value} />
      <Remarques
        handleInputChangeOrder={handleInputChangeOrder}
        order={order}
        register={register}
        handleInputChangebillEmail={handleInputChangebillEmail}
        billaddress={billaddress}
      />
      {Validate.error && (
        <span className={classes.spanError}>{Validate.error.message}</span>
      )}
      <Button
        // disabled={auth.loading || isSubmitting}
        type="submit"
        fullWidth
        variant="contained"
        className={classes.BTNM}
        onClick={() => {
          submitValidation(
            dispatch,
            orders,
            configHead,
            closeValidate,
            navigateToSuccess
          );
        }}
        disabled={Hours.data.reason ? true : false}
        disabled={hotel.fullName.length >= 8 ? false : true}
        disabled={hotel.phone.length > 10 ? false : true}
        disabled={hotel.apartement ? false : true}
      >
        {/* {auth.loading && ( */}
        {/* )} */}
        Passer ma commande
        {Validate.loading && (
          <CircularProgress
            color="black"
            className={classes.circularProgress}
            size={20}
          />
        )}
      </Button>
    </Paper>
  );
}

export default ValidationForm;
{
  /* <DetailsPersonnel
hotel={hotel}
handleInputChange={handleInputChange}
register={register}
code={code}
HandelCode={HandelCode}
handleInputChangeOrder={handleInputChangeOrder}
order={order}
bill={bill} */
}
// />
// <Formik
// initialValues={{
//   hotel,
// }}
// validationSchema={validationSchema}
// >
// {(formik) => {
//   // console.log("formik", formik);
//   // console.log("formik.hotel", formik.values.hotel);

//   return [
//     <Form
//       className={classes.ContainerValidation}
//       autoComplete="on"
//       style={{ margin: 40 }}
//       name="hotel"
//     >
//       <DetailsPersonnel
//         hotel={hotel}
//         handleInputChange={handleInputChange}
//         register={register}
//         errors={formik.errors}
//         code={code}
//         HandelCode={HandelCode}
//         handleInputChangeOrder={handleInputChangeOrder}
//         order={order}
//         bill={bill}
//         data={formik.values}
//         handleChange={formik.handleChange}
//       />
//     </Form>,
//   ];
// }}
// </Formik>
// .matches(specialsRegEx, "Must contain one special caracter")

// .matches(
//   lowercaseRegEx,
//   "Must contain one lowercase alphabetical character!"
// )
// .matches(
//   uppercaseRegEx,
//   "Must contain one uppercase alphabetical character!"
// )
// .matches(numericRegEx, "Must contain one numeric character!")

// confirmPassword: Yup.string()
//   .required("Confirm password is required")
//   .oneOf([Yup.ref("password")], "Passwords does not match"),
{
  /* {auth.error && <Alert severity="error">{auth.error}</Alert>} */
}

// <DetailsPersonnel
// hotel={hotel}
// handleInputChange={handleInputChange}
// register={register}
// errors={errors}
// code={code}
// HandelCode={HandelCode}
// handleInputChangeOrder={handleInputChangeOrder}
// order={order}
// bill={bill}
// />
