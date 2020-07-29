"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserModel = function (sequelize, type) {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        role: type.STRING
    });
};
exports.default = UserModel;
//# sourceMappingURL=user.js.map