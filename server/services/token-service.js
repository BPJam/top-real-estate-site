const jwt = require('jsonwebtoken');
const UserToken = require('../database/models/UserToken');
const AdminToken = require('../database/models/AdminToken');
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

    async saveToken(objectId, refreshToken, oldRefreshToken, isAdmin = false) {
        if (isAdmin) {
            const adminToken = await AdminToken.findOne({ admin: objectId });

            if (adminToken) {
                await this.removeToken(oldRefreshToken, true);
                adminToken.refreshTokens.push(refreshToken);
                return adminToken.save();
            }
    
            const token = await AdminToken.create({ admin: objectId, refreshTokens: [ refreshToken ] });
            return token;
        }

        const userToken = await UserToken.findOne({ user: objectId });

        if (userToken) {
            await this.removeToken(oldRefreshToken);
            userToken.refreshTokens.push(refreshToken);
            return userToken.save();
        }

        const token = await UserToken.create({ user: objectId, refreshTokens: [ refreshToken ] });
        return token;
    }

    async removeToken(refreshToken, isAdmin = false) {
        if (isAdmin) {
            await AdminToken.updateOne(
                { refreshTokens: refreshToken }, 
                { $pull: { refreshTokens: refreshToken } }
            );
            return;
        }

        await UserToken.updateOne(
            { refreshTokens: refreshToken }, 
            { $pull: { refreshTokens: refreshToken } }
        );
        return;
    }

    async findToken(refreshToken, isAdmin = false) {
        if (isAdmin) {
            const tokenData = await AdminToken.findOne({ refreshTokens: refreshToken });
            return tokenData;
        }

        const tokenData = await UserToken.findOne({ refreshTokens: refreshToken });
        return tokenData;
    }
}

module.exports = new TokenService();
