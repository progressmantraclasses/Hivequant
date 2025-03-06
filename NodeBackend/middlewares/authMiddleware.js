const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ success: false, error: "Access Denied. No Token Provided." });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;  // Attach decoded user to request
        next();
    } catch (error) {
        return res.status(401).json({ success: false, error: "Invalid or Expired Token" });
    }
};

module.exports = authenticateUser;
