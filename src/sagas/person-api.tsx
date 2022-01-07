import axios from "axios";

const personApi = axios.create({
	baseURL: "/api",
});

export default personApi;