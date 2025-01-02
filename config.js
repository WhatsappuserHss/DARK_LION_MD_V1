const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "yiJiTRYK#OZC9D-S8QsCYRnSJnnslu9mZEI4A5vk-IxTazpya5Hc",
};
