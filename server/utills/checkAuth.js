import jwt from 'jsonwebtoken';

export const checkAuth = (request, response, next) => {
    // const token = (request.headers.authorization).replace(/Bearer\s?/, '');
    const token = request.headers.authorization;

    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            request.userId = decoded.id;
            next();
        } catch(error){
            return response.json({messgae: 'do not have access'})
        }
    } else {
        return response.json({
            message: 'no access - checAuth'
        })
    }
    
}

