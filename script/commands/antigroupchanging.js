module.exports.config = {
  name: 'antichangegroupname',
  version: '11.9.7',
  credits: 'John Lester',
  hasPermssion: 1,
  description: 'Antichangegroupname for admin',
  usages: 'on/off',
  commandCategory: 'Box chat',
  cooldowns: 1,
}
module.exports.run = async ({
  api: _0x29819f,
  event: _0x8f203a,
  Threads: _0xe82722,
}) => {
  let _0x1c711b = (await _0xe82722.getData(_0x8f203a.threadID)).data || {}
  if (
    typeof _0x1c711b.antichangegroupnamebyjohnlesterumaru == 'undefined' ||
    _0x1c711b.antichangegroupnamebyjohnlesterumaru == false
  ) {
    _0x1c711b.antichangegroupnamebyjohnlesterumaru = true
  } else {
    _0x1c711b.antichangegroupnamebyjohnlesterumaru = false
  }
  return (
    await _0xe82722.setData(_0x8f203a.threadID, { data: _0x1c711b }),
    global.data.threadData.set(parseInt(_0x8f203a.threadID), _0x1c711b),
    _0x29819f.sendMessage(
      'Antichangegroupname successfully ' +
        (_0x1c711b.antichangegroupnamebyjohnlesterumaru == true
          ? 'enable'
          : 'disable'),
      _0x8f203a.threadID
    )
  )
}
