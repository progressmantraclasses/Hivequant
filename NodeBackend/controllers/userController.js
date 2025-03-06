exports.loginUser = async (req, res) => {
    try {
        // Hive Keychain login logic here
        res.json({ success: true, message: "Login successful!" });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ success: false, error: "Login failed" });
    }
};
