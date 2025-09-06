import jwt from 'jsonwebtoken'

const JWT_secret = process.env.Access_Token;

function authenticateToken(res, req , next){
    const authHeader = req.header['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null)return res.status(401);

    jwt.verify(token, JWT_secret, (err, user) => {
        if(err) return res.status(403).json({error:"Invalid token"});

        req.user = user;
        next();
    })
}

export default authenticateToken;