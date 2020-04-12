const mongoose= require('mongoose')
const config= require('config')
const  mongoUri= config.get('mongoUri')

const connectDb= async()=>{
    try{
        await mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('MongoDB connected successfully...')
    } catch(err){
        console.log(err.message)
        process.exit(1)
    }
}

module.exports= connectDb