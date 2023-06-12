import jwt from 'jsonwebtoken';

export const checkAuth = (request, response) => {
    try {

    } catch(error){
        return response.json({messgae: 'do not have access'})
    }
}

