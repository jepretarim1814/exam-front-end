import axios from "axios";
import authHeader from "./auth-header";

class UserService {
    getAllUsers() {
        return axios.get('/api/user/search', { headers : authHeader()});
    }
}

export default new UserService();
