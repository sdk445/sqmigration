const express = require("express")
const app = express()
const db  = require("./models/index")

app.use(express.json())


if(process.env.NODE_ENV == 'production'){
    db.sequelize.sync()
}else{
db.sequelize.sync({force : true})
}

app.listen(3000, ()=>{
    console.log("app running")
})

