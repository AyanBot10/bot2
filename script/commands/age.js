module.exports.config = {
  name: "age2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "The_Faheem",
  description: "age no api =))",
  commandCategory: "Group",
  usages: "[day/month/Year of birth]",
  cooldowns: 0
};

module.exports.run = function ({ event, args, api, getText }) {
  const moment = require("moment-timezone");
  var date = new Date();
  var yearin = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
  var dayin = moment.tz("Asia/Ho_Chi_Minh").format("DD");
  var monthin = moment.tz("Asia/Ho_Chi_Minh").format("MM");
  var input = args[0];
  if (!input) return api.sendMessage("Wrong format", event.threadID);
  var content = input.split("/");
  var dayout = parseInt(content[0]);
  if (!dayout || isNaN(dayout) || dayout > 31 || dayout < 1) { return api.sendMessage("Invalid date of birth!", event.threadID)}
  var monthout = parseInt(content[1]);
  if (!monthout || isNaN(monthout) || monthout > 12 || monthout < 1) { return api.sendMessage("Invalid month of birth!", event.threadID)}
  var yearout = parseInt(content[2]);
  if (!yearout || isNaN(yearout) || yearout > yearin || yearout < 1) { return api.sendMessage("Invalid year of birth", event.threadID)}
  var tuoi = yearin - yearout
  var msg = `This year you ${tuoi} age`
    if (monthout > monthin) {var tuoi = tuoi - 1; var aftermonth = monthout - monthin; var msg = `This year you ${tuoi}  age. Even  ${aftermonth} You'll be round in months ${tuoi + 1}  age`};
  if (monthin == monthout && dayin < dayout) {var tuoi = tuoi - 1; var afterday = dayout - dayin; var msg = ` This year you ${tuoi} age. Even ${afterday} The other day is that you will be round ${tuoi + 1} age`};
  return api.sendMessage(msg, event.threadID)
}