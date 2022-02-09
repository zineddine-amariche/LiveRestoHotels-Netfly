import DatesService from "../../Services/DatesServices";
import actions from "../actions/fetchDatesAction";

export const loadDatesAsync = () => (dispatch) => {
	dispatch(actions.DatesLoadStart());

	DatesService.getDates()
		.then((response) => dispatch(actions.DatesLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.DatesLoadError(error.message)));
};
