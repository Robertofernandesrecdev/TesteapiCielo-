// lembrar de importar em compras...
//implementar o node-fetch
const fetch = require('node-fetch');
class Cielo {
    static compra(params) {
        
        // add o return da promise 
        return fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/', {
            method: 'post',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json',
                'MerchantId': '3cd62866-6a0b-4ccb-9af1-b8f265bb4b7d',
                'MerchantKey': 'YJYWBNMDZIEMEGUUTCSQHVQCMBNAQRSVPSXFAWAS',
            },
        })
            .then(res => res.json())
        //  .then(json => console.log(json));
    }
     

    static captura(paymentId) {
        return fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/' + paymentId + '/capture', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'MerchantId': '3cd62866-6a0b-4ccb-9af1-b8f265bb4b7d',
                'MerchantKey': 'YJYWBNMDZIEMEGUUTCSQHVQCMBNAQRSVPSXFAWAS',
            },
        })
            //.then(res => console.log(res))
            .then(res => res.json());
    }
}
         
module.exports = Cielo;
    
// obs: sempre verificar a url da pesquisa se e producao ou sanbox!




