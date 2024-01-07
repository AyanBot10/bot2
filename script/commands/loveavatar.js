cmodule.exports.config = {
    name: "loveavatar",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "THE-FAHEEM",
    description: "edit txt",
    commandCategory: "text maker",
    usages: "[Text1]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async function ({ api, event, args}) {
    const { threadID, messageID, senderID, body } = event;
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    const moduleName = this.config.name;
    const creator = ("ᴛʜᴇ ғᴀʜᴇᴇᴍ");
    let text = args.join(" ")
    let params = {text};
    params = qs.stringify(params);
    api.sendMessage("ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ...", event.threadID, event.messageID);
    const pathsave = __dirname + `/cache/avtlolv2952.mp4`;
    let videoBuffer;
await axios.get(`https://25ab9b30-8f63-4b90-b1b6-e5f5432361eb.id.repl.co/api/ephoto/loveavatar?text=${text}`, {
            responseType: "arraybuffer"
        })
        .then(data => {
            const videoBuffer = data.data;
            fs.writeFileSync(pathsave, Buffer.from(videoBuffer));
            api.sendMessage({body: `[ʟᴏᴠᴇ-ᴀᴠᴀᴛᴀʀ] - ᴍᴏᴅᴜʟᴇ: ${moduleName} ||ʟᴏɢᴏ ᴄʀᴇᴀᴛᴏʀ ɴᴀᴍᴇ: ${creator}   || - ᴛᴇxᴛ: ${text}`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);})
        .catch(error => {
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`Error! An error occurred. Please try again later ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};