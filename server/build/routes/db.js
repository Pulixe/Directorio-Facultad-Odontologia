"use strict";
//colocar conexion a la base de datos
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./src/keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
