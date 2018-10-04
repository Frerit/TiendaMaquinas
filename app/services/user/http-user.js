
import { API_BASE, HTTP_USER } from '../config';
import httpBase from '../../services/http-base';

class HttpUser {
  getUser() {
    try {
      const url = `${API_BASE}${HTTP_USER.getUsers}`
      const data = httpBase.baseGet(url, {})
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  getUserByToken() {
    try {
      const url = `${API_BASE}${HTTP_USER.getUser}`;
      let TOKEN = 'dftg3Wd6sW2zxl6dewWfS1';
      const config = {
        headers: {
          Autorization: `Bearer: ${TOKEN}`
        }
      }
      const data = await httpBase.baseGet(url, config);
      return data;
    } catch (error) {

    }
  }
}

export default new HttpUser;
