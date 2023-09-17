"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelizeText = exports.ucFirstAll = exports.lcFirst = exports.ucFirst = void 0;
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
