let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.nataganz.com/api/asupan/random?apikey=YOUR_APIKEY', 'asupan.mp4', 'Nih Kak', m)
}
handler.help = ['asupan']
handler.tags = ['asupan']

handler.command = /^(asupan)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler