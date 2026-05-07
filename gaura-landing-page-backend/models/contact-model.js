import { Schema, mongoose } from "mongoose";

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  course:{
    type:String,
    required:false,
    enum:[]
  },

  location: {
    type: String,
    required: false,
    enum: ["haldwani", "dehradun", "rudrapur", "bajpur"],
  },
  message: {
    type: String,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
