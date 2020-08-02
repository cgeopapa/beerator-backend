const path = require('path');

exports.renderIndex = function(req, res){
    res.sendfile(path.join(__dirname, '../front-end/public', 'index.html'));
}