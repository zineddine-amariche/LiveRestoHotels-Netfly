import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

import React, { useEffect, useState } from "react";
import useStyles from "../styles";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_HEURE,
  GET_HEURE_FAILED,
  GET_HEURE_LOADING,
} from "../../../../../redux/types/dateTypes";
import { useParams } from "react-router-dom";
import axios from "axios";

function Dates(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const state = useSelector((state) => state.Dates);
  const Hours = useSelector((state) => state.Hours);
  let params = useParams();
  let { id } = params;
  const [value, setValue] = useState("");
  const { order, handleInputChangeOrder } = props;
  const { data } = Hours;

  const fetchDates = async () => {
    const Token = localStorage.getItem("token");
    const url = `https://dev500.live-resto.fr/api/orders/times-availabilities`;
    let configHead = {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "fr",
        Authorization: `Bearer ${Token}`,
      },
    };
    let data = {
      address_id: 1,
      establishment_id: id,
      date: value,
    };

    try {
      dispatch({ type: GET_HEURE_LOADING });
      if (id) {
        const res = await axios.post(url, data, configHead);
        // console.log(`object res`, res.data.availabilities)
        // resp = await res.json();
        // var myJsonString = JSON.stringify(res);
        dispatch({ type: GET_HEURE, payload: res });
      }
    } catch (err) {
      dispatch({ type: GET_HEURE_FAILED, payload: err });
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    fetchDates();
  }, [value]);
  return (
    <Box className={classes.dateContainer}>
      <Box component="legend" className={classes.InformationTitre}>
        Date et heure de laivraison
      </Box>
      <FormControl component="fieldset" className={classes.Dates}>
        {state.dates.map((Item, index) => {
          return (
            <Box className={classes.DatesMap} key={Item.key}>
              <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
                defaultValue={!!!index}
              >
                <FormControlLabel value={Item.key} control={<Radio />} />
              </RadioGroup>
              <FormLabel className={classes.DatesContainer}>
                {Item.label}
              </FormLabel>
            </Box>
          );
        })}
      </FormControl>

      {data.availabilities && (
        <Box className={classes.dateContainer}>
          <Box component="legend" className={classes.InformationTitre}>
            Heure de laivraison
          </Box>
          <FormControl component="fieldset" className={classes.Dates}>
            {data.availabilities &&
              data.availabilities.map((i) => {
                return (
                  <Box className={classes.DatesMap}>
                    <Box className={classes.BoxRadio}>
                      {i.map((j, index) => {
                        return (
                          <RadioGroup
                            aria-label="gender"
                            name="for_when"
                            value={order.for_when}
                            onChange={handleInputChangeOrder}
                            defaultValue={!!!index}
                          >
                            <FormControlLabel
                              value={j.key}
                              control={<Radio />}
                              label={j.label}
                            />
                          </RadioGroup>
                        );
                      })}
                    </Box>
                  </Box>
                );
              })}
          </FormControl>
        </Box>
      )}

      {data.reason && (
        <Box className={classes.dataHeursReson}>{data.reason}</Box>
      )}
    </Box>
  );
}

export default Dates;
