function authorizeRole(expectedRole){
    return (req, res, next) => {
        if(req.user?.role !== expectedRole){
            return res.status(403).json({ message: "Access denied: insufficient role" });
        }
        next();
    }
}

module.exports = authorizeRole;