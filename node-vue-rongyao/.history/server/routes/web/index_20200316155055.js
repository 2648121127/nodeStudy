module.export = app =>{
    const router = require('express').Router()
    const mongoss = require('mongoss')
    

    app.use('/web/app/api',router)
}