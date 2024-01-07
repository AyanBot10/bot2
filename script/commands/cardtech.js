const fs = require("fs");
module.exports.config = {
	name: "Asslam o alaikum2",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Muhammad Ali", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Salam") ||
     react.includes("Asslam") || react.includes("asslam") || react.includes("Assalam") ||
react.includes("Asalam") ||
react.includes("alaikum")) {
		var msg = {
				body: `Walikum Asslam❤️🥰`,attachment: fs.createReadStream(__dirname + `/noprefix/Amir.png`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }