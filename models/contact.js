import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    text: {
        type: String,
        required: true,
        unique: true
    },
    
})
const Contact = mongoose.model("Contact", contactSchema);

export default Contact