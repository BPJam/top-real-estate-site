const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const User = require('../database/models/User');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');
require('dotenv').config();

class UserService {
    async registration(email, password) {
        const candidate = await User.findOne({ email });

        if (candidate) {
            throw ApiError.BadRequest(`Користувач з поштовою адресою ${email} вже існує`);
        }

        const hash = bcrypt.hashSync(password, 10);
        const activationLink = uuid.v4();

        const user = await User.create({ email, password: hash, activationLink });
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const tokens = tokenService.generateToken({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens,  user: userDto };
    }

    async login(email, password) {
        const user = await User.findOne({ email });

        if (!user) {
            throw ApiError.BadRequest('Користувача з таким email не знайдено!');
        }

        const isPassEquals = await bcrypt.compare(password, user.password);

        if (!isPassEquals) {
            throw ApiError.BadRequest('Невірний пароль!');
        }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateToken({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens,  user: userDto };
    }

    async logout(refreshToken) {
        await tokenService.removeToken(refreshToken);
        return;
    }

    async activation(activationLink) {
        const user = await User.findOne({ activationLink });

        if (!user) {
            throw ApiError.BadRequest('Некоректне посилання активації');
        }

        user.isActivated = true;
        await user.save();
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        const data = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = tokenService.findToken(refreshToken);

        if (!data || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }

        const user = await User.findById(data.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateToken({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens,  user: userDto };
    }
}

module.exports = new UserService();
