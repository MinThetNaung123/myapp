import mongoose from "mongoose";
import { stringify } from "postcss";

const ContactSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },

    lastName : {
        type: String,
        required: true
    },

    Email : {
        type: String,
        required: true
    },

    phone : {
        type: Number,
        required: true
    }
}, {timestamps: true});

export default mongoose?.models?.Contact || mongoose.model('Contact', ContactSchema);