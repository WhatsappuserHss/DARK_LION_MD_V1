const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "yvgFQRYT#f6XzqbCqF4Dpq2sWCF33L8rurwev0hLjGvevuLmuoPM",
};
