const express = require("express")
const app = express()
const port = 5000



app.get("/", (res, req) => {
          res.setEncoding("Hello world!!!")
})


app.listen(port, () => {
          console.log(`Server listening on port ${port}`)
})