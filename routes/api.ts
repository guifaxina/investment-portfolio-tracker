import axios from "axios";

let response = null
new Promise(async(resolve, reject) => {
    try {
        response = await axios.get('pro-api.coinmarketcap.com', {
          headers: {
            'X-CMC_PRO_API_KEY': 'my-api',
          },
        });
      } catch(ex) {
        response = null;
        // error
        console.log(ex);
        reject(ex);
      }
      if (response) {
        const json = response.data; 
        console.log(json);
        resolve(json);
      }
})