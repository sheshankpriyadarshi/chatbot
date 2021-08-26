const express = require('express') ;
//checking git
const app = express() ;

app.use(express.json()) ;




app.post('/data', (req,res) => {

    const response = req.body ;
    
    let responseObj = {
     "fulfillmentText":response,
     "fulfillmentMessages":[{"text":{"text":[response]}}],
     "source":""

    }

    console.log(response) ;

   return res.json(responseObj) ;

}) ;

const port = process.env.PORT || 3000 ;

app.listen(port, () => console.log(`listening on ${port}.......`)) ;
