import SignupSchema from "../models/Signup.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
*/
async function signup(req, res) {
    const { name, email, purpose, favorite_language } = req.body;

    await SignupSchema.create({
        name,
        email,
        purpose,
        favorite_language
    });

    res.sendStatus(200);
}

export default {
    signup,
};