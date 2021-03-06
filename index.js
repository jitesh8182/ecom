const express = require('express')
require('./db/mongoose')
const userRouter = require('./router/user')
const typeRouter = require('./router/type')
const productRouter = require('./router/product')
const app= express()
const port=process.env.PORT || 3000
app.use(express.json())
app.use(userRouter)
app.use(typeRouter)
app.use(productRouter)
app.listen(port,()=> console.log(`Server is listening on ${port}`))