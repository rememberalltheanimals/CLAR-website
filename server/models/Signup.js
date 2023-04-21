import mongoose from "mongoose";

const Schema = mongoose.Schema;

const newProp = (type, required = true) => ({ type, required });

const signupSchema = new Schema({
    name: newProp(String, true),
    email: newProp(String, true),
    purpose: newProp(String, true),
    favorite_language: newProp(String, true)
}, {
    timestamps: true,
});

export default mongoose.model("Signup", signupSchema);