const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");
const adminService = require("../services/admin-service");
require('dotenv').config();

class AdminController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Помилка валідації данних', errors.array()))
            }

            const { name, password } = req.body;
            const adminData = await adminService.registration(name, password);
            res.cookie('refreshTokenAdmin', adminData.refreshToken, { maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true });

            return res.json(adminData);
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const { name, password } = req.body;
            const { refreshTokenAdmin } = req.cookies;

            const adminData = await adminService.login(name, password, refreshTokenAdmin);
            res.cookie('refreshTokenAdmin', adminData.refreshToken, { maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true });

            return res.json(adminData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshTokenAdmin } = req.cookies;

            await adminService.logout(refreshTokenAdmin);

            res.clearCookie('refreshTokenAdmin');
            res.status(200).json();
        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshTokenAdmin } = req.cookies;

            const adminData = await adminService.refresh(refreshTokenAdmin);
            res.cookie('refreshTokenAdmin', adminData.refreshToken, { maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true });
            
            return res.json(adminData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new AdminController();
