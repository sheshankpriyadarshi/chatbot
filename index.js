const express = require('express') ;
//checking git
const app = express() ;

app.use(express.json()) ;

app.post('/data', (req,res) => {

    const response = req.body ;

    console.log(response) ;

   return res.json( { name:"Scheduled"} ) ;

}) ;

const port = process.env.PORT || 3000 ;

app.listen(port, () => console.log(`listening on ${port}.......`)) ;
