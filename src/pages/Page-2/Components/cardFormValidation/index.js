import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
} from "@material-ui/core";
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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
  const Validate = useSelector((state) => state.Validate);
  const state = useSelector((state) => state.handleCart);
  const auth = useSelector((state) => state.auth);
  const { data, token } = auth;
  const { customer } = data;
  const [hotel, setdata] = useState(Hotel);
  const [IdPaiement, setIdPaiement] = useState();
  const {
    register,
    order,
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
    handelChangePaiment,
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
        // ["origin_id"]: customer.origin_id,
        ["origin_id"]: 2,
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
          id: IdPaiement,
          amount: all.toFixed(2),
        },
      ]);
  };
  const HandelHotel = (values) => {
    setdata(values);
  };
  const handelId = (id) => {
    if (id == "3") setIdPaiement(3);
    if (id == "2") setIdPaiement(2);
    if (id == "1") setIdPaiement(1);
    if (id == "0") setIdPaiement(0);
  };

  useEffect(() => {
    handelTotal();
    HandelProducts();
    HandelPayments();
  }, [sum, state, value, IdPaiement]);
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
      .min(8, "le nom est trop court - doit être de 8 caractères minimum.")
      .max(35, "Le nom complet est trop long - doit être de 35 caractères maximum.")
      .matches(lengthRegEx, "Doit contenir au moins 8 caractères !")
      .required("le nom complet est requis"),

    phone: Yup.string()
      .min(10, "Numéro téléphone is too short - should be 10 number Minimum.")
      .matches(phoneRegex, "Doit être un numéro valide !")
      .required("Numéro téléphone est requis"),

    apartement: Yup.number()
      .max(2, "Le numéro d'appartement est trop long - doit être de 2 numéros maximum.")
      .required("Le numéro d'appartement est requis"),
    voucher_code: Yup.string().min(
      4,
      "le code promotionnel est trop court - doit comporter au moins 4 caractères "
    ),
  });
  const Hours = useSelector((state) => state.Hours);
  return (
    <Paper className={classes.IndexPanier} elevation={0}>
      <Formik
        className={classes.FormikHotelInfo}
        initialValues={hotel}
        validationSchema={validationSchema}
      >
        {(formik) => {
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

      <Box className={classes.dateContainer}>
        <Box component="legend" className={classes.InformationTitre}>
          Mode Paiement :
        </Box>

        <Accordion style={{ margin: "0px 5px 0px 0" }} elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontWeight: 600 }}>
              {IdPaiement
                ? IdPaiement === 1
                  ? "Chèques"
                  : IdPaiement === 2
                  ? "Espèces"
                  : IdPaiement === 3
                  ? "Ticket restaurant"
                  : IdPaiement === 0
                  ? "CB en ligne"
                  : ""
                : "Choisir un mode"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Formik initialValues={value}>
              {(formik) => {
                handelId(formik.values.value);
                return [
                  <Form className={classes.FormItemsPaiements}>
                    <ModePaiment
                      formik={formik}
                      handelChangePaiment={handelChangePaiment}
                      value={value}
                    />
                  </Form>,
                ];
              }}
            </Formik>
          </AccordionDetails>
        </Accordion>
      </Box>

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
