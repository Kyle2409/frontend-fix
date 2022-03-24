import axios from 'axios';
const API_URL = 'https://pinkay-and-kuro-final.herokuapp.com/users/';
class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    console.log(user)
    console.log(API_URL + 'signup')
    return axios.post(API_URL + 'signup', {
      name: user.name,
      email: user.email,
      contact: user.contact,
      password: user.password
    });

  }
}
export default new AuthService();