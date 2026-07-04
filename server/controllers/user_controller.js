import User from "../models/user_model.js";
import genToken from "../config/token.js";



export const getCurrentUser = async (req, res) => {
    try {
        const userId = req.userId;  
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(500).json({ error: "Failed to get current user, server error" });
    }
}

