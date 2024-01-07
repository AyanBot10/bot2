module.exports.config = {
  name: 'salam',
  version: '1.0.1',
  hasPermssion: 0,
  credits: 'FAHEEM',
  description: 'Just Respond',
  commandCategory: 'no prefix',
  cooldowns: 5,
}
module.exports.handleEvent = async function ({
  api: _0x2f094d,
  event: _0x54e351,
  client: _0x1cd773,
  Users: _0x46c7e0,
  __GLOBAL: _0x168a98,
}) {
  if (this.config.credits != 'FAHEEM') {
    return _0x2f094d.sendMessage(
      'Detected credits have been changed',
      _0x54e351.threadID,
      _0x54e351.messageID
    )
  }
  var { threadID: _0x10adec, messageID: _0x21a530 } = _0x54e351,
    _0x4f5315 = await _0x46c7e0.getNameUser(_0x54e351.senderID)
  if (
    _0x54e351.body.indexOf('Salam') == 0 ||
    _0x54e351.body.indexOf('Asalam') == 0 ||
    _0x54e351.body.indexOf('salam') == 0 ||
    _0x54e351.body.indexOf('Assalamualaikum') == 0 ||
    _0x54e351.body.indexOf('assalam') == 0 ||
    _0x54e351.body.indexOf('asalam O alikum') == 0 ||
    _0x54e351.body.indexOf('asalam') == 0 ||
    _0x54e351.body.indexOf('Asalam O alikum') == 0 ||
    _0x54e351.body.indexOf('Assalam') == 0 ||
    _0x54e351.body.indexOf('ASSALAM') == 0
  ) {
    var _0x349822 = {
      body:
        'Walaikum assalam wa rahmatullahi wa barakatuhu ' +
        _0x4f5315 +
        ' \u2764️',
    }
    _0x2f094d.sendMessage(_0x349822, _0x10adec, _0x21a530)
    _0x2f094d.setMessageReaction(
      '\u2764️',
      _0x54e351.messageID,
      (_0x48036a) => {},
      true
    )
  }
}
module.exports.run = function ({
  api: _0x4d8806,
  event: _0x5d812d,
  client: _0x469586,
  __GLOBAL: _0x38dd1b,
}) {}

