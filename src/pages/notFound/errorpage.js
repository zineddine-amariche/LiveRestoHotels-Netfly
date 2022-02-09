import { Paper } from '@material-ui/core'
import React ,{useState, useEffect } from 'react'
import {useTranslation} from 'react-i18next' ; 

function Errorpage() { const {t,i18n} = useTranslation()  ;
const [errMessage, setErrMessage]=useState('') ; 
const handel_error_message =()=>{
    switch (i18n.language) {
        case "fr": setErrMessage('404 non trouvé .... !')  ; break;
        case "en": setErrMessage('404 not found  .... !') ; ; break ; 
        default: setErrMessage(' 404 not found .... !')  ; 
            break;
    }
}
useEffect(()=>{
    handel_error_message() ; 
}) ; 
return (
    <Paper >{errMessage}</Paper>
)
}

export default Errorpage
