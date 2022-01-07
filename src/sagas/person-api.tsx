import axios from "axios";

const personApi = axios.create({
	baseURL: "https://mahrek-backend.herokuapp.com/api",
});

export default personApi;