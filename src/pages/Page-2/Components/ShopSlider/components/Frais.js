import { Box, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "../../stylesDetails";

const Frais = () => {
  const classes = useStyles();
  const Resto = useSelector((state) => state.Restaurants);
  const { Restaurants, establishments } = Resto;
  const { data } = Restaurants;

  const Price = () => {
    const { defaultDeliveryPrice } = data;

    return (
      <>
        {data && (
          <Typography>
            {defaultDeliveryPrice && defaultDeliveryPrice} €
          </Typography>
        )}
      </>
    );
  };
  return (
    <Box className={classes.RowST}>
      <Typography>Frais de livraison :</Typography>
      <Price />
    </Box>
  );
};
export default Frais;
