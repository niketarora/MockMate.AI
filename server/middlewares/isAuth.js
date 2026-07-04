import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try {
        let {token} = req.cookies;
        if(!token) {
            return res.status(401).json({ error: "User does not have a valid token" });
        }
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if(!verifyToken) {
            return res.status(401).json({ error: "User does not have a valid token" });
        }
        req.userId = verifyToken.userId;
        next();
    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(500).json({ error: "isAuth server error" });
    }
}

export default isAuth;