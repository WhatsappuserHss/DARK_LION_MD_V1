const config = require('../config')
const {cmd , commands} = require('../command')
const gis = require('g-i-s');
//bot  alive
cmd({
    pattern: "img",
    desc: "download img",
    category: "download",
    react: "🍃",
    filename: __filename
},
async(conn, mek, m, { from, reply, q })=>{
    try {
        if (!q) return await reply("⛔please give me title");

        gis(q, (error, result) => {
            if (error || !result.length) return reply("*⛔No images found!*");
            
            reply('*DARK-LION-MD PHOTOS* 📷')
            
            // Send the first 5 images
            const imageUrls = result.slice(0, 5).map(img => img.url);
            imageUrls.forEach(async (url) => {
                await conn.sendMessage(from,{image: { url: url},caption: `> DARK-LION-MD`},{quoted: mek})
                await conn.sendMessage(from, { react: { text: '✔️', key: mek.key }})
            });
            
        });

    } catch (e) {
        console.error(e);
        reply(`⛔Error: ${e}`);
    }
});
