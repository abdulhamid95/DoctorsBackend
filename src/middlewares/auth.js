import jsonwebtoken from 'jsonwebtoken';
import models from '../models';

const isLoggedIn = async (req, res, next) => {
    try{
        if(!req.headers.authorization){
            return res.status(400).json({
                message : "you don't have entry code"
            });
        }

        const token = req.headers.authorization.split(" ")[1];
        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        req.currentUser = decoded;
        next();
    }catch(e){
        res.status(500).son(e.message);
    }
}

export default isLoggedIn;