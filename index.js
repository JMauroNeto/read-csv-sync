import { readFileSync } from 'fs';

export const readCSVSync = (path) => {
    const data = readFileSync(path, 'utf-8').split('\n');

    const keys = data[0].split(',');

    const formattedData = [];

    for(let i=1; i<data.length; i++){
        const row = data[i].split(',');

        let rowObject = {};

        keys.forEach((key, index) => {
            rowObject[key] = row[index];
        })

        formattedData.push(rowObject);
    };

    return formattedData;
}