import { readFileSync } from 'fs';

export const readCSVSync = (path: string): any[] => {
    const data = readFileSync(path, 'utf-8').split('\n');

    const keys = data[0].split(',');

    const formattedData = [];

    for(let i=1; i<data.length; i++){
        const row = data[i].split(',');

        let rowObject: any = {};

        keys.forEach((key, index) => {
            rowObject[key] = row[index];
        })

        formattedData.push(rowObject);
    };

    return formattedData;
}