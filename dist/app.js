"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./app/modules/user/user.route");
const app = (0, express_1.default)();
const port = 3000;
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// app.use("/api/v1/users", UserRoutes);
// app.use("/", UserRoutes);
app.use("/", user_route_1.UserRoutes);
app.get("/", (req, res) => {
    const message = "hey there im shafet hossen chanchal";
    res.send({ message });
});
exports.default = app;
