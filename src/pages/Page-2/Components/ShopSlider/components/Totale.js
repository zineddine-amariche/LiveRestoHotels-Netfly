import { Box, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "../../stylesDetails";

const Total = () => {
  const state = useSelector((state) => state.handleCart);
  const Resto = useSelector((state) => state.Restaurants);
  const { Restaurants, establishments } = Resto;
  const { data } = Restaurants;

  const Totale = () => {
    if (data) {
      const { defaultDeliveryPrice } = data;
      let sum = 0;
      let all = 0;
      state.map((i) => {
        sum += i.quantity * i.price;
        all = sum + defaultDeliveryPrice;
      });
      return (
        <Typography style={{ fontWeight: "bold" }}>
          {all?.toFixed(2)} €
        </Typography>
      );
    }
  };
  const classes = useStyles();

  return (
    <Box className={classes.RowST}>
      <Typography style={{ fontWeight: "bold" }}>Montant total :</Typography>

      <Totale />
    </Box>
  );
};
export default Total;
