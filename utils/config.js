let PORT = 3000 || process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET;


module.exports = {
    PORT,
    MONGO_URL,
    JWT_SECRET
} 