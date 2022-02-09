
import * as actionTypes from "../types/dateTypes";

const DatesLoadStart = () => ({
	type: actionTypes.GET_DATES_LOADING,
});

const DatesLoadSuccess = (Dates) => ({
	type: actionTypes.GET_DATES,
	payload: Dates,
});

const DatesLoadError = (errorMessage) => ({
	type: actionTypes.GET_DATES_FAILED,
	payload: errorMessage,
});

export default {
	DatesLoadStart,
	DatesLoadSuccess,
	DatesLoadError,
};
