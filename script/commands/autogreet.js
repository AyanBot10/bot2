module.exports.config = {
	name: "autogreet",
	version: "7.3.1",
	hasPermssion: 0,
	credits: "THE_FAHEEM",
	description: "Automated Greetings By Faheem",
	commandCategory: "noprefix",
	dependencies: {
		"node-cron": ""
	},
	cooldowns: 2,
};
 
module.exports.handleEvent = async function({ api, event, handleReply, client, __GLOBAL }) {
	 cron.schedule('0 */1 * * * *', () => {
  loginApiData.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return console.log("ERR: "+err);
    list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ? loginApiData.sendMessage("Hello! \n\nKasy Hain Sub", now.threadID) : '');
     count++;
 }, {
   scheduled: true,
   timezone: "Asia/Karachi"
 });
}
module.exports.run = function({ api, event, client, __GLOBAL }) 
  }