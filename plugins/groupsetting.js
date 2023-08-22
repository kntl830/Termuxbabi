let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'bula': 'not_announcement',
        'tutup': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*Format salah! Contoh :*
  *○ ${usedPrefix + command} tutup*
  *○ ${usedPrefix + command} buka*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group <buka/tutup>']
handler.tags = ['group']
handler.command = /^(grup|g)$/i

handler.admin = true
handler.botAdmin = true

module.exports = handler