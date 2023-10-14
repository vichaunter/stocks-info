"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.parseDate = exports.cleanNumber = exports.camelizeText = exports.ucFirstAll = exports.lcFirst = exports.ucFirst = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const ucFirst = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);
exports.ucFirst = ucFirst;
const lcFirst = (str) => str.slice(0, 1).toLowerCase() + str.slice(1);
exports.lcFirst = lcFirst;
const ucFirstAll = (str) => str
    .split(" ")
    .map((s) => (0, exports.ucFirst)(s))
    .join(" ");
exports.ucFirstAll = ucFirstAll;
const camelizeText = (str) => {
    return (0, exports.lcFirst)((0, exports.ucFirstAll)(str.replace(/[^a-zA-Z ]/, "")).replace(/[^a-zA-Z]/g, ""));
};
exports.camelizeText = camelizeText;
const cleanNumber = (str) => {
    return str.replace(/[^0-9\.\%]/g, "");
};
exports.cleanNumber = cleanNumber;
const parseDate = (str) => (0, dayjs_1.default)(str, ["MMM DD, YYYY", "DD MMM YYYY"]);
exports.parseDate = parseDate;
const formatDate = (date, format) => {
    const isDateString = typeof date === "string";
    let dayjsDate;
    if (isDateString) {
        dayjsDate = (0, exports.parseDate)(date);
    }
    else {
        dayjsDate = date;
    }
    return dayjsDate.format(format ?? "DD/MM/YYYY");
};
exports.formatDate = formatDate;
