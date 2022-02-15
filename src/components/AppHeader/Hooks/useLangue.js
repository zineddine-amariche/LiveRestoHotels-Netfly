import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

setLocale(fr);

export default function useLangue() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openLangue, setOpen] = useState(false); // false=>visible
  const langues = ["fr", "en", "de"];
  const { t, i18n } = useTranslation();

  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    i18n.changeLanguage(langues[index]);
    setOpen(false);
    // navigate("/login");
  };
  return {
    handleMenuItemClick,
    selectedIndex,
    openLangue,
    setOpen,
    handleToggle,
    handleClose,
    anchorRef,
    langues,
    setSelectedIndex
  };
}
