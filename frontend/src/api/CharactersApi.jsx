import axios from 'axios';
import {headerRequest, LogOut} from '../commons/Token'
import CommonApi from './CommonApi';
class CharacterApi  extends CommonApi{
    static get() {
      return  axios.get(`${this.urlpath}/character/`   , 
                        headerRequest())
                    .then(response => ({status : true, data : response.data.characters}))
                    .catch(error => {
                        if (axios.isCancel(error)) {
                            console.info('Request canceled', error.message);
                        }else{
                            LogOut();
                            return {status : false, error : error};
                        }
                    });
    }
}
  
  export default CharacterApi;