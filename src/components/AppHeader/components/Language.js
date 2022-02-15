import React from "react";
import {
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from "@material-ui/core";

import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Flag from "../../../assets/fr.png";
import Flag2 from "../../../assets/en.png";
import Flag3 from "../../../assets/alm.png";
import { useRef } from "react";
import { useStyles } from "../stylesHeader";
import { useState } from "react";
import useLangue from "../Hooks/useLangue";

const options = ["Fr", "En", "De"];

function Language() {

  const {
    handleMenuItemClick,
    selectedIndex,
    openLangue,
    setOpen,
    handleToggle,
    handleClose,
    anchorRef,
    langues,
  } = useLangue();

  const classes = useStyles();

  return (
    <React.Fragment>
      <buttonGroupClasses
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
        className={classes.GroupBtn}
      >
        {selectedIndex == "0" && (
          <img src={Flag} className={classes.ImageInd} />
        )}
        {selectedIndex == "1" && (
          <img src={Flag2} className={classes.ImageInd} />
        )}
        {selectedIndex == "2" && (
          <img src={Flag3} className={classes.ImageInd} />
        )}

        <Button
          aria-controls={openLangue ? "split-button-menu" : undefined}
          aria-expanded={openLangue ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          sx={{
            color: "white",
            fontWeight: "500",
            backgroundColor: "inherit",
            height: "70px",
            width: "70px",
            fontSize: "1.2rem",
          }}
        >
          {langues[selectedIndex].toUpperCase()}
        </Button>
      </buttonGroupClasses>
      <Popper
        open={openLangue}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        className={classes.bg}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "center top" ? "center top" : "center bottom",
            }}
          >
            <Paper sx={{ color: "#fff" }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  id="split-button-menu"
                  sx={{ color: "#000", fontWeight: "600" }}
                >
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === selectedIndex}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}

export default Language;
