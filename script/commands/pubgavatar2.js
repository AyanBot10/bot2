const API = "https://faheem-vip-010.faheem001.repl.co/api/ephoto/tiger?text="
module.exports.config = {
	name: "digitaltigervideo",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "THE_FAHEEM",
	description: "text logo",
	commandCategory: "text maker",
	usages: "text (logo)",
	cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    tukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    const pathsave = __dirname + `/cache/video.mp4`;
    let videoBuffer;
    api.sendMessage(" please wait some seconds", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(tukhoa)}`, {responseType: "arraybuffer"}) .then(data => {const videoBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(videoBuffer));
    api.sendMessage({body: `LOGO MADE BY FAHEEM`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`Đã xảy ra lỗi ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};