const glob = require('glob');
const fs = require("fs");

let titles = {

};

const getEntry = (globPath) => {
    let entries = {}, tmp, htmls = {};
    glob.sync(globPath+'html').forEach((entry) => {
        tmp = entry.split('/').splice(-3);
        htmls[tmp[1]] = entry
    })
    glob.sync(`${globPath}ts`).forEach((entry) => {
        tmp = entry.split('/').splice(-3);
        let templatePath = entry.replace("main.ts","index.html");
        const isTemplate = fs.existsSync(templatePath);
        let template = isTemplate?templatePath:'index.html';
        entries[tmp[1]] = {
            entry,
            template, 
            filename:`${tmp[1]}.html`,
            title:titles[tmp[1]] || "未命名模块"
        };
    });
    return entries;
};
let htmls = getEntry('./src/instance/**/*.');
module.exports = htmls;
