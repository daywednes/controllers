"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endowmentPermissionBuilders = exports.permissionRpcMethods = void 0;
__exportStar(require("./Caveat"), exports);
__exportStar(require("./Permission"), exports);
__exportStar(require("./PermissionController"), exports);
__exportStar(require("./utils"), exports);
// TODO: Move these to the appropriate package
exports.permissionRpcMethods = __importStar(require("./rpc-methods"));
var endowments_1 = require("./endowments");
Object.defineProperty(exports, "endowmentPermissionBuilders", { enumerable: true, get: function () { return endowments_1.endowmentPermissionBuilders; } });
//# sourceMappingURL=index.js.map