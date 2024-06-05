import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: (true, "First name is required"),
    },
    lastname: {
        type: String,
        required: (true, "Last name is required"),
    },
    username: {
        type: String,
        unique: (true, "Username already exists"),
        required: (true, "Username is required"),
    },
    email: {
        type: String,
        unique: (true, "Email already exists"),
        required: (true, "Email is required"),
    },
    password: {
        type: String,
        required: (true, "Password is required"),
    },
    phone:{
        type: String,
        unique: (true, "Phone number already exists"),
        required: (true, "Phone number is required"),
    },
    country: {
        type: String,
        required: (true, "Country is required"),
    },
    city: {
        type: String,
        required: (true, "City is required"),
    },
    panNo: {
        type: String,
        unique: (true, "Pan number already exists"),
        required: (true, "Pan number is required"),
    },
    aadharNo: {
        type: String,
        unique: (true, "Aadhar number already exists"),
        required: (true, "Aadhar number is required"),
    },

})

const Form = mongoose.model("Form", formSchema);
export default Form;