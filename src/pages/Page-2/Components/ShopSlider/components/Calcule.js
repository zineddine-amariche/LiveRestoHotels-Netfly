import { Box, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "../../stylesDetails";

const Calcule = () => {
  const state = useSelector((state) => state.handleCart);
  const classes = useStyles();

  let sum = 0;
  state.map((i) => {
    sum += i.quantity * i.price;
  });
  return (
    <Box className={classes.RowST}>
      <Typography>Sous-total :</Typography>
      <Typography> {sum.toFixed(2)} €</Typography>
    </Box>
  );
};
export default Calcule;
