// rota post compras criada... apos criada add em appj.s


var express = require('express');
var router = express.Router();
var cielo = require('../lib/cielo'); // import da class


/* POST criacao de compra. */
router.post('/', function (req, res, next) {
  
  /* quando a promise for resolvida vai retornar o send para o front,
  que e o retorno que veio da cielo!*/
  cielo.compra(req.body).then((result) => {
    cielo.captura(result.Payment.PaymentId)
      .then((result) => {
        if (result.Status == 2) {
          res.status(201).send({
            "Status": "Success",
            "Message": "Compra realizada com sucesso!"
          });
        }
        else {
          res.status(402).send({
            "Status": " Ops, Falha!",
            "Message": "Compra nao realizada, problema na cobranca do cartao!"
          }
          )};
        
      })
      .catch((err) => {
        console.error(err);
      })

    //res.send(result);
  }); 
  
  //res.send(cielo.compra(req.body)); // chamando class 
});


/* GET status de compra. */
router.get('/:compra_id/status', function(req, res, next) {
  res.send('Loading status....');
});

module.exports = router;
