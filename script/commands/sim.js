module.exports.config = {
  name: 'sim',
  version: '1.0.0',
  hasPermssion: 0,
  credits: 'Joshua Sy',
  description: 'talk to sim',
  usages: '[text]',
  commandCategory: '...',
  cooldowns: 5,
}
module.exports.run = async ({
  api: _0x5ad7d9,
  event: _0x2bbc22,
  args: _0x39da11,
}) => {
  const _0x4baa20 = global.nodemodule.axios
  let _0x3611a2 = _0x39da11.join(' ')
  const _0x4aff36 = await _0x4baa20.get(
    'https://newapi2.faheem007.repl.co/sim?type=ask&ask=' + _0x3611a2
  )
  var _0x36f4c7 = _0x4aff36.data.answer
  return _0x5ad7d9.sendMessage(
    '' + _0x36f4c7,
    _0x2bbc22.threadID,
    _0x2bbc22.messageID
  )
}