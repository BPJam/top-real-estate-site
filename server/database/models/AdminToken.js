const { Schema, model, Types } = require('mongoose');

const adminTokenSchema = new Schema({
    admin: { type: Types.ObjectId, ref: 'Admin' },
    refreshTokens: [{ type: String, required: true }]
});

module.exports = model('AdminToken', adminTokenSchema);
