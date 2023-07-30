const jwt = require('jsonwebtoken');
const UserToken = require('../database/models/UserToken');
require('dotenv').config();

class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '15d' });
    
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const data = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return data;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const data = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return data;
        } catch (e) {
            return null;
        }
    }

    async saveToken(objectId, refreshToken) {
        const userToken = await UserToken.findOne({ user: objectId });

        if (userToken) {
            userToken.refreshTokens.push(refreshToken);
            return userToken.save();
        }

        const token = await UserToken.create({ user: objectId, refreshTokens: [ refreshToken ] });
        return token;
    }

    async removeToken(refreshToken) {
        await UserToken.updateOne(
            { refreshTokens: refreshToken }, 
            { $pull: { refreshTokens: refreshToken } }
        );
        return;
    }

    async findToken(refreshToken) {
        const tokenData = await UserToken.findOne({ refreshTokens: refreshToken });
        return tokenData;
    }
}

module.exports = new TokenService();
