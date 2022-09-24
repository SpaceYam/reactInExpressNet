import axios from 'axios';
import * as apiPrefers from './apiPrefers'
const PJT_URL = apiPrefers.DEV_URL
    
  const callApi = (url, params) => //callPost(`${url}`, params);
                                   doFetch(`${url}`, params);
  const callPjtApi = (url, params) => callPost(`${PJT_URL}/${url}`, params);

  async function callPost(fullUrl, params){
    let header = apiPrefers.getTokenInfo(); header['ContentType'] = 'multipart/form-data';
    const headerWrapper1 = {
      //headers: header
    };

    const tgUrl = fullUrl, bodyParameters = params; 
    let result = null, resultWrapper = 
      new Promise((resolve, reject) => {
        axios.post(tgUrl//, bodyParameters, headerWrapper1
          ).then((response) => { resolve(response);
            console.log(tgUrl, bodyParameters, //headerWrapper1, response
            ); 
          }).catch((error) => { reject(error); 
            console.log(tgUrl, bodyParameters, //headerWrapper1, error
            );
          }
        );
      });

    return resultWrapper;
  }

  async function doFetch(fullUrl, params){
    let header = apiPrefers.getTokenInfo(); header['ContentType'] = 'multipart/form-data';
    const headerWrapper1 = {
      //headers: header
    }

    const tgUrl = fullUrl, bodyParameters = params; 
    let result = null, resultWrapper = 
      new Promise((resolve, reject) => {
        fetch(tgUrl//, bodyParameters, headerWrapper1
          ).then((response) => (console.log(tgUrl, bodyParameters, //headerWrapper1, response
            ), response.json()
          ).then((data) => { resolve(data); 
          }).catch((error) => { reject(error); 
            console.log(tgUrl, bodyParameters, //headerWrapper1, error
            );
          })
        );
      });

      return resultWrapper;
  }

  export default {
    callApi,
  }