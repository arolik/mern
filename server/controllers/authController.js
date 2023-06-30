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
            message: 'user has been created'
        })

    } catch(error){
        response.json({message: 'error creating user'})
    }
}

export const login = async function (request, response) {
    try {
        const { username, password } = request.body;
        const user = await User.findOne({username});
        if(!user){
            return response.json({message: 'such user is not exist'})
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return response.json({message: 'incorrect password'})
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '30d'});

        response.json({
            user,
            token, 
            message: 'you enter to accaunt'
        })

    } catch (error){
        response.json({message: 'error login'})
    }
}


export const getMe = async function (request, response) {
    try {
        const user = await User.findById(request.userId);
        if(!user){
            return response.json({message: 'such user is not exist'})
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: '30d' } );

        response.json({
            user,
            token,
            message: 'you enter to accaunt'
        })

    } catch(error){
        response.json({messgae: 'can not get a token'})
    }
}

