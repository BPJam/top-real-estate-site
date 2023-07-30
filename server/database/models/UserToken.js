const { Schema, model, Types } = require('mongoose');

const userTokenSchema = new Schema({
    user: { type: Types.ObjectId, ref: 'User' },
    refreshTokens: [{ type: String, required: true }]
});

module.exports = model('UserToken', userTokenSchema);
