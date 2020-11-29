const glob = require('glob');

let titles = {
    
};

function getEntry(globPath) {
    let entries = {}, tmp, htmls = {};
    glob.sync(globPath+'html').forEach(function(entry) {
        tmp = entry.split('/').splice(-3);
        htmls[tmp[1]] = entry
    })
    glob.sync(globPath+'ts').forEach(function(entry) {
        tmp = entry.split('/').splice(-3);
        entries[tmp[1]] = {
            entry,
            template: 'index.html', 
            filename:tmp[1] + '.html',
            title:titles[tmp[1]] || ""
        };
    });
    return entries;
};
let htmls = getEntry('./src/instance/**/*.');
module.exports = htmls;
