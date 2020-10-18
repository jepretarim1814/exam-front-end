import axios from "axios";
import authHeader from "./auth-header";

class AuthService {
    login(user) {
        return axios.post('/api/user/login', {
            username: user.username,
            password: user.password
        })
            .then(({data}) => {
                if (data.user.accessToken) {
                    this.revokeToken();
                    localStorage.setItem('user', JSON.stringify(data.user));
                }
                return data.user;
        })
    }

    logout() {
        return axios.post('/api/user/logout',{}, {
            headers: authHeader()
        }).then(() => {
            this.revokeToken();
        });
    }

    register(user) {
        return axios.post('/api/user/register', {
            username: user.username,
            password: user.password
        });
    }

    refreshToken() {
        return axios.get('/api/token/refresh', {
            headers : authHeader()
        })
            .then(({data}) => {
                if (data.user.accessToken) {
                    localStorage.setItem('user', JSON.stringify(data.user));
                }
                return data.user;
            })
    }

    revokeToken() {
        localStorage.removeItem('user');
        localStorage.removeItem('timeToRefresh');
    }
}

export default new AuthService();