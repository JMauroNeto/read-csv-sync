"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCSVSync = void 0;
const fs_1 = require("fs");
exports.readCSVSync = (path, separator = ",", encoding = "utf-8") => {
    const data = fs_1.readFileSync(path, encoding).split('\n');
    const keys = data[0].split(separator);
    const formattedData = [];
    for (let i = 1; i < data.length; i++) {
        const row = data[i].split(',');
        let rowObject = {};
        keys.forEach((key, index) => {
            rowObject[key] = row[index];
        });
        formattedData.push(rowObject);
    }
    ;
    return formattedData;
};
//# sourceMappingURL=index.js.map