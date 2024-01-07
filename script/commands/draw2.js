module.exports.config = {
  name: "draw",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "The_Faheem",
  description: "image genrator",
  commandCategory: "Utilities",
  usages: "[text]",
  cooldowns: 5
};

module.exports.run = async (
{
  api,
  event,
  args
}) =>
{
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var tip = args.join(" ");
  if (!tip) return api.sendMessage(`add text lmao`, event.threadID, event.messageID);
  else
  {
    axios.get(`https://ai-genration.faheem001.repl.co/generate?prompt=${tip}`).then(res =>
    {
      var url = res.data.url;
      let callback = function ()
      {
        api.sendMessage(
        {attachment: fs.createReadStream(__dirname + `/cache/banner.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/banner.png`), event.messageID);
      };
      request(encodeURI(url)).pipe(fs.createWriteStream(__dirname + `/cache/banner.png`)).on("close", callback);
    })
  }
}