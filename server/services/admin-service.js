const bcrypt = require('bcrypt');
const Admin = require("../database/models/Admin");
const AdminDto = require("../dtos/admin-dto");
const ApiError = require("../exceptions/api-error");
const tokenService = require("./token-service");

class AdminService {
    async registration(name, password) {
        const candidate = await Admin.findOne({ name });

        if (candidate) {
            throw ApiError.BadRequest(`Адміністратор з ім'ям ${name} вже існує`);
        }

        const hash = bcrypt.hashSync(password, 10);
        const admin = await Admin.create({ name, password: hash });

        const adminDto = new AdminDto(admin);
        const tokens = tokenService.generateToken({...adminDto});
        await tokenService.saveToken(adminDto.id, tokens.refreshToken, true);

        return { ...tokens, admin: adminDto };
    }

    async login(name, password) {
        const admin = await Admin.findOne({ name });

        if (!admin) {
            throw ApiError.BadRequest(`Адміністратора з таким ім'ям не знайдено!`);
        }

        const isPassEquals = await bcrypt.compare(password, admin.password);

        if (!isPassEquals) {
            throw ApiError.BadRequest('Невірний пароль!');
        }

        const adminDto = new AdminDto(admin);
        const tokens = tokenService.generateToken({...adminDto});
        await tokenService.saveToken(adminDto.id, tokens.refreshToken, true);

        return { ...tokens, admin: adminDto };
    }

    async logout(refreshToken) {
        await tokenService.removeToken(refreshToken, true);
        return;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        const data = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = tokenService.findToken(refreshToken, true);

        if (!data || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }

        const admin = await Admin.findById(data.id);
        const adminDto = new AdminDto(admin);
        const tokens = tokenService.generateToken({...adminDto});
        await tokenService.saveToken(adminDto.id, tokens.refreshToken, true);

        return { ...tokens, admin: adminDto };
    }
}

module.exports = new AdminService();
