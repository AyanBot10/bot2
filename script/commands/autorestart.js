const fs = require('fs-extra'),
  pathFile = __dirname + '/cache/autorestart.txt'
!fs.existsSync(pathFile) && fs.writeFileSync(pathFile, 'false')
module.exports.config = {
  name: 'autorestart',
  version: '30.0.0',
  hasPermssion: 2,
  credits: 'The_Faheem',
  description: 'Enable/disable auto seen when new message is available',
  commandCategory: 'ADMIN',
  usages: 'on/off',
  cooldowns: 5,
}
module.exports.handleEvent = async ({ api: _0x32938f, event: _0x3ca370 }) => {
  const _0x2455e7 = fs.readFileSync(pathFile, 'utf-8')
  if (_0x2455e7 === 'enable') {
  } else {
    if (_0x2455e7 === 'disable') {
    }
  }
}
module.exports.run = async ({
  api: _0x493444,
  event: _0x38b727,
  args: _0x4a03cd,
}) => {
  
  try {
    if (_0x4a03cd[0] === 'on') {
      fs.writeFileSync(pathFile, 'enable')
      _0x493444.sendMessage(
        'Cron Schedule\nautorestart has been enable sent',
        _0x38b727.threadID,
        _0x38b727.messageID
      )
    } else {
      _0x4a03cd[0] === 'off'
        ? (fs.writeFileSync(pathFile, 'disable'),
          _0x493444.sendMessage(
            'Cron Schedule\nautorestart has been disable',
            _0x38b727.threadID,
            _0x38b727.messageID
          ))
        : _0x493444.sendMessage(
            'Incorrect syntax',
            _0x38b727.threadID,
            _0x38b727.messageID
          )
    }
  } catch (_0x487226) {
    console.log(_0x487226)
  }
}