const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')
const yts = require('yt-search')

cmd({ 
	pattern: "song",
        react: "🎵",
	desc: "Download songs", 
	category: "download", 
	filename: __filename }, 
    async (conn, mek, m, { from, q, reply }) => { 
	    try { 
if(!q) return reply('⛔please give a song title')
const search = await yts(q); 
const data = search.videos[0]; 
const url = data.url; 
const formatViews = views => views >= 1_000_000_000 ? `${(views / 1_000_000_000).toFixed(1)}B` : views >= 1_000_000 ? `${(views / 1_000_000).toFixed(1)}M` : views >= 1_000 ? `${(views / 1_000).toFixed(1)}K` : views.toString(); 
let desc = `
*🎶DARK-LION-MD🎵*
💙 *Title:* ${data.title}
👤 *chenel:* ${data.author.name}
📝 *Description:* ${data.description}
⏰ *Time:* ${data.timestamp}
⏱️ *Ago:* ${data.ago}
👁 *Views:* ${formatViews(data.views)}
`; 
await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek }); 
const data1 = await fetchJson(`https://apitest1-f7dcf17bd59b.herokuapp.com/download/ytmp3?url=${url}`)
//========
await conn.sendPresenceUpdate('recording', from); 
await conn.sendMessage(from, { audio: { url: data1.result.dl_link }, mimetype: "audio/mpeg" }, { quoted: mek }); 
await conn.sendMessage(from, { document: { url: data1.result.dl_link }, mimetype: "audio/mpeg", fileName: `${data.title}.mp3`, caption: "> DARK-LION-MD " }, { quoted: mek }); 
await conn.sendMessage(from, { react: { text: '✔️', key: mek.key }})
	    } catch (e) { 
		    console.log(e); 
		    reply(`Error: ${e}`); 
	    } 
    });

//video ===================

cmd({ 
	pattern: "video",
        react: "📽️",
	desc: "Download songs", 
	category: "download", 
	filename: __filename }, 
    async (conn, mek, m, { from, q, reply }) => { 
	    try { 
if(!q) return reply('⛔please give a video title')
const search = await yts(q); 
const data = search.videos[0]; 
const url = data.url; 
const formatViews = views => views >= 1_000_000_000 ? `${(views / 1_000_000_000).toFixed(1)}B` : views >= 1_000_000 ? `${(views / 1_000_000).toFixed(1)}M` : views >= 1_000 ? `${(views / 1_000).toFixed(1)}K` : views.toString(); 
let dec = `
*📽️DARK-LION-MD🎞️*
💙 *Title:* ${data.title}
👤 *chenel:* ${data.author.name}
📝 *Description:* ${data.description}
⏰ *Time:* ${data.timestamp}
⏱️ *Ago:* ${data.ago}
👁 *Views:* ${formatViews(data.views)}
`;
		    
await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: dec }, { quoted: mek }); 
const data1 = await fetchJson(`https://apitest1-f7dcf17bd59b.herokuapp.com/download/ytmp4?url=${url}`)
const durl = data1.result.dl || data1.result.dl1;
//=========
await conn.sendPresenceUpdate('recording', from); 
await conn.sendMessage(from, { video: { url: url}, mimetype: "video/mp4" }, { quoted: mek }); 
await conn.sendMessage(from, { document: { url: url}, mimetype: "video/mp4", fileName: `${data.title}.mp4`, caption: "> DARK-LION-MD " }, { quoted: mek }); 
await conn.sendMessage(from, { react: { text: '✔️', key: mek.key }})
	    } catch (e) { 
		    console.log(e); 
		    reply(`Error: ${e}`); 
	    } 
    });
