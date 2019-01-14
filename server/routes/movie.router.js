const express = require('express');
const router = express.Router();
const request = require("request");

router.post('/api/square', (req, res) => {
    let randomNum = Math.floor(Math.random() * 1000);
    console.log(req.body)
    let totalAmount = 100
    let options = { method: 'POST',
      url: 'https://connect.squareup.com/v2/locations/CBASEGcVZgUKS8RbqdkU-YjiBxggAQ/checkouts',
      headers: 
       { 
         'Cache-Control': 'no-cache',
         Accept: 'application/json',
         Authorization: 'Bearer sandbox-sq0atb-ffNvoCsEpPIf8cJyXHELlw',
         'Content-Type': 'application/json' },
      body: 
       { idempotency_key: '86ae1696-b1e3-4328-af6d-f1e04d947a23442989' + randomNum ,
         order: 
          { reference_id: 'reference_id',
            line_items: 
             [ { name: 'Total',
                 quantity: '1',
                 base_price_money: { amount: totalAmount, currency: 'USD' },
            
                 taxes: [ { name: 'Fair Trade Tax', percentage: '5' } ] } ],
            
         },
        
         redirect_url: 'http://localhost:8080' },
      json: true };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
      
    res.send(body.checkout.checkout_page_url)
    });
    })
    router.get('/api/movies', (req, res) => {
        var request = require("request");

        var options = { method: 'POST',
          url: 'https://api.themoviedb.org/3/search/movie',
          qs: 
           { api_key: '82a12a54b5388a78460f43520ffc035e',
             query: 'action',
             language: 'en-US',
             page: '1',
             include_adult: 'false' },
          headers: 
           { 
             'Cache-Control': 'no-cache',
             'Content-Type': 'application/octet-stream',
            
             Authorization: 'Bearer 1Ok6Azy5guAAAAAAAAAKAvbifj-15U8QcWQO5BudpH-im6r7oN0gfoGWcPTts3Xl' } };
        
        request(options, function (error, response, body) {
          if (error) throw new Error(error);
        
          console.log(body);
        });

    })
    module.exports = router;