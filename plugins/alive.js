const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
await conn.sendMessage(from,{image: {url: `https://i.ibb.co/qx6vhTr/425a86459f740cb1.jpg`},caption: `Hello ${pushname}, hello iam created by Hashan Sathsara🌝❤️‍🔥 ! This Bot Created Dark Hackers Ofc team members !`},{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
