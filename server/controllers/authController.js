import User from './../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//register

export const register = async function (request, response) {
    try {
        const { username, password } = request.body;
        const isUser = await User.findOne({username});
        if(isUser){
            return response.json({message: 'such user is already exist'})
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        const newUser = new User({
            username: username,
            password: hashPassword
        });

        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '30d'})
        await newUser.save();
        response.json({
            newUser,
            token,
            message: 'user heas been created'
        })

    } catch(error){
        response.json({message: 'error creating user'})
    }
}



export const getMe = async function (request, response) {
    try {
        
    } catch(error){
        response.json({messgae: 'can not get a token'})
    }
}

