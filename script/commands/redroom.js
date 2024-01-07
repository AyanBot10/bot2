module.exports.config = {
	name: "redroom",
	version: "11.0.1",
	hasPermssion: 0,
	credits: "FAHEEM",
	description: "redroom vids",
	commandCategory: "Not For Kids",
	usages: "",
	cooldowns: 30,
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var red = ["https://porn.api-johnlester.repl.co", "https://porn-1.api-johnlester.repl.co", "https://porn-2.api-johnlester.repl.co", "https://porn.api-johnlester.repl.co", "https://porn-1.api-johnlester.repl.co", "https://porn-2.api-johnlester.repl.co", "https://porn.api-johnlester.repl.co", "https://porn-1.api-johnlester.repl.co", "https://porn-2.api-johnlester.repl.co"]
  var redroom = red[Math.floor(Math.random() * red.length)]
  axios.get(redroom).then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/kanna.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/kanna.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/kanna.${ext}`)).on("close", callback);
      })
}
