const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    alias: ["status","botsystem"],
    desc: "Check up time , ram usage and more",
    category: "main",
    react: "💙",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let system = `
*⚙️DARK-LION-MD SYSTEM🗃*
┌───────────────────────
├ ⏰ *Runtime:* ${runtime(process.uptime())}
├ 🗂 *Ram usage:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ ⚙️ *Platform:* ${os.hostname()}
├ 💻 *Owner:* Hashan sathsara & No Name Set
├ ⚒️ *Version:* 2.0.0
└───────────────────────

> DARK-LION-MD
`
return reply(`${system}`)
  
}catch(e){
console.log(e)
reply(`${e}`)

}
})
