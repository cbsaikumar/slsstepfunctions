'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
var src_controllers_user = require("../src/controllers/user");
exports.handler = function (event, context) {
    var end = false;
    context.end = function () { return end = true; };
    var wrappedHandler = function (handler) { return function (prev) {
        if (end)
            return prev;
        context.prev = prev;
        return handler(event, context);
    }; };
    return Promise.resolve()
        .then(wrappedHandler(src_controllers_user.createAUser.bind(src_controllers_user)));
};
//# sourceMappingURL=createAUser.js.map