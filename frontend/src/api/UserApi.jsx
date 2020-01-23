import axios from 'axios';
import {login,  headerRequest, LogOut} from '../commons/Token'
import CommonApi from './CommonApi';
class UserApi extends CommonApi{
    static login(user) {
      return  axios.post(`${this.urlpath}auth/login/`, user).then(response => {
          console.log(response)
          login(response.data.jwt)
          return {status : true, data : response};
      }).catch(error => {
        console.error(error)
        return {status : false, error : error};
      });
    }
    static signUp(user) {
      return  axios.post(`${this.urlpath}/user/`, user).then(response => {

          return {status : true, data : response};
      }).catch(error => {
        console.error(error);
        return {status : false, error : error.response};
      });
    }
    static get() {
      return  axios.get(`${this.urlpath}/user/`  , 
                        headerRequest())
                    .then(response => ({status : true, data : response.data}))
                    .catch(error => {
                        if (axios.isCancel(error)) {
                            console.log('Request canceled', error.message);
                        }else{
                            LogOut();
                            return {status : false, error : error};
                        }
                        
                    });
    }

}
  
  export default UserApi;