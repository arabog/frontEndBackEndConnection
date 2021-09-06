const express = require("express")
const request = require('request');
const app = express()
const port = 5000



app.get("/", (req, res) => {
          res.send("Hello world!!!")
})


app.get("/newEndpt", (req, res) => {
          request("https://apitemplate21.herokuapp.com/api/posts", 
          
                    function (error, response, body) {
                    
                              if(!error && response.statusCode == 200) {
                                        const parseBody = JSON.parse(body)

                                        res.send(parseBody)
                              }
                    }
          );

})




app.listen(port, () => {
          console.log(`Server listening on port ${port}`)
})