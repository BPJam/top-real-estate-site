const { validationResult } = require("express-validator");
const userService = require("../services/user-service");
const ApiError = require("../exceptions/api-error");
require('dotenv').config();

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Помилка валідації данних', errors.array()))
            }

            const { email, password } = req.body;
            const userData = await userService.registration(email, password);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true, secure: true });

            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true, secure: true });

            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;

            await userService.logout(refreshToken);

            res.clearCookie('refreshToken');
            res.status(200).json();
        } catch (e) {
            next(e);
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activation(activationLink);

            return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;

            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true, secure: true });

            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();
