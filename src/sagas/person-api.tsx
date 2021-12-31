import axios from "axios";

const personApi = axios.create({
	baseURL: "/api/v1",
});

export default personApi;