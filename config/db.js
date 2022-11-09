import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://devanshurai11:6MdZ6M98hUmvc5X8@cluster0.xs3bftp.mongodb.net/?retryWrites=true&w=majority")
        console.log(`MongoDB Connected: ${conn.connection.host}`)
        
    } catch (error) {
      console.error(`Error: ${error.message}`)
        process.exit(1)
    }

}

export default connectDB