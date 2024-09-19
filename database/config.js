import { connect } from "mongoose";
const dbconnection = async() =>{
    try{
        await connect(process.env.MONGO_CNN)
        console.log('connect a mongo')
    }catch(error){
        console.log('probblemas')
    }
}
export default dbconnection