import {
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
} from "@material-ui/core";
import React from "react";
import useStyles from "./FooterBoxStyles";
import logo from "../../assets/logo-live-resto 1 (2).svg";
import textLogo from "../../assets/Le Resto Facile à domicile.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function FooterBox() {
  const classes = useStyles();
  const {t} = useTranslation(["footer"]) ;
  return (
    <Paper className={classes.ContainerFooter}>
      <Paper className={classes.FirstCol} elevation={0}>
        <Box className={classes.LeftColF}>
          <Box className={classes.LogoBox}>
            <img src={logo} className={classes.ImageL} />
            <img src={textLogo} className={classes.ImageText} />
          </Box>
          <Box className={classes.BoxLeftTextS}>
            <Box className={classes.ColTitle}>
              <Typography variant="h5" className={classes.titles}>
                {t('footer_find_us')}
              </Typography>
              <Box variant="h6" className={classes.textList}>
                <Typography
                  variant="h5"
                  className={classes.ItemLinksFooter}

                >
                  Marseille
                </Typography>
                <Typography variant="h5" className={classes.ItemLinksFooter}>
                  Ville
                </Typography>
                <Typography variant="h5" className={classes.ItemLinksFooter}>
                  NomVille
                </Typography>
                <Typography variant="h5" className={classes.ItemLinksFooter}>
                  MaVille
                </Typography>
                <Typography variant="h5" className={classes.ItemLinksFooter}>
                  Ville1
                </Typography>
              </Box>
            </Box>
            <Box className={classes.rowTitle}>
              <Typography variant="h5" className={classes.titles}>
                {t('footer_askHelp')}
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: "#fff",
                  margin: "2px 5px 0px 10px",
                  fontSize: "16px",
                }}
              >
                021 99 99 99
              </Typography>
            </Box>
            <Box className={classes.rowTitle}>
              <Typography variant="h5" className={classes.titles}>
                {t('footer_howToUse')}
              </Typography>
              <Button
                variant="contained"
                style={{
                  marginLeft: "15px",
                  color: "#fff",
                  fontWeight: "600",
                  backgroundColor: "#5dbca3",
                }}
              >
                {t('footer_tutorial')}
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className={classes.RightColF}>
          <Box className={classes.News}>
            <Typography variant="h5" className={classes.titles}>
              {t('footer_newsletter')}
            </Typography>
            <Typography variant="h6" className={classes.textList}>
             {t('footer_info1')}
            </Typography>

            <Paper className={classes.PaerTextFeild} elevation={0}>
              <TextField
                label={t('footer_email')}
                className={classes.Inputa}
                variant="standard"
              />
              <Button variant="outlined" className={classes.button}>
               {t('footer_subscribe')}
              </Button>
            </Paper>
            <Typography variant="h6" className={classes.textListBottom}>
          {t('footer_info2')}
            </Typography>
          </Box>
        </Box>
      </Paper>

      <Divider className={classes.Div} />

      <Paper className={classes.ThirdCol} elevation={0}>
        <Paper className={classes.LinksFooter} elevation={0}>
          <Box className={classes.ItemLinks}><a href="https://www.live-resto.fr/fr/pages/display/legal" target="_blank" class={classes.achrf}>Mentions légales</a></Box>
          <span className={classes.spano}>|</span>
          <Box className={classes.ItemLinks}><a href="https://www.live-resto.fr/fr/pages/display/cgv"  target="_blank" class={classes.achrf} > CGU </a></Box>
          <span className={classes.spano} >|</span>
          <Box className={classes.ItemLinks}   ><a href ="https://www.live-resto.fr/fr/pages/display/viewCatalog" target="_blank"  class={classes.achrf} >Politique de confidentialité</a></Box>
        </Paper>
        <Paper className={classes.Langue}>{t('footer_lng')}</Paper>
      </Paper>
    </Paper>
  );
}

export default FooterBox;

{
  /* <Box className={classes.ScondCol} elevation={0}>
        <Paper className={classes.ClassPaper}>
          <Box>{t('footer_products')} </Box>
          <Box className={classes.FirstBox}>
            <img src={homelogo} className={classes.ImageX} />
            <Typography className={classes.Tetx}>{t('footer_liveResto')}</Typography>
          </Box>
          <Box className={classes.FirstBox}>
            <img src={homelogo} className={classes.ImageX} />
            <Typography className={classes.Tetx}>{t('footer_delivery')}</Typography>
          </Box>
        </Paper>
        <Paper className={classes.PaperScond}>
          <Box> {t('footer_follow')} </Box>
          <Box className={classes.iCons}>
            <Twitter className={classes.IconsFotter} />
            <Facebook className={classes.IconsFotter} />
            <Instagram className={classes.IconsFotter} />
            <YouTube className={classes.IconsFotter} />
            <LinkedIn className={classes.IconsFotter} />
          </Box>
        </Paper>
      </Box>
      <Divider className={classes.Div} /> */
}
