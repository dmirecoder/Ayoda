/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	fxc7: 'https://api-xcoders.xyz/api',
	jojo: 'https://docs-jojo.herokuapp.com/api',
	zekais: 'https://api.zekais.com',
	zeks: 'https://api.zeks.me/api',
	waifu: 'https://api.waifu.pics/sfw'
}

// Apikey Website Api
global.APIKeys = {
	'https://api-xcoders.xyz/api': 'hnslrl1882',
	'https://api.zekais.com': 'RIGkeWDJ',
	'https://api.zeks.me/api': 'octavetech'
}

// Other
global.owner = ['6282296959969','6282296959969','6282296959969']
global.premium = ['6282296959969']
global.phone = '6282296959969'
global.owners  = '6282296959969'
global.acara = 'Nonton Anime'
global.tanggal = '4,6,2022'
global.botname = 'Ayaka'
global.packname = 'Whatsapp Bot MD'
global.author = 'Ayaka'
global.sessionName = 'octave'
global.tresshold = '0.65'
global.sourceurl = 'https://github.com/koleksibot'
global.donasiurl = 'https://telegra.ph/file/a158e51fb390b67383776.jpg'
global.prefa = ['-','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '⌛ Wait a minute... ⌛ ',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

//load file
global.thumb = fs.readFileSync('./lib/octave.png')
global.wala = fs.readFileSync('aud/wala.m4a')
global.biasa = fs.readFileSync('aud/biasalah.m4a')
global.samasama = fs.readFileSync('aud/sama.m4a')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
