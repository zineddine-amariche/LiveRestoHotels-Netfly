import apiClient from "../redux/apiClient";
const Token = localStorage.getItem("token");
class DatesService {
 
	getDates = (data) => apiClient(Token).post("orders/dates-availabilities",data);


}

export default new DatesService();