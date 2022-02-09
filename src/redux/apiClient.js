import axios from "axios";

const apiClient = (Token) => {
	const { REACT_APP_API_URL } = process.env;
	const axiosInstance = axios.create({
		baseURL: REACT_APP_API_URL,
		responseType: "json",
        "Content-Type": "application/json",
        "Accept-Language": "fr",
        Authorization: `Bearer ${Token}`,
	});

	return axiosInstance;
};

export default apiClient;
