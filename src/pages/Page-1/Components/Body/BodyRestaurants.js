import { Box, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import FilterRestaunrants from "../FilterRestaurants";
import Loading from "../../../../components/Loading/Loading";
import useStyles from "./BodyContainerStyles";
import SearcheBox from "../Search/SearcheBox";
import CardRestaurant from "../CardRestaurant/CardRestaurant";
import { useEffect } from "react";

function BodyRestaurants(props) {
  const { ShowFilter } = props;
  const classes = useStyles();
  const Resto = useSelector((state) => state.Restaurants);
  const { Restaurants, establishments } = Resto;
  const { data } = Restaurants;
  const { defaultDeliveryPrice } = !!data
  console.log("defaultDeliveryPrice", defaultDeliveryPrice);

  const [RestoDta, setResto] = useState(null);
  useEffect(() => {
    setResto(establishments);
  }, [establishments]);

  const filterAllData = (e) => {
    console.log("e.target.value", e.target.value);
    if (
      e.target.value == "fermé" ||
      e.target.value == "ouvert" ||
      e.target.value == "all"
    ) {
      var FilterEstablishments = establishments.filter((data) => {
        return establishments;
      });
      setResto(FilterEstablishments);
      console.log("RestoDta Uncheck", RestoDta);
    }
  };
  function filterData(e) {
    if (e.target.value == "fermé") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.availability.is_open == false;
      });
    }
    if (e.target.value == "ouvert") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.availability.is_open == true;
      });
    }
    if (e.target.value == "all") {
      var FilterEstablishments = establishments.filter((data) => {
        return establishments;
      });
    }
    setResto(FilterEstablishments);
    console.log(`object`, FilterEstablishments);
  }
  const filterCaractérstique = (e) => {
    console.log(`e.target.value`, e.target.value);
    if (e.target.value == "Hallal") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Hallal");
      });
    }
    if (e.target.value == "Casher") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Casher");
      });
    }
    if (e.target.value == "Végétarien") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Végétarien");
      });
    }
    setResto(FilterEstablishments);
    console.log(`carectr`, FilterEstablishments);
  };
  const filterTypePlats = (e) => {
    if (e.target.value == "Pâtes") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Pâtes");
      });
    }
    if (e.target.value == "Pizza") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Pizza");
      });
    }
    if (e.target.value == "Antipasti") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Antipasti");
      });
    }
    if (e.target.value == "Viandes") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Viandes");
      });
    }
    if (e.target.value == "Poisson") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Poisson");
      });
    }
    if (e.target.value == "Salades") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Salades");
      });
    }
    if (e.target.value == "Légumes") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Légumes");
      });
    }
    if (e.target.value == "FruitsDeMer") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("FruitsDeMer");
      });
    }
    if (e.target.value == "Grillades") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Grillades");
      });
    }
    if (e.target.value == "Tartares") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Tartares");
      });
    }
    if (e.target.value == "Moules") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Moules");
      });
    }

    if (e.target.value == "Chaussons") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Chaussons");
      });
    }
    if (e.target.value == "Lasagnes") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Lasagnes");
      });
    }

    setResto(FilterEstablishments);
    console.log(`carectr`, FilterEstablishments);
  };
  const filterRestrictions = (e) => {
    if (e.target.value == "SansGluten") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("SansGluten");
      });
    }
    if (e.target.value == "Végétarien") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Végétarien");
      });
    }
    if (e.target.value == "Crustacés") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Crustacés");
      });
    }
    setResto(FilterEstablishments);
    console.log(`carectr`, FilterEstablishments);
  };
  const filterPays = (e) => {
    if (e.target.value == "France") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("France");
      });
    }
    if (e.target.value == "Italie") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Italie");
      });
    }
    setResto(FilterEstablishments);
    console.log(`carectr`, FilterEstablishments);
  };
  const filterTypePays = (e) => {
    if (e.target.value == "Cuisine Traditionnelle Française") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes(
          "Cuisine Traditionnelle Française"
        );
      });
    }
    if (e.target.value == "Cuisine Italienne") {
      var FilterEstablishments = establishments.filter((data) => {
        return data.attributes_string.includes("Cuisine Italienne");
      });
    }

    setResto(FilterEstablishments);
    console.log(`carectr`, FilterEstablishments);
  };

  return (
    <Box className={classes.Body} elevation={0}>
          {ShowFilter && data && (
            <FilterRestaunrants
              filterData={filterData}
              filterAllData={filterAllData}
              filterCaractérstique={filterCaractérstique}
              filterTypePlats={filterTypePlats}
              filterRestrictions={filterRestrictions}
              filterPays={filterPays}
              filterTypePays={filterTypePays}
            />
          )}
          {!data ? (
            <Loading />
          ) : (
            <Paper className={classes.BodyRow} elevation={0}>
              <SearcheBox />
              {RestoDta && <CardRestaurant RestoDta={RestoDta} />}
            </Paper>
          )}
    </Box>
  );
}

export default BodyRestaurants;
