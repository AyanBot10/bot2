module.exports.config = {
	name: "ramzan",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Clarence DK",
	description: "",
	commandCategory: "0",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const u = Date.parse("March 23, 2023 00:00:00") - Date.parse(new Date());
    const saconds = Math.floor( (u/1000) % 60 );
    const menutes = Math.floor( (u/1000/60) % 60 );
    const huurs = Math.floor( (u/(1000*60*60)) % 24 );
    const deys = Math.floor( u/(1000*60*60*24) );

    return api.sendMessage(`❤ 𝙃𝙤𝙡𝙮 𝙈𝙤𝙣𝙩𝙝 𝙍𝙖𝙢𝙖𝙙𝙖𝙣 𝙈𝙪𝙗𝙖𝙧𝙖𝙠 🥰\n» Roza:${deys}\n\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀      ✯The Faheem✯`, event.threadID, event.messageID);
}