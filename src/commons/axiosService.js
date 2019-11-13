import axios from 'axios';

class AxiosService {
  constructer() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handlerSuccess, this.handlerError);
    this.instance = instance;
  }

  handlerSuccess(response) {
    return response;
  }

  handlerError(error) {
    return Promise.reject(error);
  }

  get(url) {
    return axios.get(url);
  }
}

export default new AxiosService();
