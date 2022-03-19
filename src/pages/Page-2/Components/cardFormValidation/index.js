/*eslint-disable*/
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
  TextField,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { submitValidation } from "../../../../redux/actions/validation/actionValidation";
import Dates from "./components/Dates";
import DetailsPersonnel from "./components/DetailsPersonnel";
import ModePaiment from "./components/ModePaiment";
import Remarques from "./components/Remarques";
import { useValidation } from "./Hooks/useValidation";
import useStyles from "./styles";
import { Field, Form, Formik } from "formik";
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
  const Hours = useSelector((state) => state.Hours);

  const { data } = auth;
  const { customer } = data;
  const [hotel, setdata] = useState(Hotel);
  const [IdPaiement, setIdPaiement] = useState(1);
  const [Cheque, setCheque] = useState(0);
  const [Ticket, setTicket] = useState(0);
  const [Especes, setEspeces] = useState(0);
  const [check, setCheck] = useState(true);
  const [ValidationInfopr, setValidation] = useState(false);
  const [checkPaymentValid, setCheckPaymentValid] = useState(false);
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
    validationSchema,
    all,
    sum,
    onChangeInput,
  } = useValidation(Hotel, orderState, billaddress, Products, Payments);
  const handelValidationPayments = (valur) => {
    setCheckPaymentValid(valur);
  };
  const handelTotal = () => {
    customer &&
      setOrder({
        ...order,
        ["total"]: all?.toFixed(2),
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
  const GetCheque = (e) => {
    const { name, value } = e.target;
    setCheque({
      ...value,
      [name]: value,
    });
  };
  const GetTicket = (e) => {
    const { name, value } = e.target;
    setTicket({
      ...value,
      [name]: value,
    });
  };
  const GetEspèces = (e) => {
    const { name, value } = e.target;
    setEspeces({
      ...value,
      [name]: value,
    });
  };
  const HandelPayments = () => {
    customer &&
      setPayments([
        {
          id: 3,
          amount: Cheque?.amount || 0,
        },
        {
          id: 5,
          amount: Ticket?.amount || 0,
        },
        {
          id: 4,
          amount: Especes?.amount || 0,
        },
      ]);
  };
  const HandelHotel = (values, validation) => {
    setdata(values);
    setValidation(validation);
  };
  const handelId = (id) => {
    if (id == "2") setIdPaiement(2);
    if (id == "1") setIdPaiement(1);
    if (id == "5") setIdPaiement(5);
    if (id == "3") setIdPaiement(3);
  };
  const calculeSum = () => {
    let sum =
      parseFloat(Cheque?.amount || (0).toFixed(2)) +
      parseFloat(Ticket?.amount || (0).toFixed(2)) +
      parseFloat(Especes?.amount || (0).toFixed(2));
    // console.log(
    //   "sum",
    //   sum,
    //   all,
    //   Especes?.amount,
    //   Ticket?.amount,
    //   Cheque?.amount
    // );

    setCheck(sum);
  };

  useEffect(() => {
    handelTotal();
    HandelProducts();
    HandelPayments();
    calculeSum();
  }, [
    sum,
    state,
    value,
    IdPaiement,
    Cheque?.amount,
    Ticket?.amount,
    Especes?.amount,
    all,
    Cheque,
    Ticket,
    Especes,
  ]);
  const Token = localStorage.getItem("token");

  let configHead = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
      Authorization: `Bearer ${Token}`,
    },
  };
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
  console.log("orders", orders);
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChangeEx = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Paper className={classes.IndexPanier} elevation={0}>
      <Formik
        className={classes.FormikHotelInfo}
        initialValues={hotel}
        validationSchema={validationSchema}
      >
        {(formik) => {
          HandelHotel(formik.values, formik.isValid);
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
                onChangeInput={onChangeInput}
              />
            </Form>,
          ];
        }}
      </Formik>

      {ValidationInfopr && hotel.apartement ? (
        <Dates handleInputChangeOrder={handleInputChangeOrder} order={order} />
      ) : null}

      {ValidationInfopr && order.for_when ? (
        <Box className={classes.dateContainer}>
          <Box component="legend" className={classes.InformationTitre}>
            Mode Paiement :
          </Box>

          <Accordion
            style={{ margin: "0px 5px 0px 0" }}
            elevation={0}
            expanded={expanded === "panel1"}
            onChange={handleChangeEx("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontWeight: 600 }}>
                Choisir un mode :
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Formik initialValues={value}>
                {(formik) => {
                  // console.log("formik.values", formik);
                  handelId(formik.values.id);

                  return [
                    <Form
                      className={classes.FormItemsPaiements}
                      autoComplete="on"
                    >
                      <ModePaiment
                        formik={formik}
                        handelChangePaiment={handelChangePaiment}
                        handelValidationPayments={handelValidationPayments}
                        value={value}
                        Cheque={Cheque}
                        GetCheque={GetCheque}
                        GetTicket={GetTicket}
                        Ticket={Ticket}
                        GetEspèces={GetEspèces}
                        Especes={Especes}
                        check={check}
                        all={all}
                      />
                    </Form>,
                  ];
                }}
              </Formik>
            </AccordionDetails>
          </Accordion>
        </Box>
      ) : null}

      {ValidationInfopr &&
      order.for_when &&
      payments.lenght !== 0 &&
      checkPaymentValid ? (
        <>
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
        </>
      ) : null}

      {ValidationInfopr && hotel.apartement && order.for_when ? (
        <Button
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
          disabled={
            Hours.data.reason
              ? true
              : false || hotel.fullName.length >= 8
              ? false
              : true || hotel.phone.length > 10
              ? false
              : true || hotel.apartement
              ? false
              : true || check !== all
              ? true
              : false
          }
       
        >
          Passer ma commande
          {Validate.loading && (
            <CircularProgress
              color="black"
              className={classes.circularProgress}
              size={20}
            />
          )}
        </Button>
      ) : null}
    </Paper>
  );
}

export default ValidationForm;
