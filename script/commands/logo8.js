var faheem = "ғᴀʜᴇᴇᴍ";
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "logov1",
  version: "1.0",
  hasPermssion: 0,
  credits: `${faheem}`, 
  description: "Logo maker Api credit: Faheem",
  commandCategory: "logo",
  usages: "logo <type> <name>",
  cooldowns: 2,
};
module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;
  if (args.length < 2) {
    return api.sendMessage(`Invalid command format! Use: logo <type> <name>\n\nLogo Type:\n\ncutepig\n\nsunlight\n\npapercut\n\nwater\nleaf"`, threadID, messageID);
  }
  let type = args[0].toLowerCase();
  let name = args.slice(1).join(" ");
  let pathImg = __dirname + `/faheem/${type}_${name}.png`;
  let apiUrl, message;
  
  switch (type) {
    case "pig":
      apiUrl = `https://25ab9b30-8f63-4b90-b1b6-e5f5432361eb.id.repl.co/api/ephoto/pig?text=${name}`;
      message = "[ᴄᴜᴛᴇ-ᴘɪɢ] ʟᴏɢᴏ ᴄʀᴇᴀᴛᴇᴅ:";
      break;
    case "sunlight":
      apiUrl = `https://25ab9b30-8f63-4b90-b1b6-e5f5432361eb.id.repl.co/api/ephoto/sunlight?text=${name}`;
      message = "[sᴜɴ-ʟɪɢʜᴛ] ʟᴏɢᴏ ᴄʀᴇᴀᴛᴇᴅ:";
      break;
    case "papercut":
      apiUrl = `https://25ab9b30-8f63-4b90-b1b6-e5f5432361eb.id.repl.co/api/ephoto/caper?text=${name}`;
      message = "[ᴘᴀᴘᴇʀ-ᴄᴜᴛ] ʟᴏɢᴏ ᴄʀᴇᴀᴛᴇᴅ:";
      break;
    case "water":
      apiUrl = `https://25ab9b30-8f63-4b90-b1b6-e5f5432361eb.id.repl.co/api/ephoto/water?text=${name}`;
      message = "[ᴡᴀᴛᴇʀ] ʟᴏɢᴏ ᴄʀᴇᴀᴛᴇᴅ:";
      break;
      case "leaf":
      apiUrl = `https://25ab9b30-8f63-4b90-b1b6-e5f5432361eb.id.repl.co/api/ephoto/leafgraphy?text=${name}`;
      message = "[ʟᴇᴀꜰ] ʟᴏɢᴏ ᴄʀᴇᴀᴛᴇᴅ:";
      break;
    default:
      return api.sendMessage(`Invalid logo type!`, threadID, messageID);
  }

  api.sendMessage("ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ...", threadID, messageID);
  let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
  let logo = response.data;
  fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"));
  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(pathImg),
    },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};